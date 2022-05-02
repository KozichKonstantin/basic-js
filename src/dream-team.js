const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let string = "" ;
  let str = "";
  let strs = "";
if (members == null){
  return false
}
else{
  for (let i =0; i<members.length; i++ ){
    if (typeof(members[i]) === "string"){

     members[i] = members[i].trim();
  string +=members[i][0];

  str= string;
  str = str.toLowerCase();
  strs =  str.split('').sort().join('');


  }
 

else false;
}
return strs.toUpperCase();;
}
  }

module.exports = {
  createDreamTeam
};
