const marvel = [ "iron man", "spider man", "thor"]
const dc = ["superman", "flash", "batman"]

// console.log([...marvel,...dc])

const arr1 = [1,2,[3,4,5], [6, [7,8,9]]]
// console.log(arr1.flat(1)) // inside the flat function enter the level of dept till which you want to flat the array 
// If you dont know the the depth then give Infity as dept

console.log(Array.isArray(arr1)) // checks if it is an array
console.log(Array.from("Tanmay")) // converts to array
console.log(Array.from({name: "tanmay"})) // in case of object we have to specify the key or value or else it will return an empty array

const score1 = 100
const score2 = 200
const score3 = 300

// both will create the same result
console.log(Array.of(score1,score2,score3))
console.log([score1,score2,score3])