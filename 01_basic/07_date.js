const date1 = new Date()

// console.log(date1)
// console.log(date1.toString())
// console.log(date1.toDateString())
// console.log(date1.toLocaleString())


let myCreatedDate = new Date(2023,0,23)
let myCreatedDate2 = new Date("01-02-2023")

// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate2.toLocaleString())

let myTimeStamp = Date.now()
let myDate =  new Date()
// console.log(myDate.getTime())
// console.log(myTimeStamp)
// console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()
newDate.toLocaleString("default", {
    weekday: "long",
})