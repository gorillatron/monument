var React         = require( 'react' )
var _             = require( 'underscore')
var getRandomInt = require( '../lib/getRandomInt' )


var Podcast = React.createClass({

  getInitialState: function() {
    return { active: false }
  },

  onClick: function( event ) {
    this.props.onClick( event, this )
  },

  render: function(){ return (
    <li className={'tile ' + (this.state.active ? 'active' : '')} onClick={this.onClick}>
      <div className="cover" style={{ 'background-image': 'url(' +this.props.bit.data.track.artwork_url.replace('large', 't500x500')+ ')' }}>
      </div>
      <div className="cover-overlay">
        <h1 className='title'> {this.props.bit.data.track.title} </h1>
        {this.state.active ?
          <iframe width="100%" height="100%" scrolling="no" frameborder="no" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +this.props.bit.data.track.id+ "&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"}></iframe> :
          ''}
      </div>
    </li>
  )}

})


module.exports = Podcast
