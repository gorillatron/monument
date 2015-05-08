import Ember from 'ember';
import Notify from 'ember-notify';


export default Ember.Controller.extend({

  previewHref: function() {
    let name = encodeURIComponent(this.model.get('name'))
    let content = encodeURIComponent(this.model.get('content'))
    return `/static/_preview?name=${name}&content=${content}`
  }.property('model.name', 'model.content'),

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
