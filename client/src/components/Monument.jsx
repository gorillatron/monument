var React     = require( 'react' )
var _         = require( 'underscore')
var Tiles     = require( './Tiles.jsx' )


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Monument = React.createClass({

  logoClassNameSequence: ['r', 'b', 'r b', '', 'r', 'b', ' r b', 'r b', ''],

  componentDidMount: function() {
    this.logoPulse()
  },

  logoPulse: function() {
    var setColor = _.bind(function() {
      this.setState({
        logoclass: this.logoClassNameSequence[getRandomInt(0, this.logoClassNameSequence.length)]
      })
    }, this)
    setInterval(setColor, 1500)
    setColor()
  },

  getInitialState: function() {
    return {
      headerclass: 'black'
    }
  },

  render: function() { return (
    <div id="container">
      {/*<header className={this.state.headerclass}>
        <div className={ 'logo ' + this.state.logoclass }>
          <div className='icon'></div>
          <span className="r">onument</span>
          <span className="b">onument</span>
        </div>
      </header>*/}
      <Tiles bits={this.props ? this.props.bits : []} />
    </div>
  )}

})


module.exports = Monument
