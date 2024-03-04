const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    1: "c",
    2: "d"
}

const obj3 = Object.assign( obj1, obj2)
// here the obj1 is modified by adding obj2
// if you want to a void this then add {} and empty object first
const obj4 = {...obj1, ...obj2}

// console.log(obj3)
// console.log(obj1)
// console.log(obj4)

// console.log(Object.keys(obj1))
// this will return an array containing all the keys
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))

console.log(obj1.hasOwnProperty(1))
// check the presence of the property in the object

const course = {
    courseName: "MERN",
    price: 999,
    instructor: "Naruto"
}

const { instructor: teacher } = course
// Remain the destructed value
console.log(teacher)
