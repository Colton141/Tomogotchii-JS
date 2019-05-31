import { ageCalc, getMercuryAge, getVenusAge } from './../src/age-calc.js';

describe('ageCalc', function() {

  it('should return age of user based on dob input', function() {
    let dob = new Date(1974, 12, 12);
    expect(ageCalc(dob)).toEqual(44);
  });
});

describe('getMercuryAge', function() {

  it('should return age of user on Mercury', function() {
    let userAge = 44;
    expect(getMercuryAge(userAge)).toEqual(10.559999999999999);
  });
});

describe('getVenusAge', function() {

  it('should return age of user on Venus', function() {
    let userAge = 44;
    expect(getVenusAge(userAge)).toEqual(27.28);
  });
});
