export default function(req, res, next) {
 if(!res.locals) {
   res.locals = {}
 }

 if(!req.session.signedUpForNewsletter) {
   res.locals.showSubscribeBanner = true
 }

 next();
};
