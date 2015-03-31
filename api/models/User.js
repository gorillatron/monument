/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt')

module.exports = {

  schema: true,

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
      unique: true
    },

    encryptedPassword: {
      type: 'string',
      protected: true
    },

    role: {
      type: 'string',
      defaultsTo: 'normal',
      enum: ['admin', 'normal']
    },

    partakingAtEvent: {
      collection: 'Event',
      via: 'participants'
    }

  },

  beforeCreate: function(values, next) {
    if(!values.email && !values.phoneNumber) {
      return next(new Error('user must have either email or phoneNumber'))
    }
    next()
  }

};
