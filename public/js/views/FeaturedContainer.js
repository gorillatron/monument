var $             = require( 'jquery-browserify' ),
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

  },

  render: function() {
    this.collection.forEach(function( feature ) {
      var featuredView
      
      featuredView = new Featured({ model: feature, el: this.$el })
      featuredView.render()
    }, this)
    this.update()
  },

  leftClickHandler: function( event ) {
     if( this.pagenr - 1 >= 0 ) {
      this.pagenr--
      this.update()
     }
  },

  rightClickHandler: function( event ) {
    if( this.pagenr + 1 <= this.nrOfPages ) {
      this.pagenr++
      this.update()
    }
  },

  update: function() {
    var x

    x = this.getPosition()
    
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

  getPosition: function() {
    return this.$el.width() * - (this.pagenr)
  }

})

module.exports = FeaturedContainer