// const eventTypeClass = {
//     WORK: '#d4dbe5',
//     STUDY: '#a4bdaa',
//     FAMILY: '#e8c4a3',
//     PERSONAL: '#f4e5bc',
//     HEALTH: '#d1b6cc',
//     FITNESS: '#d3b3b5',
//     MISC: '#e6d4c8',
//     LEISURE: '#dfefe5'
// }

// const dailyLabels = ['WORK', 'STUDY', 'FAMILY','LEISURE']

// console.log(dailyLabels.map((label) => eventTypeClass[label]))

// const nums = [1, 2, 3, 4, 5];

// const doubledEvens = nums.map(num => num % 2 === 0 ? num * 2 : num);

// console.log(doubledEvens); // Output: [1, 4, 3, 8, 5]

// let nums1 = [1, 2, 3];
// let nums2 = [4, 5];
// let lengthArray = nums1.map(function(num, index) {
//   return num.toString().length + (nums2[index] ? nums2[index].toString().length : 0);
// });

// const nums = [1, 2, 3, 4, 5];

// const incrementedEvens = nums.map((num, index) => {
//   if (num % 2 === 0) {
//     return num + index;
//   } else {
//     return num;
//   }
// });

// const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); 
// // Output: 15

// const arr = [[1, 2], [3, 4], [5, 6]];
// const flat = arr.reduce((acc, curr) => [...acc, ...curr], []);
// console.log(flat); // Output: [1, 2, 3, 4, 5, 6]

// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'pear'];
// const counts = fruits.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// console.log(counts); 
// // Output: { apple: 2, banana: 2, orange: 2, pear: 1 }

// const nums = [3, 6, 2, 9, 4, 7];
// const max = nums.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
// console.log(max); // Output: 9

// const people = [  { name: 'Alice', age: 30, gender: 'female' },  { name: 'Bob', age: 25, gender: 'male' },  { name: 'Charlie', age: 35, gender: 'male' },  { name: 'Dave', age: 40, gender: 'male' },  { name: 'Eve', age: 30, gender: 'female' }];
// const grouped = people.reduce((acc, curr) => {
//   acc[curr.age] = acc[curr.age] || [];
//   acc[curr.age].push(curr);
//   return acc;
// }, {});
// console.log(grouped);
// // Output:
// // {
// //   30: [
// //     { name: 'Alice', age: 30, gender: 'female' },
// //     { name: 'Eve', age: 30, gender: 'female' }
// //   ],
// //   25: [ { name: '

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


// function firstRecurringCharacter(input) {
//   // let result = {}
//   // for(let i = 0; i<input.length; i++){
//   //   if(result[input[i]]===undefined){
//   //     result[input[i]]=1
//   //   }else {
//   //     return input[i]
//   //   }
//   // }
//   // return undefined
//   let map = new Map();
//   for(let i=0; i<input.length; i++){
//     if(!map.has(input[i])){
//       map.set(input[i],1);
//     } else {
//       return input[i]
//     }
//   }
//   return undefined
// }

// console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// var canConstruct = function(ransomNote, magazine) {
//     let have = new Map()
//     for (const char of magazine){
//         have.set(char, (have.get(char)||0)+1)
//         }
//     console.log('have', have) 
//     let need = new Map()
//     for(const char of ransomNote){
//         need.set(char, (need.get(char)||0)+1)
//     }
//     console.log('need', need)
   
//     for(let [key, value] of need){
//         if (have.has(key)){
//             if(have.get(key)<need.get(key)){
//                return false
//             }
//         } else {
//             return false;
//         }
//     }
//     return true
// };

// console.log(canConstruct('fihjjjjei','hjibagacbhadfaefdjaeaebgi'))

//49
// var groupAnagrams = function(strs){
//     let m = new Map()
//     for (let str of strs){
//         let sorted = str.split("").sort().join("")
//         m.has(sorted)? m.set(sorted, [...m.get(sorted),str]): m.set(sorted, [str])
//     }
//     return Array.from(m.values())
// }

// var groupAnagrams = function(strs){
    // let m = {}
    // for (let str of strs){
    //     let sorted = str.split("").sort().join("")
    //     if(!m[sorted]){
    //         m[sorted]=[str]
    //     } else {
    //         m[sorted].push(str)
    //     }
    // }
    // return Object.values(m)
// }

// var groupAnagrams = function(strs){
//     let res= {}
//     for (let str of strs){
//         let count = new Array(26).fill(0)
//         for (let char of str)count[char.charCodeAt()-97]++;
//             console.log('count', count)
        
//         let key = count.join('#')
//         console.log('key',key)
//         res[key]? res[key].push(str):res[key]=[str]
//     }
//     return Object.values(res)
// }
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

// var groupAnagrams = function(strs) {
//     let res = {};
//     for (let str of strs) {
//         let count = new Array(26).fill(0);
//         for (let char of str) count[char.charCodeAt()-97]++;
//         let key = count.join("#");
//         res[key] ? res[key].push(str) : res[key] = [str];
//     }
//     return Object.values(res);
// };

