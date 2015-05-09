import Ember from 'ember';
import Notify from 'ember-notify';


export default Ember.Controller.extend({

  roles: ['admin', 'normal'],

  isClean: Ember.computed.not('model.isDirty'),

  displaySubscriptionBoolean: function() {
    return this.model.get('subscribesToNews') ? 'yes' : 'no'
  }.property('model.subscribesToNews'),

  actions: {

    save: function(){
      this.model.save().then(() => {
        Notify.success('User saved.')
      }, (errorRes) => {
        let error = errorRes.responseJSON

        let errorMessages = Object.keys(error.invalidAttributes).map((attrName) => {
          return error.invalidAttributes[attrName].map((attr) => attr.message)
        })

        let errorMessage = errorMessages.reduce((arr, next) => {
          return arr.concat(next)
        }, []).join('\n')

        Notify.error(errorMessage)
      })
    },

    destroy: function() {
      if(confirm("Are you sure you want to destroy user " + this.model.get('name') + ". \nNB: User data will not be permanently deleted.")) {
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
