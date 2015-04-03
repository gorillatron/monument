import Ember from 'ember';

export default Ember.ObjectController.extend({

  roles: ['admin', 'normal'],

  isClean: Ember.computed.not('model.isDirty'),

  resetModel: function() {
    if(this.model.get('isDirty')) {
      this.model.rollback()
    }
    return false
  },

  actions: {

    destroy: function() {
      if(confirm("Are you sure you want to destroy user " + this.model.get('name'))) {
        this.model.deleteRecord()
        this.model.save()
      }
    }
  }

});
