import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  controllerName: 'user',

  actions: {

    save: function( user ) {
      user.save()
    },

    willTransition: function(transition) {
      if(this.controller.model.get('isDirty') && !confirm('User has changes, want to continue?')) {
        transition.abort()
      }
    }

  },

  deactivate: function() {
    this.controller.resetModel()
  }

});
