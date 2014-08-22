var React           = require( 'react' )
var _               = require( 'underscore')
var getRandomInt    = require( '../lib/getRandomInt' )
var RumbleAnimation = require( './mixins/RumbleAnimation' )
var alex            = require( '../lib/Alex' )



var ImageTile = React.createClass({

  mixins: [
    new RumbleAnimation({
      initialdelay: 4500,
      rumbleDuration: [150, 330],
      interval: [7900, 23000]
    })
  ],

  render: function(){ return (
    <li className="tile logo" id="logotile" onClick={this.onClick}>
      <img src={this.props.bit.data.url} />
    </li>
  )},

  onClick: function() {
    alex.speak( this.props.bit.data.utterance || '' )
  }

})


module.exports = ImageTile
