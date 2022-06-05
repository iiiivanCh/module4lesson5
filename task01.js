'use strict'

const tableD = () => {

  let a = 1;
  let str = a + '**' + 'm';

  while (a < 10) {

    for (let m = 1; m < 11; m++) {
      let degree = String(a ** m) + ' ';
      let z = degree.length;

      switch (z) {
        case 2:
          degree = ('            ' + degree);
          break;
        case 3:
          degree = ('           ' + degree);
          break;
        case 4:
          degree = ('          ' + degree);
          break;
        case 5:
          degree = ('         ' + degree);
          break;
        case 6:
          degree = ('        ' + degree);
          break;
        case 7:
          degree = ('       ' + degree);
          break;
        case 8:
          degree = ('      ' + degree);
          break;
        case 9:
          degree = ('     ' + degree);
          break;
        case 10:
          degree = ('    ' + degree);
          break;
        case 11:
          degree = ('   ' + degree);
          break;
        case 12:
          degree = ('  ' + degree);
          break;
        default:
          break;
      }

      str += degree;
    }

    console.log(str);

    a += 1;
    str = a + '**' + 'm';

  }

}

tableD();