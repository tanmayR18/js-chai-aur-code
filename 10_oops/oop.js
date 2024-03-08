function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //no need to write return(this)
}

const userOne = new User("tanmay", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);

// here if we didn't write the new keyword the userTwo information get overwritten on thw userOne 
// by writing new key word we get new instance of the object 
// s1 => new created an empty object
// s2 => new calls the contrcutor function
// s3 => all the arguments that are passed are injected in the this object 


console.log(userOne);

console.log(userTwo);