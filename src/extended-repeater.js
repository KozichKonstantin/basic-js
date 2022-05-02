const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 
function repeater(str, {repeatTimes = 1 , separator = '+', addition,additionRepeatTimes, additionSeparator='|'}) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let options={repeatTimes, separator, addition, additionRepeatTimes, additionSeparator}
  var repeatedString = "";
  while (options.repeatTimes > 0) {
    repeatedString += str;
    repeatedString += options.separator;
    if(options.repeatTimes<1){
      repeatedString -=options.separator
    }
    while (options.additionRepeatTimes>0){
      repeatedString+=options.addition;
      repeatedString+=options.additionSeparator;
      options.additionRepeatTimes--;
    }
    
    options.repeatTimes--;
  }
  
  return repeatedString;
}

module.exports = {
  repeater
};