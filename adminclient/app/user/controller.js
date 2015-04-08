import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({

  roles: ['admin', 'normal'],

  isClean: Ember.computed.not('model.isDirty'),

  displaySubscriptionBoolean: function() {
    return this.model.get('subscribesToNews') ? 'yes' : 'no'
  }.property('model.subscribesToNews'),

  resetModel: function() {
    if(this.model.get('isDirty')) {
      this.model.rollback()
    }
    return false
  },

  actions: {

    save: function(){
      this.model.save().then(() => {
        Notify.success('User saved.')
      }, () => {
        Notify.error('Could not persist to the server.')
      })
    },

    destroy: function() {
      if(confirm("Are you sure you want to destroy user " + this.model.get('name'))) {
        this.model.deleteRecord()
        this.model.save().then(() => {
          Notify.success('User deleted.')
        }, () => {
          Notify.error('Could not persist to the server.')
        })
      }
    }
  }

});
