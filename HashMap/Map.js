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