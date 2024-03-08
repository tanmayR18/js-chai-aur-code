// Declare a new Promise
const promiseFour = new Promise(function(resolve, reject) {
    // Set a delay of 1 second (1000 milliseconds)
    setTimeout(function() {
        // Declare a variable 'error' and set it to false
        let error = false;
        // If there is no error
        if (!error) {
            // Resolve the promise and return an object with username and password
            resolve({username: "tanmay", password: "123"});
        } else {
            // If there is an error, reject the promise and return an error message
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

// Call the promiseFour
promiseFour
  // When the promise is resolved, it will return a user object
  .then((user) => {
    // Log the user object to the console
    console.log(user);
    // Return the username from the user object for the next then() block
    return user.username;
  })
  // This then() block receives the username from the previous then() block
  .then((username) => {
    // Log the username to the console
    console.log(username);
  })
  // If the promise is rejected, this catch() block will handle the error
  .catch(function(error) {
    // Log the error to the console
    console.log(error);
  })
  // This block will execute regardless of whether the promise was resolved or rejected
  .finally(() => console.log("The promise is either resolved or rejected"));


  // async-await don't handle the error directly