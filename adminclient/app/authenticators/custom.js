import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({

  restore: function(data) {
    console.log('authenticators.custom.restore')
  },

  authenticate: function(options) {
    console.log('authenticators.custom.authenticate', options)
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url:         'http://www.localhost.com:3000/session/token',
        type:        'POST',
        data:        JSON.stringify({ grant: 'password', email: options.email, password: options.password }),
        dataType:    'json',
        contentType: 'application/json'
      }).then(() => {
        console.log(arguments)
        resolve()
      })
    })
  },

  invalidate: function(data) {
    console.log('authenticators.custom.invalidate')
  }

});
