var Backbone  = require( 'Backbone' ),
    PodCasts  = require( './collections/PodCasts' )
    AppView   = require( './views/App' ),
    $         = require( 'jquery' ),
    _         = require( 'underscore' )

var App = Backbone.Router.extend({

  routes: {
    '': 'index'
  },

  initialize: function() {
    var podCasts

    podCasts = new PodCasts()

    $( document ).ready(_.bind(function( event ) {

      this.view = new AppView({ 
        el: 'body',
        collection: podCasts
      })

      podCasts.fetch()

      Backbone.history.start()

    }, this))
  },

  index: function() {}

})

module.exports = App