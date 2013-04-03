
var App = require( './App' )

var app = new App()


$(function() {

  var player = SC.Widget( $("#player")[0] )

  window.p = $("#player")[0]

  console.log( player )
})

