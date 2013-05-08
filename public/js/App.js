var Backbone  = require( 'backbone' ),
    PodCasts  = require( './collections/PodCasts' )
    AppView   = require( './views/App' ),
    $         = require( 'jquery-browserify' ),
    _         = require( 'underscore' )

Backbone.$ = $

var App = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    var podCasts

    podCasts = new PodCasts()
    podCasts.fetch()

    $( document ).ready(_.bind(function( event ) {

      this.view = new AppView({ 
        el: 'body',
        collection: podCasts
      })

      Backbone.history.start()

    }, this))
  },

  index: function() {}

})

module.exports = App