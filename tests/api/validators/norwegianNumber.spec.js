
import {expect} from 'chai';
import norwegianNumberValidator from '../../../api/validators/norwegianNumber';


describe('api/validators/norwegianNumberValidator', () => {

  it('should not return an error array for valid norwegian numbers', () => {
    expect(norwegianNumberValidator("47635212")).to.equal(null)
    expect(norwegianNumberValidator("004747635212")).to.equal(null)
    expect(norwegianNumberValidator("+4747635212")).to.equal(null)
    expect(norwegianNumberValidator("98785623")).to.equal(null)
    expect(norwegianNumberValidator("004798785623")).to.equal(null)
    expect(norwegianNumberValidator("+4798785623")).to.equal(null)
  })

  it('should return an error if wrong cc', () => {
    expect(norwegianNumberValidator("001247631254").length).to.equal(1)
    expect(norwegianNumberValidator("+1247631254").length).to.equal(1)
  })

  it('should return an error of number is shorter than 8 char', () => {
    expect(norwegianNumberValidator("4763521").length).to.equal(1)
    expect(norwegianNumberValidator("00474763521").length).to.equal(1)
    expect(norwegianNumberValidator("+474763521").length).to.equal(1)
    expect(norwegianNumberValidator("9878562").length).to.equal(1)
    expect(norwegianNumberValidator("00479878562").length).to.equal(1)
    expect(norwegianNumberValidator("+479878562").length).to.equal(1)
  })

  it('should return an error of number doesnt start with either 9 or 4', () => {
    expect(norwegianNumberValidator("34562345").length).to.equal(1)
    expect(norwegianNumberValidator("004734562345").length).to.equal(1)
    expect(norwegianNumberValidator("+4734562345").length).to.equal(1)
    expect(norwegianNumberValidator("004784562345").length).to.equal(1)
    expect(norwegianNumberValidator("+4784562345").length).to.equal(1)
  })

})