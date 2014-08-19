var React = require( 'react' )
var _     = require( 'underscore')


var Podcast = React.createClass({

  getInitialState: function() {
    return { active: false }
  },

  onClick: function( event ) {
    this.props.onClick( event, this )
  },

  render: function(){ return (
    <li className={'tile ' + (this.state.active ? 'active' : '')} onClick={this.onClick}>
      <div className="cover" style={{ 'background-image': 'url(' +this.props.track.artwork_url.replace('large', 't500x500')+ ')' }}>
      </div>
      <div className="cover-overlay">
        <h1 className='title'> {this.props.track.title} </h1>
        {this.state.active ?
          <iframe width="100%" height="100%" scrolling="no" frameborder="no" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +this.props.track.id+ "&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}></iframe> :
          ''}
      </div>
    </li>
  )}

})


var Social = React.createClass({

  render: function(){ return (
      <li className={ 'tile social ' + this.props.type}>
        <a href={this.props.url} target='blank'>
        {
          this.props.type == 'facebook'   ? <div className='text'>Support Monument on Facebook</div> :
          this.props.type == 'soundcloud' ? <div className='text'>... and Soundcloud to :)</div> :
                                            <div className='text'>YO</div>
          }
        </a>
      </li>
  )}

})


var Tiles = React.createClass({

  getInitialState: function() {
    return {
      loadingtext: '.'
    }
  },

  componentDidMount: function() {
    var i = 2
    this.loadingInterval = setInterval(function() {
      if(i == 7) i = 1
      this.setState({
        loadingtext: _.map(_.range(1,i), function(item){ return <span className={(!(i % 2) ? 'r' : 'b')}>.</span> })
      })
      i++
    }, 150)
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
              return bit.type == 'PODCAST' ? <Podcast bit={bit} track={bit.data} onClick={this.podcastOnClick} /> :
                     bit.type == 'SOCIAL'  ? <Social type={bit.data.type} url={bit.data.url} /> :
                                             <li className='tile'></li>
            })}
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
