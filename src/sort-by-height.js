const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let pos = [];
  let k = 0;
  let gg = [];
  for (let i = 0; i<arr.length ; i++){

  if(arr[i] == -1){
    pos.push(i);
    k++
  }
  }
  arr.sort(function(a, b) {
    return a - b;
  });
arr.splice(0, k);
  for (i=0 ; i<pos.length; i++){
    arr.splice(pos[i], 0, -1)  ;
  }
  return arr;
  }
module.exports = {
  sortByHeight
};