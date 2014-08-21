var React           = require( 'react' )
var _               = require( 'underscore')
var getRandomInt    = require( '../lib/getRandomInt' )
var RumbleAnimation = require( './mixins/RumbleAnimation' )


var ImageTile = React.createClass({

  mixins: [
    new RumbleAnimation({
      initialdelay: 4500,
      rumbleDuration: [150, 330],
      interval: [7900, 23000]
    })
  ],

  render: function(){ return (
    <li className="tile logo" id="logotile">
      <img src={this.props.url} />
    </li>
  )}

})


module.exports = ImageTile
