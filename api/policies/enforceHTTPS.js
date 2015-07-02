
import url from 'url';

export default function(req, res, next) {
  try {

    let protocol = url.parse(req.baseUrl).protocol

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
