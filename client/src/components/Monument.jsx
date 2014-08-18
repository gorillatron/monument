var React     = require( 'react' )
var _         = require( 'underscore')
var Podcasts  = require( './Podcasts.jsx' )


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Monument = React.createClass({

  headerClassNameSequence: ['r', 'b', 'white'],

  logoClassNameSequence: ['r', 'b', 'r b', ''],

  componentDidMount: function() {
    this.borderRoll()
    this.logoPulse()
  },

  borderRoll: function() {
    var setColor = () => {
      this.setState({
        headerclass: this.headerClassNameSequence[getRandomInt(0, this.headerClassNameSequence.length)]
      })
    }
    setInterval(setColor, 3500)
    setColor()
  },

  logoPulse: function() {
    var setColor = () => {
      this.setState({
        logoclass: this.logoClassNameSequence[getRandomInt(0, this.logoClassNameSequence.length)]
      })
    }
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
      <header className={this.state.headerclass}>
        <div className={ 'logo ' + this.state.logoclass }>
          <div className='icon'></div>
          <span className="r">onument</span>
          <span className="b">onument</span>
        </div>
      </header>
      <Podcasts tracks={this.props ? this.props.tracks : []} />
    </div>
  )}

})


module.exports = Monument
