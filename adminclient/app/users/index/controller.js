import Ember from 'ember';
import fuzzymatch from '../../func/fuzzymatch';

export default Ember.ArrayController.extend({

  itemController: 'user',

  queryParams: ['role', 'search'],

  role: '',

  search: ''

});
