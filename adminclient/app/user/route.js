import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save: function( user ) {
      console.log(this.getProperties())
      user.save()
    }
  }

});
