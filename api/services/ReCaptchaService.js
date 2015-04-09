import unirest from 'unirest';
import Promise from 'bluebird';

var config = sails.config.recaptcha

export default {

  validateResponse: function(response) {
    return new Promise((resolve, reject) => {

      unirest.post(config.verifyUrl)
        .header('Accept', 'application/json')
        .send({ "secret": config.secret, "response": response })
        .end(function (response) {
          if(!response) {
            sails.log.warn('validateCaptchaResponse: no response')
            reject()
          }
          if(response.status !== 200) {
            reject(response.body)
          }
          if(response.body.success) {
            resolve(response.body)
          }
          else {
            reject(response.body)
          }
        });
    })
  }

}