var R            = require( 'ramda')
var EventEmitter = require( 'events' ).EventEmitter


module.exports = alex = R.mixin(new EventEmitter(), {


  resultsListBuffer: [],


  listen: function() {
    this.recognition = new webkitSpeechRecognition()
    this.recognition.continuous = true
    this.recognition.interimResults = true
    this.recognition.onresult = function( event ) {
      alex.processResults( event.results )
    }
    this.recognition.start()
  },


  processResults: function( resultsList ) {
    this.resultsListBuffer.push( resultsList )
    var transcript = compileTranscript( resultsList )
    if( transcript == 'seven' )
      this.speak( 'correct' )
  },

  firstWord: true,

  speak: function( sentence, callback ) {
    if( this.firstWord ) {
      this.firstWord = false
      setTimeout(this.speak.bind(this, sentence), 400)
    }
    else {
      var msg = new SpeechSynthesisUtterance()
      msg.voice = speechSynthesis.getVoices()[30]
      msg.voiceURI = 'native'
      msg.volume = 1
      msg.rate = 0.85
      msg.pitch = 1.04
      msg.text = sentence
      msg.lang = 'en-US'

      msg.onend = function(e) {
        if( typeof callback === 'function' )
          callback( sentence )
      }

      window.speechSynthesis.speak( msg )
    }
  }



})

var compileTranscript = function( resultsList ) {
  var interim = ''

  for(var i = 0; i < resultsList.length; i++ ) {
    var result = resultsList[ i ]
    for(var j = 0; j < result.length; j++) {
      var alternative = result[j]
      interim += alternative.transcript
    }
  }

  return interim
}
