const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(mail) {
  let str = "";
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let ind = mail.indexOf("@");
  if(mail[ind+1]=== "."){
    ind = mail.indexOf("@", (ind+3));
  }
  for (let i=(ind+1); i < mail.length; i++){
    
      str =str + mail[i];
      
  }
  return str;
}
module.exports = {
  getEmailDomain
};
