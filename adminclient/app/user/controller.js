import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.ObjectController.extend({

  needs: ['user'],

  roles: ['admin', 'normal'],

  isClean: Ember.computed.not('model.isDirty'),

  resetModel: function() {
    if(this.model.get('isDirty')) {
      this.model.rollback()
    }
    return false
  },

  flashMessage: function() {
    if(this.model.persisted) {
      Notify.success('User saved.')
    }
  }.observes('model.persisted'),

  actions: {

    destroy: function() {
      if(confirm("Are you sure you want to destroy user " + this.model.get('name'))) {
        this.model.deleteRecord()
        this.model.save()
      }
    }
  }

});
