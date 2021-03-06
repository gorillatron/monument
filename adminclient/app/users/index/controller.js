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
      this.set('generatedCsv', (
        this
          .map((userController) => userController.model.get(attr))
          .filter((val) => val && val.length > 0)
          .join(', ')
      ))
    },

    clearCsv: function() {
      this.set('generatedCsv', null)
    }
  }

});
