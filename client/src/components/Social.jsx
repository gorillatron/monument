var React         = require( 'react' )
var _             = require( 'underscore')


var Social = React.createClass({

  render: function(){ return (
      <li className={ 'tile social ' + this.props.type}>
        <div className="cover">
          <a href={this.props.url} target='blank'>
          {
            this.props.type == 'facebook'   ? <div className='text'>Monument: Social Experiment</div> :
            this.props.type == 'soundcloud' ? <div className='text'></div> :
                                              <div className='text'>YO</div>
            }
          </a>
        </div>
      </li>
  )}

})


module.exports = Social
