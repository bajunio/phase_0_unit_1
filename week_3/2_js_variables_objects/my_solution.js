// I was solo on this challenge.




// Pseudocode
// SET secret number to 7
// SET password to 'just open the door'
// SET allowed in to boolean value 'false'
// CREATE array members
  //include "John" as first value
  //include "Mary" as forth value



// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", "Brain", "Pinky", "Mary"];




// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// Feeling confident that declaring variables is pretty much as refactored as it can get!



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// This was my first time writing code from tests.  At first I was spinning my wheels getting
// started as I was not quite sure how to proceed.  I was reminded of other stumblings blocks
// I've dealt with in the past and just starting pressing buttons.  It's amazing how things 
// can sometimes come together if you just dive in and start attempting to swim.
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

