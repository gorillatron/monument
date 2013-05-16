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

    backgroundPane  = this.backgroundTemplate( this.model.toJSON() )
    playerPane      = this.playerTemplate( this.model.toJSON() )
    h2Pane          = this.h2Template( this.model.toJSON() )
    descriptionPane = this.descriptionTemplate( this.model.toJSON() )
    
    this.$el.find( '.panes.backgrounds' ).append( backgroundPane )
    this.$el.find( '.panes.players' ).append( playerPane )
    this.$el.find( '.panes.h2' ).append( h2Pane )
    this.$el.find( '.panes.description' ).append( descriptionPane )

  }

})

module.exports = Featured