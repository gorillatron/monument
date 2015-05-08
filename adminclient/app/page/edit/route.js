import Ember from 'ember';

export default Ember.Route.extend({

  controllerName: 'page',

  templateName: 'page/edit',

  clearUnPersistedModel: function(){
    this.controller.model.rollback()
  }.on('deactivate'),

  actions: {

    willTransition: function(transition) {
      let model = this.controller.model

      if(model.get('isDirty') && !confirm('Page isnt saved, you want to continue without saving?')) {
        transition.abort()
      }
    }

  }

});
