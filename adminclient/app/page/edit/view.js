import Ember from 'ember';

export default Ember.View.extend({

  didInsertElement: function() {
    this.$().focus()
  },

  keyDown: function(event) {
    if(event.keyCode == 27) {
      this.get('controller').send('turnOfFullscreen')
    }
  }

});