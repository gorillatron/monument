import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  controllerName: 'page',

  templateName: 'page/edit',

  model: function() {
    return this.store.createRecord('page')
  },

  actions: {

    willTransition: function(transition) {
      let model = this.controller.model

      if(model.get('isDirty') && !confirm('Page isnt saved, you want to continue without saving?')) {
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
