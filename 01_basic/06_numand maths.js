const num1 = 100
const num2 =  new Number(123892)

//console.log("This will give you value till the second digit right of the decimal number",num2.toFixed(2))


// THis method start counting from the left and round off the stated number of values 
// console.log(num2.toPrecision(4))

// THis will add commas according to the number
// console.log(num2.toLocaleString())
// console.log(num2.toLocaleString("en-IN"))

// IN the console type Number. and you will see various information about the NUmber type in the js
// such as min and max value it can store 


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)