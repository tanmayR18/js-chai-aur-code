// singleton - whenver the object is created using the constructor, it is singleton 
// Object.create

// Object literal 

const mySym = Symbol("dummy")

const user = {
    name: "tanmay",
    "full name": "tanmay rane",
    age: 20,
    job: "developer",
    [mySym] : "Key1"
}

// console.log(user.name)
// console.log(user["age"]);
// console.log(user["full name"]); // this "full name"  can not be accessed by the dot method
// console.log(typeof user[mySym])
// Object.freeze(user) // this will prevent any changes in the object
// user.name = "kushal"
// console.log(user)

user.fun1 = function() {
    console.log("hello there");
}

user.fun2 = function() {
    console.log(` hello ${this.name}`); 
}

user.fun2()