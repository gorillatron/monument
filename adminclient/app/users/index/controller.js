import Ember from 'ember';
import fuzzymatch from '../../func/fuzzymatch'

export default Ember.ArrayController.extend({

  queryParams: ['role'],

  role: '',

  search: '',

  filteredModels: function() {
    return this.model.filter((user) =>{

      if(
        (this.role && user.get('role') !== this.role) ||
        (this.search && !(
          (fuzzymatch(user.get('name'), this.search)) ||
          (fuzzymatch(user.get('email'), this.search)) ||
          (user.get('phoneNumber').match(this.search))
        ))
      ) {
        return false
      }

      return true
    })
  }.property('role', 'search', 'model')

});
