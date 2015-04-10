require("babel/register");

var yargs = require('yargs')

var args = yargs.argv

var jobpath = args.j || args.job

if(!jobpath) {
  console.error('must specify jobpath -j --job')
}
else {
  require(jobpath)
}