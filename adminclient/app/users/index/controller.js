import Ember from 'ember';

export default Ember.ArrayController.extend({

  itemController: 'user',

  queryParams: ['role', 'search'],

  role: null,

  search: null,

  displayButtons: false,

  _buttonDisplayTimer: null,

  actions: {
    showButtons: function() {
      this.set('displayButtons', !this.get('displayButtons'))
      this._buttonDisplayTimer = setTimeout(() => {this.set('displayButtons', false)}, 4000)
    },
    generateCsv: function(attr) {
      clearTimeout(this._buttonDisplayTimer)
      this.set('displayButtons', false)
    }
  }

});
