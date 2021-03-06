/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

import bcrypt from 'bcrypt';
import Promise from 'bluebird';
import WLValidationError from 'sails/node_modules/waterline/lib/waterline/error/WLValidationError';
import norwegianNumberValidator from '../validators/norwegianNumber';

var userRoles = {
  'admin': {},
  'normal': {}
}

export default {

  schema: true,

  types: {
    norwegianNumber: function(number) {
      let errors = norwegianNumberValidator(number)
      
      if(errors) {
        return false
      }

      return true
    }
  },

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    email: {
      type: 'email',
      unique: true
    },

    phoneNumber: {
      type: 'string',
      unique: true,
      norwegianNumber: true
    },

    encryptedPassword: {
      type: 'string',
      protected: true
    },

    role: {
      type: 'string',
      defaultsTo: 'normal',
      enum: Object.keys(userRoles)
    },

    subscribesToNews: {
      type: 'boolean',
      defaultsTo: true
    },

    partakingAtEvent: {
      collection: 'Event',
      via: 'participants'
    },

    deleteTime: {
      type: 'date'
    }

  },

  beforeCreate: function(values, next) {
    if(values.password) {

      if(values.password !== values.passwordConfirm) {
        return next(new Error('does not match'))
      }
      else if(values.password.length < 8) {
        return next(new Error('password not > 8 characters'))
      }

      bcrypt.hash(values.password, 10, function(err, hash) {
        if(err) {
          return next(err)
        }
        values.encryptedPassword = hash
        next()
      })

    }
    else {
      next()
    }
  },

  beforeValidate: function(values, next) {
    if(!values.email && !values.phoneNumber) {
      return next(new WLValidationError({
        "error": "E_VALIDATION",
        "status": 400,
        "summary": "2 attribute is invalid",
        "model": "User",
        "invalidAttributes": {
          "multi": [
            {
              "rule": "subrequired",
              "message": "phoneNumber or email is required"
            }
          ]
        }
      }))
    }
    return next()
  },

  findOrCreateOne: function(params, cb) {
    var query = {
      or: []
    }

    if(params.email && params.email !== '') {
      query.or.push({ email: params.email })
    }

    if(params.phoneNumber && params.phoneNumber !== '') {
      query.or.push({ phoneNumber: params.phoneNumber })
    }

    var ensuredUser = (user) => {
      for(var attr in params) {
        if(params[attr]) user[attr] = params[attr]
      }
      return user.save()
    }

    return User.findOne(query).then((user) => {
      if(user) {
        return Promise.resolve(user).then(ensuredUser)
      }
      else {
        return User.create(params).then(ensuredUser)
      }
    })
  },

  findOneNotDeletedAnd: function(query, cb) {
    query = query ? query : {}
    query.deleteTime = null
    return User.findOne(query, cb)
  },

  findNotDeletedAnd: function(query, cb) {
    query = query ? query : {}
    query.deleteTime = null
    return User.find(query, cb)
  }

};
