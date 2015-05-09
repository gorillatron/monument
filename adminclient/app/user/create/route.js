import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  controllerName: 'user',

  model: function() {
    return this.store.createRecord('user')
  },

  actions: {

    willTransition: function(transition) {
      let model = this.controller.model

      if(model.get('isDirty') && !confirm('User isnt saved, you want to continue without saving?')) {
        transition.abort()
      }
    }

  },

  clearUnPersistedModel: function(){
    let model = this.controller.model

    if(model.get('isNew')) {
      return model.deleteRecord()
    }

  }.on('deactivate')


});