// var isHappy = function(n) {
//     let result = new Set()
//     let checkSum = sum(n)

//     while(checkSum!==1){
//         if(!result.has(checkSum)){
//             result.add(checkSum)
//             checkSum = sum(checkSum)
//         } else {
//             return false
//         }

//     }
//     return true
// };

// var sum = function(num){
//     let newSum = 0
//     while (num!==0){
//         let ex = num % 10
//         newSum = newSum + ex**2
//         num = Math.floor(num/10)
//     }
//     return newSum;
// }

// console.log(isHappy(19))

// var fourSumCount = function(nums1, nums2, nums3, nums4) {
//     let result = new Map()
//     let count = 0
//     for (const one of nums1){
//         for (const two of nums2){
//             let sum = one + two
//             result.set(sum, (result.get(sum)||0)+1)
//         }
//     }
//     console.log(result)
//     for (const three of nums3){
//         for (const four of nums4){
//             let backsum = three + four
//             //console.log(three, '+',four, '=', backsum, result.get(0-backsum))
//             count = count + (result.has(0-backsum)? result.get(0-backsum):0)
//         }
//     }
//     return count
// };

// console.log(fourSumCount([1,2],[-2,-1],[-1,2],[0,2]))

// var maxOperations = function(nums, k) {
//     let result = 0
//     let storage = new Map()
//     for (const num of nums){
//         storage.set(num, (storage.get(num)||0)+1)
//     }
//     console.log(storage)
//     for (const [key, value] of storage){
//         if(storage.has(k-key)){
//             if (k === k-key){
//                 let min = Math.floor(value/2)
//                 result +=min
//             } else {
//                 let min = Math.min(value, storage.get(k-key))
//                 result += min
//             }

//         }
//     }
//     return Math.floor(result/2)
// 

// console.log(maxOperations([1,2,3,4],5))

// var closeStrings = function(word1, word2) {
//     if (word1.length != word2.length) return false
//     if (word1 == word2) return true

//     arr1 = Array(26).fill(0)
//     arr2 = Array(26).fill(0)

//     for (let i = 0; i < word1.length; i++) {
//         arr1[word1.charCodeAt(i) - 97] ++
//         arr2[word2.charCodeAt(i) - 97] ++        
//     }    

//     console.log(arr1, arr2)

//     for (let i = 0; i < word1.length; i++) {
//         if (arr1[i] > 0 && arr2[i] == 0) return false
//         if (arr2[i] > 0 && arr1[i] == 0) return false        
//     }        

//     str1 = arr1.sort((a, b) => a - b).join('')
//     str2 = arr2.sort((a, b) => a - b).join('')

//     if (str1 == word1.length) return false

//     return str1 == str2    
// };

// console.log(closeStrings("cabbba","aabbbc"))

// var topKFrequent = function(nums, k) {
//     let map = new Map()
//     let arr = new Array(nums.length)
//     let result = []
//     for (const num of nums){
//         map.set(num, (map.get(num)||0)+1)
//     }
//     for (const [key, value] of map){
//         if (!arr[value-1]){
//             arr[value-1]=[]
//             arr[value-1].push(key)
//         } else {
//             arr[value-1].push(key)
//         }
//     }
//     console.log(map,arr)
//     let len = arr.length-1

//     while (k>0 ){
//         if(!arr[len]){
//             len--
//         } else {
//             result.push(...arr[len])
//             k=k-arr[len].length
//             if (len===0){
//                 break
//             }
//             len--
//             console.log(k, len)
//         }
//     }
//     return result
// };

//console.log(topKFrequent([4,1,-1,2,-1,2,3], 2))

var isValidSudoku = function(board) {
    
    for (let i = 0 ; i<9; i++){
        let row = new Set()
        for (let j=0; j<9; j++){
            let num = board[i][j]
            if(num!=="."){
                if(row.has(num)){
                    return false
                } else {
                    row.add(num)
                }
            }
        }
    }
    for (let j=0; j<9; j++){
        let column = new Set()
        for(let i = 0; i<9; i++){
            let num = board[i][j]
            if(num!=="."){
                if(column.has(num)){
                    return false
                } else {
                    column.add(num)
                }
            }
        }
    }
    let k=0, l=0
    while(l<3){
        let square = new Set()
        for(let i = l*3; i<(l*3+3);i++){
            for(let j=k*3; j<(k*3+3); j++){
                let num=board[i][j]
                if(num !=="."){
                    if(square.has(num)){
                        return false
                    } else {
                        console.log('k',k, 'i', i, 'j', j, 'num',num)
                        square.add(num)
                    }
                }
            }
        }
        console.log(square)
        k++
        if (k===3){
            l++
            k=0
        }
    }
    return true
};

console.log(isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]))