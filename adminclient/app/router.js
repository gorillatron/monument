import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('users', function(){
    this.resource('user', { 'path' : '/:user_id' });
  });

  this.resource('podcasts', function(){});

  this.resource('pages', function() {
    this.resource('page', { 'path': '/:page_id' });
  });
});

export default Router;
