const arr = [0,1,2,3,4,5]

// arr.unshift(9) // 9 gets added on the first place, the drawback here is that indexing of all the elements 
// get change leading to load on computer depending on the scale of  data
// arr.shift() // first element is removed 
console.log(arr)

const arr1 = arr.slice(1,3)
console.log(arr1) //  create a shallow copy i.e do not change the original one 
console.log(arr)

const arr2 = arr.splice(1,3,6)
console.log(arr2) // changes the original copy 
console.log(arr)