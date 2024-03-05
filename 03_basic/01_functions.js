function add(...nums){
    total = 0
    for (let num of nums){
        total = total + num   
    }
    return total
}

const finalResult = add(1,2,3,4,5,6)

console.log(finalResult);