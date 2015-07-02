
import url from 'url';

export default function(req, res, next) {
  try {

    // TODO:
    // If I use req base protocol it is http no matter what.
    // Probably because of heroku proxy
    
    let protocol = 'https'

    if(typeof protocol === 'string' && protocol.match('https')) {
      next()
    }
    else {
      res.redirect('/admin/forbidden')
    }

  }
  catch(error) {
    sails.log.fatal(error)
  }
}
