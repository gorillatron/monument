import unirest from 'unirest';
import Promise from 'bluebird';
import ReCaptchaValidationError from './exceptions/ReCaptchaValidationError'


var config = sails.config.recaptcha


export default {

  validateResponse: async function(response) {
    return new Promise((resolve, reject) => {

      unirest.post(config.verifyUrl)
        .header('Accept', 'application/json')
        .send({ "secret": config.secret, "response": response })
        .end((response) => {
          if(!response) {
            sails.log.warn('validateCaptchaResponse: no response')
            reject(new ReCaptchaValidationError('empty response'))
          }
          else if(response.status !== 200) {
            reject(new ReCaptchaValidationError(response.body))
          }
          else if(response.body.success) {
            resolve(new ReCaptchaValidationError(response.body))
          }
          else {
            reject(new ReCaptchaValidationError(response.body))
          }
        })
    })
  }

}