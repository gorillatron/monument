import Ember from 'ember';

export default Ember.ArrayController.extend({

  itemController: 'user',

  queryParams: ['role', 'search'],

  role: null,

  search: null

});
