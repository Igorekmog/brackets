module.exports = function check(str, bracketsConfig) {
  // your solution
  for (let i = 0; i < bracketsConfig.length; i++) {
    if(str.includes(bracketsConfig[i].join('')) ) {
      str = str.replace(bracketsConfig[i].join(''), '');
      i = -1;
    } 
  }
  console.log(str);
  if(str=='')
  return true;
  else return false;
}
