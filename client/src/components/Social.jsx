var React         = require( 'react' )
var _             = require( 'underscore')


var Social = React.createClass({

  render: function(){ return (
      <li className={ 'tile social ' + this.props.bit.data.type}>
        <div className="cover">
          <a href={this.props.bit.data.url} target='blank'>
          {
            this.props.bit.data.type == 'facebook'   ? <div className='text'>Monument: Social Experiment</div> :
            this.props.bit.data.type == 'soundcloud' ? <div className='text'></div> :
                                                       <div className='text'>FAIL</div>
            }
          </a>
        </div>
      </li>
  )}

})


module.exports = Social
