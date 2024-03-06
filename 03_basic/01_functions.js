// function add(...nums){
//     total = 0
//     for (let num of nums){
//         total = total + num   
//     }
//     return total
// }

// const finalResult = add(1,2,3,4,5,6)
// console.log(finalResult);


// closure------------------

// function one(){
//     const username = "naruto"
//     function two(){
//         console.log(username);
//     }
//     return two
// }

// const result = one()
// result()

// As you can see here one returns the two() and since two() require the username variable, it takes it will returning



// hoisting--------------

// one()
// function one() {
//     console.log("function one");
// }

// const two = function(){
//     console.log("function two");
// }
// two()

// const three = () => {
//     console.log("function three");
// }
// three()

// here one the traditional function ie. one()  excute when used before the declaration and the other two gives an error


// this keyword -----------------


// const user = {
//     username: "naruto",
//     age: 30,
//     WelcomeMessage: function(){
//         console.log(`${this.username} welcomw to the website`);
//         console.log(this)
//         this can be used only inside the webstite 
//     }
// }

// user.WelcomeMessage()
// user.username = "sasuke"
// user.WelcomeMessage()

// console.log(this)

// function chai(){
//     const username = "Naruto"
//     console.log(this);
//     // many node environment related this is shown
//     console.log(this.username)
//     // unddfine will be shown, and the same result will be shown for arrow functions
// }
// chai()

// const chai1 = () => {
//     console.log(this);
//     // {} will be shown
// }

// chai1()


// Immediate Invoked Funtion Expression (IIFE) ----------------------

// this is done to prevent the inner function being affected from global object pollution 

// (function db(){
//     // named IFFE
//     console.log("DB connected");
// })();   
// // Expected O/P: DB connected

// ((status) => {
//     // unnamed IIFE
//     console.log(`Cloudinary connected with status ${status}`);
// })(200);
// // Expected O/P: Cloudinary connected with status 200

// // you have to add ; to end the IIFE, 
// // if not you will not be able to add another IFFE

