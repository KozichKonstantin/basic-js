const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats (matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let a=0;
  for (let i =0; i<matrix.length; i++ ){
    
  // let c = matrix[i];
  for (let k = 0; k< matrix[i].length; k++){
    
    if (matrix[i][k] === "^^"){
      a = a +1;
    }
    
  }
  }
  return a;
}

module.exports = {
  countCats
};
