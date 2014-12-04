"use strict";

var EventEmitter          = require( 'events').EventEmitter
var R                     = require( 'ramda' )
var Promise               = require( 'bluebird' )
var React                 = require( 'react' )
var Monument              = require( './components/Monument.jsx' )
var BitStore              = require( './lib/BitStore' )


function App( spec ) {
  var store = new BitStore()
  var emitter = new EventEmitter

  return Object.seal({
    on: function(){
      emitter.on.apply( emitter, arguments )
    },
    once: function(){
      emitter.once.apply( emitter, arguments )
    },
    renderToNode: function( node ) {
      return React.renderComponent( new Monument({ store: store }), node )
    },
    renderToStringAsync: function() {
      store.fetch()
        .then(function( store ) {
          return React.renderToString( new Monument({ bits: store.bits }))
        })
    }
  })
}
