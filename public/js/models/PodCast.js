var Backbone = require( 'backbone' )


var PodCast = Backbone.Model.extend({

  toJSON: function() {
    var toJSON

    toJSON = Backbone.Model.prototype.toJSON.apply( this, arguments )

    toJSON.numberFormated = this.getNumberFormated()

    return toJSON
  },

  getNumberFormated: function() {
    return "0" + this.get( 'number' )
  }

})

module.exports = PodCast