var React         = require( 'react' )
var _             = require( 'underscore')
var getRandomInt  = require( '../lib/getRandomInt' )
var Podcast       = require( './Podcast.jsx' )
var ImageTile     = require( './ImageTile.jsx' )
var Social        = require( './Social.jsx' )


var Tiles = React.createClass({

  getInitialState: function() {
    return {
      loadingtext: '.'
    }
  },

  componentDidMount: function() {
    var i = 2
    this.loadingInterval = setInterval(_.bind(function() {
      if(i == 7) i = 1
      this.setState({
        loadingtext: _.map(_.range(1,i), function(item){ return <span className={(!(i % 2) ? 'r' : 'b')}>.</span> })
      })
      i++
    }, this), 150)
  },

  componentDidUpdate: function() {
    setTimeout(_.bind(function(){
      clearInterval( this.loadingInterval )
    }, this), 3000)
  },

  getDefaultProps: function() {
    return { bits: [] }
  },

  render: function() { return (
    <div className='tiles'>
      {
        this.props.bits && this.props.bits.length ?

          <ul>
            {_.map(this.props.bits, function(bit) {
              return bit.type == 'PODCAST' ? <Podcast bit={bit} onClick={this.podcastOnClick} /> :
                     bit.type == 'SOCIAL'  ? <Social bit={bit} /> :
                     bit.type == 'IMAGE' ?   <ImageTile bit={bit}/> :
                                             <li className='tile'></li>
            }, this)}
          </ul>

        :

        <div className='loader'>
          <div className='text'>{this.state.loadingtext}</div>
        </div>

      }

    </div>
  )},

  podcastOnClick: function( event, podcastComponent ) {
    if(this.activePodcastComponent)
      this.activePodcastComponent.setState({ active: false })
    podcastComponent.setState({ active: true })
    this.activePodcastComponent = podcastComponent
  }

})


module.exports = Tiles
