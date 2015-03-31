import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {
    destroy: function(user) {
      if(confirm("Are you sure you want to destroy user " + user.get('name'))) {
        user.deleteRecord()
        user.save()
      }
    }
  }

});
