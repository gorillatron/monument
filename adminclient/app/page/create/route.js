import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  controllerName: 'page',

  templateName: 'page/edit',

  model: function() {
    return this.store.createRecord('page')
  }

});
