var $                 = require( 'jquery-browserify' ),
    BaseView          = require( './BaseView' ),
    FeaturedContainer = require( './FeaturedContainer' )


var AppView = BaseView.extend({

  initialize: function() {},

  render: function() {
    this.featuredContainer = new FeaturedContainer({ el: this.$el.find("#featured_container"), collection: this.collection })
    this.featuredContainer.render()
  }

})


module.exports = AppView