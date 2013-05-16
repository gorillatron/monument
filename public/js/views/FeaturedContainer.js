var $             = require( 'jquery-browserify' ),
    _             = require( 'underscore' ),
    BaseView      = require( './BaseView' ),
    Featured      = require( './Featured' )

var FeaturedContainer = BaseView.extend({

  events: {
    'click .arrow.left': 'leftClickHandler',
    'click .arrow.right': 'rightClickHandler'
  },

  initialize: function() {

    this.nrOfPages = this.collection.length - 1
    this.pagenr = this.nrOfPages
    this.threeD = Modernizr.csstransforms

    this.featuredViews = []

  },

  render: function() {
    this.featuredViews = []
    this.collection.forEach(function( feature ) {
      var featuredView
      
      featuredView = new Featured({ model: feature, el: this.$el })
      featuredView.render()

      this.featuredViews.push( featuredView )

    }, this)
    this.instantUpdate()
  },

  leftClickHandler: function( event ) {
     if( this.pagenr - 1 >= 0 ) {
      this.featuredViews[this.pagenr].deselected()
      this.pagenr--
      this.update()
      this.featuredViews[this.pagenr].selected()
    }
  },

  rightClickHandler: function( event ) {
    if( this.pagenr + 1 <= this.nrOfPages ) {
      this.featuredViews[this.pagenr].deselected()
      this.pagenr++
      this.update()
      this.featuredViews[this.pagenr].selected()
    }
  },

  update: function() {
    var x

    x = this.getPosition()
    
    if( this.pagenr == 0 ) {
      this.$el.find( '.arrow.left' ).hide()
    } 
    else if( this.pagenr == this.nrOfPages ) {
      this.$el.find( '.arrow.right' ).hide()
    }
    else {
      this.$el.find( '.arrow.left' ).show()
      this.$el.find( '.arrow.right' ).show()
    }

    if( this.threeD ) {
      this.$el.find( '.panes' ).attr( 'style', 
        '-moz-transform: translate3d(' + x + 'px, 0px, 0px);' +
        '-ms-transform: translate3d(' + x + 'px, 0px, 0px);' +
        '-o-transform: translate3d(' + x + 'px, 0px, 0px);' + 
        '-webkit-transform: translate3d(' + x + 'px, 0px, 0px);' + 
        'transform: translate3d(' + x + 'px, 0px, 0px);')  
    }
    else {
      this.$el.find('.panes').css( 'left', x )
    }
  },

  instantUpdate: function() {
    this.$el.find( '.panes' ).addClass( 'no-transition' )
    setTimeout(_.bind(this.update, this), 5)
    setTimeout(_.bind(this.$el.removeClass, this.$el.find('.panes'), 'no-transition' ), 300)
    this.featuredViews[this.pagenr].selected()
  },

  getPosition: function() {
    return this.$el.width() * - (this.pagenr)
  }

})

module.exports = FeaturedContainer