import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  authenticator: 'authenticator:custom',

  actions: {

    authenticateSession: function() {
      console.log('application.route.authenticateSession')
      var session = this.get('session')
      return session.authenticate('authenticator:custom', {lol: 'looool'});
    },

    invalidateSession: function() {
      console.log('application.route.invalidateSession')
    },

    sessionAuthenticationSucceeded: function() {

    },

    sessionAuthenticationFailed: function() {

    }

  }

});
