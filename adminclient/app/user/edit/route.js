import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  controllerName: 'user',

  templateName: 'user/edit',

  clearUnPersistedModel: function(){
    this.controller.model.rollback()
  }.on('deactivate'),

  actions: {

    willTransition: function(transition) {
      let model = this.controller.model

      if(model.get('isDirty') && !confirm('User isnt saved, you want to continue without saving?')) {
        transition.abort()
      }
    }

  }



});
