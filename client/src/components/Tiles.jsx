var React = require( 'react' )
var _     = require( 'underscore')


var Podcast = React.createClass({

  getInitialState: function() {
    return { active: false }
  },

  onClick: function( event ) {
    this.setState({ active: !this.state.active })
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
      {
        this.props.type == 'facebook'   ? <div className='text'>We are on facebook</div> :
        this.props.type == 'soundcloud' ? <div className='text'>... and Soundcloud to :)</div> :
                                          <div className='text'>YO</div>
        }
    </li>
  )}

})


var Tiles = React.createClass({

  getDefaultProps: function() {
    return { bits: [] }
  },

  render: function() { return (
    <div className='tiles'>
      <ul>
        {_.map(this.props.bits, (bit) => {
          return bit.type == 'PODCAST' ? <Podcast bit={bit} track={bit.data}/> :
                 bit.type == 'SOCIAL'  ? <Social type={bit.data.type} url={bit.data.url} /> :
                                         <li className='tile'></li>
        })}
      </ul>
    </div>
  )}

})


module.exports = Tiles
