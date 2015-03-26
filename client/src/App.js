"use strict";

var EventEmitter          = require( 'events').EventEmitter
var R                     = require( 'ramda' )
var Promise               = require( 'bluebird' )
var React                 = require( 'react' )
var Monument              = require( './components/Monument.jsx' )
var BitStore              = require( './lib/BitStore' )

module.exports = App

function App( spec ) {

  var store = new BitStore()
  var emitter = new EventEmitter
  var monumentComponentFactory = React.createFactory( Monument )

  return Object.seal({

    on: function(){
      emitter.on.apply( emitter, arguments )
    },

    once: function(){
      emitter.once.apply( emitter, arguments )
    },

    renderToNode: function( node, props ) {
      return React.render( monumentComponentFactory( props ), node )
    },

    renderToStringAsync: function( props ) {
      return React.renderToString( monumentComponentFactory( props ) )
    },

    fetchBits: function() {
      return store.fetch().then(function( store ) {
        return store.bits
      })
    }
  })
}
