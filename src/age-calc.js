export function ageCalc(dob) {
  let birthDate = new Date(dob);
  let currentDate = new Date();
  let userAge = currentDate.getFullYear() - birthDate.getFullYear();
  let month = currentDate.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
    userAge--;
  }
  return userAge;
}

export function getMercuryAge(userAge) {
  let mercuryCalc = (userAge * .24);
  let mercuryAge = Math.round(mercuryCalc * 10 ) / 10;
  return mercuryAge;
}

export function getVenusAge(userAge) {
  let venusCalc = userAge * .62;
  let venusAge = Math.round(venusCalc * 10 ) / 10;
  return venusAge;
}

export function getMarsAge(userAge) {
  let marsCalc = userAge * 1.88;
  let marsAge = Math.round(marsCalc * 10 ) / 10;
  return marsAge;
}

export function getJupiterAge(userAge) {
  let jupiterCalc = userAge * 11.86;
  let jupiterAge = Math.round(jupiterCalc * 10 ) / 10;
  return jupiterAge;
}

export function timeLeftMercury(mercuryAge) {
  const mercuryDeathAge = 18.9;
  let yearsLeftCalc = mercuryDeathAge - mercuryAge;
  let mercuryYearsLeft = Math.round(yearsLeftCalc * 10 ) / 10;
  if (mercuryYearsLeft < 0) {
    let mercuryDeadYears = Math.abs(mercuryYearsLeft);
    return mercuryDeadYears = "Uh oh, looks like you have been dead on Mercury for " + mercuryDeadYears + " years. Sorry about that!!!";
  } else {
    return mercuryYearsLeft = mercuryYearsLeft + " years left. Better make it count!";
  }
}

export function timeLeftVenus(venusAge) {
  const venusDeathAge = 48.8;
  let yearsLeftCalc = venusDeathAge - venusAge;
  let venusYearsLeft = Math.round(yearsLeftCalc * 10 ) / 10;
  if (venusYearsLeft < 0) {
    let venusDeadYears = Math.abs(venusYearsLeft);
    return venusDeadYears = "Uh oh, looks like you have been dead on Venus for " + venusDeadYears + " years. Sorry about that!!!";
  } else {
    return venusYearsLeft = venusYearsLeft + " years left. Do not waste them!";
  }
}

export function timeLeftMars(marsAge) {
  const marsDeathAge = 148;
  let yearsLeftCalc = marsDeathAge - marsAge;
  let marsYearsLeft = Math.round(yearsLeftCalc * 10 ) / 10;
  if (marsYearsLeft < 0) {
    let marsDeadYears = Math.abs(marsYearsLeft);
    return marsDeadYears = "Uh oh, looks like you have been dead on Mars for " + marsDeadYears + " years. Sorry about that!!!";
  } else {
    return marsYearsLeft = marsYearsLeft + " years left. You got time man, might as well take it easy today!";
  }
}

export function timeLeftJupiter(jupiterAge) {
  const jupiterDeathAge = 933.4;
  let yearsLeftCalc = jupiterDeathAge - jupiterAge;
  let jupiterYearsLeft = Math.round(yearsLeftCalc * 10 ) / 10;
  if (jupiterYearsLeft < 0) {
    let jupiterDeadYears = Math.abs(jupiterYearsLeft);
    return jupiterDeadYears = "Uh oh, looks like you have been dead on Jupiter for " + jupiterDeadYears + " years. Sorry about that!!!";
  } else {
    return jupiterYearsLeft = jupiterYearsLeft + " years left. Dude, time to binge on some tv series or sleep for a few days, you got plenty of time to spare!";
  }
}
