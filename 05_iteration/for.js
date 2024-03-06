// const arr1 = [1,2,3,4,5,6]

// for (const num of arr1) {
//     console.log(num);
// }

const myMap = new Map()
myMap.set(1, "a")
myMap.set(2, "b")
myMap.set(3, "c")

// for (const key of myMap) {
//     console.log(key);
// } //this will give each entry in array Eg. [1, "a"]

for (const [key, value] of myMap) {
    console.log(key + ":-" + value);
}
// the array is destructured

// objects is not iterable in this way