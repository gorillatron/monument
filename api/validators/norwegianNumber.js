
import norwegianNumberRegexp from '../regexp/norwegianNumber';

export default function validate(number) {
  let errors = []
  let sliced = norwegianNumberRegexp.exec(number)

  let cc = sliced[1]
  let localnumber = sliced[sliced.length-1]

  if(cc !== "" && cc !== '+47' && cc !== '0047') {
    errors.push("Number has to have the norwegian country code +47")
  }

  if(localnumber.length !== 8) {
    errors.push("Number has to have 8 characters")
  }

  if(localnumber[0] !== '4' && localnumber[0] !== '9') {
    errors.push("Norwegian numbers has to begin with either 4 or 9")
  }


  return errors.length ? errors: null
}