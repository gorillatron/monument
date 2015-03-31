import Ember from 'ember';

export default Ember.Controller.extend({

  roles: ['admin', 'normal'],

  isClean: Ember.computed.not('model.isDirty')

});
