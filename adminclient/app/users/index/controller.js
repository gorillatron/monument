import Ember from 'ember';

export default Ember.ArrayController.extend({

  itemController: 'user',

  queryParams: ['role', 'search', 'subscribesToNews'],

  role: null,

  search: null,

  displayButtons: false,

  _buttonDisplayTimer: null,

  generatedCsv: null,

  actions: {
    toggleButtons: function() {
      this.toggleProperty('displayButtons')
      if(this.get('displayButtons')) {
        clearTimeout(this._buttonDisplayTimer)
        this._buttonDisplayTimer = setTimeout(() => {this.set('displayButtons', false)}, 4000)
      }
    },
    generateCsv: function(attr) {
      clearTimeout(this._buttonDisplayTimer)
      this.set('displayButtons', false)
      var csv = this.map((userController) => userController.model.get(attr)).join(', ')
      this.set('generatedCsv', csv)
    },
    clearCsv: function() {
      this.set('generatedCsv', null)
    }
  }

});
