import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import fuzzymatch from '../../func/fuzzymatch';
import objectFilter from '../../func/objectFilter';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(params) {
    var query = objectFilter(params, (val) => val !== null)
    return this.store.findQuery('user', query)
  }

});
