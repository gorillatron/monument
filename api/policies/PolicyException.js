
export default class PolicyException extends Error {

  constructor(spec = {message: 'threw PolicyException'}) {
    super(spec.message)
    console.log(spec.message)
  }

  code: 'policyexception'

}