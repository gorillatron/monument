var R            = require( 'ramda')
var EventEmitter = require( 'events' ).EventEmitter


module.exports = alex = R.mixin(new EventEmitter(), {


  resultsBuffer: [],


  listen: function() {
    this.recognition = new webkitSpeechRecognition()
    this.recognition.continuous = true
    this.recognition.interimResults = true
    this.recognition.onresult = function( event ) {
      alex.processResults( event.results )
    }
    this.recognition.start()
  },


  processResults: function( results ) {
    var transcript = pickTranscript( results )
    console.log(transcript)
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

var pickTranscript = R.map(function( result ) {
  return result.transcript
})
