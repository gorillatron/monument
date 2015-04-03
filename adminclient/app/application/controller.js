import Ember from 'ember';

export default Ember.Controller.extend({

  activepath: function() {
    console.log(arguments, this)
  }.property()

});
