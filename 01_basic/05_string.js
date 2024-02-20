const name = "Tanmay Rane"
const name2 = new String("Tanmay Rane")

console.log(typeof(name))
console.log(typeof(name2))

// Always use the backticks for printing the values rather than +
// Since the String is a primitive data type it during the operation the original value doesn't changes 

console.log(name2.slice(0,-4))