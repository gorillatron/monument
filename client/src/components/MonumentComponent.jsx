var React = require( 'react' )
var _     = require( 'underscore')


var PodCast = React.createClass({

  getInitialState: function() {
    return { active: false }
  },

  onClick: function( event ) {
    this.setState({ active: !this.state.active })
  },

  render: function(){ return (
    <li className={'podcast ' + (this.state.active ? 'active' : '')} onClick={this.onClick}>
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

var Podcasts = React.createClass({

  getDefaultProps: function() {
    return { tracks: [] }
  },

  render: function() { return (
    <div className='podcasts'>
      <ul>
        {_.map(this.props.tracks, (track) => <PodCast track={track}/>) }
      </ul>
    </div>
  )}

})


function MonumentComponent( mountNode ) {
  this.mountNode = mountNode
  this.props = {}
  this.state = {}
  this.render()
}

MonumentComponent.prototype.render = function() {
  this.component = React.renderComponent(
    <div id="container">
      <Podcasts tracks={this.props ? this.props.tracks : []} />
    </div>,
    this.mountNode
  )
}

MonumentComponent.prototype.setProps = function( props ) {
  this.props = props
  return this.render()
}

MonumentComponent.prototype.setState = function( state ) {
  this.state = state
  return this.component.setState( state )
}


module.exports = MonumentComponent
