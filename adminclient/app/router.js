import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource('users', function(){})

  this.resource('user', function(){
    this.route('create', { 'path': '/create' })
    this.route('edit', { 'path': '/:user_id' })
  })

  this.resource('pages', function() {})

  this.resource('page', function() {
    this.route('create', { 'path': '/create' })
    this.route('edit', { 'path': '/:page_id' })
  })

});

export default Router;
