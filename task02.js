'use strict'

const isPrime = (verifiedNamber) => {
  let mark = true;
  for (let i = 2; i < Math.sqrt(verifiedNamber); i++) {
    let m = verifiedNamber % i;
    if (m === 0) {
      mark = false;
      break;
    }
  }
  console.log(mark);
}

isPrime(1987);
isPrime(1991);