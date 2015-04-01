import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  actions: {

    // sessionRequiresAuthentication: function() {
    //   console.log('application.route.sessionRequiresAuthentication')
    // },
    //
    // authenticateSession: function() {
    //   console.log('application.route.authenticateSession')
    //   var session = this.get('session')
    //   return session.authenticate('authenticator:custom');
    // },
    //
    // invalidateSession: function() {
    //   console.log('application.route.invalidateSession')
    // },
    //
    // sessionAuthenticationSucceeded: function() {
    //   console.log('application.route.sessionAuthenticationSucceeded', arguments)
    // },
    //
    // sessionAuthenticationFailed: function() {
    //   console.log('application.route.sessionAuthenticationFailed', arguments)
    // }

  }

});
