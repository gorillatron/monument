import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({

  restore: function(data) {
    console.log('authenticators.custom.restore', data)
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url:         'http://www.localhost.com:3000/session/token',
        type:        'GET',
        dataType:    'json',
        contentType: 'application/json'
      })
      .then((response) => {
        if(response.token === data.token) {
          resolve(response)
        }
        else {
          reject(response)
        }
      },
      (errorxhr) => {
        reject(errorxhr)
      })
    })
  },

  authenticate: function(options) {
    var email = options.email || 'jornandretangen@gmail.com'
    var password = options.password || 'lol'

    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url:         'http://www.localhost.com:3000/session/token',
        type:        'POST',
        data:        JSON.stringify({ grant: 'password', email: email, password: password }),
        dataType:    'json',
        contentType: 'application/json'
      })
      .then((response) => {
        resolve(response)
      }, (xhr) => {
        reject(xhr)
      })
    })
  },

  invalidate: function(data) {
    console.log('authenticators.custom.invalidate')
  }

});
