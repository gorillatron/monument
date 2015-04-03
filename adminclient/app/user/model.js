import DS from 'ember-data';

export default DS.Model.extend({
  name:         DS.attr('string'),
  phoneNumber:  DS.attr('string'),
  email:        DS.attr('string'),
  role:         DS.attr('string'),
  createdAt:    DS.attr('date'),
  updatedAt:    DS.attr('date'),

  persisted: false,

  didUpdate: function() {
    this.set('persisted', true);
  },

  resetPersistenceFlag: function(){
    this.set('persisted', false);
  }.observes('isDirty')

});
