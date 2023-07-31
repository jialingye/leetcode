var stringMatching = function(words) {
    let sub =[];
    for (let i = 0; i < words.length; i++){
        const filterArr = words.filter((_,index)=>index !== i)
        for(let j = 0; j<filterArr.length; j++){
            if(filterArr[j].indexOf(words[i])>=0){
                if(!sub.includes(words[i])){
                    sub.push(words[i])
                }
            }
            
        }
    }
    return sub;
};

// function stringMatching(arr){
//     let sub={};
//     for(let i =0; i< arr.length; i++){
//       const filterArr = arr.filter((_,index) => index !==i);
//       for(let j = 0; j<filterArr.length; j++){
//         if(filterArr[j].indexOf(arr[i])>=0){
//             if(!Object.keys(sub).includes(arr[i])){
//                sub[arr[i]]=[filterArr[j]]
//             } else {
//                sub[arr[i]].push(filterArr[j])
//             }    
//         }
//       }
//     }
//     return sub;
//   }
  
  console.log(stringMatching(["mass","ma", "as", "sass", "hero", "superhero"]))
  // ['as', 'hero']
  console.log(stringMatching(["leetcode", "et", "code"]))
  // ['et', 'code']
  console.log(stringMatching(["blue", "green", "bu"]))
  // []