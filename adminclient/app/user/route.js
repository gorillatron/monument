import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    save: function( user ) {
      user.save()
    },

    willTransition: function(transition) {
      // if(!this.get('at')) {
      //   transition.abort()
      //   this.set('at', true)
      //   setTimeout(()=> {transition.retry()}, 2000)
      // }
      if(this.controller.model.get('isDirty') && !confirm('User has changes, want to continue?')) {
        transition.abort()
      }
    }

  },

  deactivate: function() {
    this.controller.resetModel()
  }

});
