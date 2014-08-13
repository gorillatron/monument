var React = require( 'react' )
var _     = require( 'underscore')


var PodCast = React.createClass({

  render: function(){ return (
    <li className='podcast' style={{ 'background-image': 'url(' +this.props.track.artwork_url.replace('large', 't500x500')+ ')' }}>
      <div className='title'>
        <h1> {this.props.track.title} </h1>
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
