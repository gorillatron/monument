import Ember from 'ember';

export default Ember.Controller.extend({

  roles: ['admin', 'normal'],

  isClean: Ember.computed.not('model.isDirty'),

  resetModel: function() {
    if(this.model.get('isDirty')) {
      this.model.rollback()
    }
    return false
  }

});
