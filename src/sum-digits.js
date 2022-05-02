const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let prokl = 0;
  // let proklTwo= "";
  // if(numb>9){
    
  //   proklTwo = proklTwo + String(numb);
  //   numb = Number(numb);
  // for (let i = 0; i< proklTwo.lenght; i++){
  //   prokl = prokl + Number(proklTwo[i]);
  //   proklTwo = String(proklTwo)
  // }
  // numb = prokl;
  // prokl =0;
  //     } else {
  //       return Number(numb);
  //     }
  //     return Number(numb);
  let sum = 0;
  while (n > 0 || sum > 9) {
       if(n == 0) {
          n = sum;
          sum = 0;
       }
       sum = sum + n % 10;
       n = Math.floor(n / 10);
  }
  return sum;
}
module.exports = {
  getSumOfDigits
};
