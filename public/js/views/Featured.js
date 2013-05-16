var $         = require( 'jquery-browserify' ),
    _         = require( 'underscore' ),
    BaseView  = require( './BaseView' )

var Featured = BaseView.extend({

  backgroundTemplate:   _.template( $('#featured_background_pane').html() ),
  playerTemplate:       _.template( $('#featured_player_pane').html() ),
  h2Template:           _.template( $('#featured_h2_pane').html() ),
  descriptionTemplate:  _.template( $('#featured_description_pane').html() ),

  render: function() {
    var backgroundPane, playerPane, h2Pane, descriptionPane

    this.$backgroundPane  = $( this.backgroundTemplate( this.model.toJSON()) )
    this.$playerPane      = $( this.playerTemplate( this.model.toJSON()) )
    this.$h2Pane          = $( this.h2Template( this.model.toJSON()) )
    this.$descriptionPane = $( this.descriptionTemplate( this.model.toJSON()) )
    
    this.$el.find( '.panes.backgrounds' ).append( this.$backgroundPane )
    this.$el.find( '.panes.players' ).append( this.$playerPane )
    this.$el.find( '.panes.h2' ).append( this.$h2Pane )
    this.$el.find( '.panes.description' ).append( this.$descriptionPane )

  },

  selected: function() {
    this.$h2Pane.find( 'h2' ).fadeIn( 2000 )
  },

  deselected: function() {
    this.$h2Pane.find( 'h2' ).fadeOut( 200 )
  }

})

module.exports = Featured