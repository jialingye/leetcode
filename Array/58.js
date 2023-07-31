var lengthOfTheLastWord = function(s){
    const sArr = s.split(' ')
    console.log(sArr[3])
  for( let i = sArr.length-1; i>= 0 ; i--){
    if(sArr[i].length>0){
        return sArr[i].length;
    }
  }


///////////leetcode//////////////////////////////////////////
// let sArr = s.trim();
// let lastIndex= sArr.lastIndexOf(' ')
// console.log(sArr.length, lastIndex)
// return sArr.length-lastIndex-1
}

console.log(lengthOfTheLastWord("   fly me   to   the moon  "))