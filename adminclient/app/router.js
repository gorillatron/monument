import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('users', function(){
    this.resource('user', { 'path' : '/:user_id' });
  });

  this.resource('pages', function() {});

  this.resource('page', function() {
    this.route('edit', { 'path': '/:page_id' })
    this.route('create', { 'path': '/create' })
  });

});

export default Router;
