
var mongoose = require('mongoose')
  , db = mongoose.createConnection("mongodb://nodejitsu:7977cee1c8d157f53528a40ebe37d548@alex.mongohq.com:10077/nodejitsudb7946293191");


var InformationRequest = db.model("InformationRequest", mongoose.Schema({
  email: { 
    type: String, 
    unique: true, 
    validate: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'invalid-email'
  ]}
}))


exports.index = function(req, res){
  res.render('index', { title: 'monument' });
};

exports.requestinformation = function(req, res) {
  var email, informationRequest

  console.log(req.body)
  informationRequest = new InformationRequest({ email: req.body.email})

  informationRequest.save(function(err) {
    if(err) {
      res.send({ error: err })
    } else {
      res.send({ success: true })
    }
  })
}