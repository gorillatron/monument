import unirest from 'unirest';
import Promise from 'bluebird';

var config = sails.config.recaptcha


export class ValidationError extends Error{}


export default {

  validateResponse: function(response) {
    return new Promise((resolve, reject) => {

      unirest.post(config.verifyUrl)
        .header('Accept', 'application/json')
        .send({ "secret": config.secret, "response": response })
        .end((response) => {
          if(!response) {
            sails.log.warn('validateCaptchaResponse: no response')
            reject(new ValidationError('empty response'))
          }
          else if(response.status !== 200) {
            reject(new ValidationError(response.body))
          }
          else if(response.body.success) {
            resolve(new ValidationError(response.body))
          }
          else {
            reject(new ValidationError(response.body))
          }
        })
    })
  }

}