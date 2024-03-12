// Function to set the username of a user
function SetUsername(username) {
    // Simulating complex database calls here
    this.username = username;
    // Log to the console when the function is called
    console.log("called");
}

// Function to create a new user
function createUser(username, email, password){
    // Call the SetUsername function with the context of 'this' (the new user being created)
    SetUsername.call(this, username);
    
    // Set the email and password of the new user
    this.email = email;
    this.password = password;
}

// Create a new user named 'chai' with the given email and password
const chai = new createUser("chai", "chai@fb.com", "123");

// Log the new user to the console
console.log(chai);