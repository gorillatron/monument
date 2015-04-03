import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({

  restore: function(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url:         '/session/token',
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

  authenticate: function(data) {
    var email = data.email
    var password = data.password

    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url:         '/session/token',
        type:        'POST',
        data:        JSON.stringify({ grant: 'password', email: email, password: password }),
        dataType:    'json',
        contentType: 'application/json'
      })
      .then((response) => {
        if(response.user.role !== 'admin') {
          alert('You have a user allright! But its not admin :sadface')
          reject(xhr)
        }
        else {
          resolve(response)
        }
      }, (xhr) => {
        reject(xhr)
      })
    })
  },

  invalidate: function(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url:         '/session/token',
        type:        'DELETE',
        dataType:    'json',
        contentType: 'application/json'
      })
      .then((response) => {
        resolve()
      }, (xhr) => {
        reject()
      })
    })
  }

});
