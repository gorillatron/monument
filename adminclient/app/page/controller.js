import Ember from 'ember';
import Notify from 'ember-notify';


export default Ember.Controller.extend({

  actions: {

    save: function() {
      return this.model.save()
        .then(() => {
          return Notify.success('Page saved')
        }, () => {
          return Notify.error('Could not persist to the server.')
        })
    },

    destroy: function() {
      if(confirm("Are you sure you want to destroy page: " + this.model.get('name') + ". \nNB: IT WILL BE PERMANENTLY DELETED")) {
        this.model.deleteRecord()
        this.model.save()
          .then(() => {
            return Notify.success('Page deleted')
          }, () => {
            return Notify.error('Could not persist to the server.')
          })
      }
    }

  }

});
