'use strict'

let verifiedNamber = "4";

const isPrime = (verifiedNamber) => {
  if (verifiedNamber <= 1) {
    let mark = false;
    console.log(mark);
    return;
  };

  if (!Number.isFinite(verifiedNamber)) {
    console.log('Неверные данные, нет решения, требуется предоставить натуральное число');
    return;
  };

  let mark = true;
  for (let i = 2; i < Math.sqrt(verifiedNamber) + 1; i++) {
    let markPassing = verifiedNamber % i;
    if (markPassing === 0) {
      mark = false;
      break;
    }
  }
  console.log(mark);
};


isPrime(29);
isPrime(-29);
isPrime(0);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
isPrime(9);
isPrime(11);
isPrime("3");