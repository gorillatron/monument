var _             = require( 'underscore' )
var getRandomInt = require( '../../lib/getRandomInt' )

function RumbleAnimation( options ) {

  this.options = _.extend({
    initialdelay: 4500,
    rumbleDuration: [150, 330],
    interval: [7900, 23000]
  }, options)

  this.componentDidMount = function() {
    setTimeout(_.bind(this.rumble, this), this.options.initialdelay)
  }

  this.rumble = function( options ) {
    var tile = this.getDOMNode()
    tile.className += " rumble"
    setTimeout(function() {
      tile.className.replace( 'rumble', '' )
    }, getRandomInt(this.options.rumbleDuration[0], this.options.rumbleDuration[1]))
    setTimeout( _.bind(this.rumble, this), getRandomInt(this.options.interval[0], this.options.interval[1]) )
  }

}


module.exports = RumbleAnimation
