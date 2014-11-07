var _                     = require( 'underscore' )
var R                     = require( 'ramda' )
var Promise               = require( 'bluebird' )
var React                 = require( 'react' )
var Monument              = require( './components/Monument.jsx' )
var mprogress             = require( './lib/mprogress' )
var BitStore              = require( './lib/BitStore' )


mprogress.start()

var bitStore = new BitStore()

var monumentComponent = React.renderComponent( new Monument(), document.getElementById('app') )

mprogress.inc()

bitStore.fetch().then(function( bits ) {

  mprogress.inc()

  setTimeout(function() {
    monumentComponent.setProps({ bits: bits })
  }, 600)

  setTimeout( _.bind(mprogress.done, mprogress), 1200 )

})
