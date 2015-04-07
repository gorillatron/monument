/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

import bcrypt from 'bcrypt';
import Promise from 'bluebird';
import WLValidationError from 'sails/node_modules/waterline/lib/waterline/error/WLValidationError';
import norwegianNumberRegexp from '../regexp/norwegianNumber';

var userRoles = {
  'admin': {},
  'normal': {}
}

export default {

  schema: true,

  types: {
    norwegianNumber: function(number) {
      return norwegianNumberRegexp.exec(number) ? true : false
    }
  },

  attributes: {

    name: {
      type: 'string'
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
      or: Object.keys(params).reduce((or, paramKey) => {
        var paramVal = params[paramKey]
        if(paramVal) {
          or.push({ [paramKey]: paramVal })
        }
        return or
      }, [])
    }

    return User.findOne(query).then((user) => {
      if(user) {
        return Promise.resolve(user)
      }
      else {
        return User.create(params)
      }
    })
  }

};
