'use strict'

const reverseStr = (str) => {
  let letter ='';
  let letterN = str.length;
  for (let i = letterN - 1; i >= 0; i--) {
   letter += str.charAt(i);
  }
  console.log(letter);
}

reverseStr('bravo');
reverseStr('Все будет хорошо');