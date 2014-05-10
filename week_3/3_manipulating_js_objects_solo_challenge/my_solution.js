// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
    SET adam equal to a new object.

2. Give adam a name property with the value "Adam".
    SET property name in adam and assign "Adam".

3. Add a spouse property to terah and assign it the value of adam.
    SET property spouse in terah and assign adam.

4. Change the value of the terah weight property to 125.
    Access the property weight in terah and assign 125

5. Remove the eyeColor property from terah.
    DELETE tarah.eyeColor to remove the property.

6. Add a spouse property to adam and assign it the value of terah.
    SET property spouse in adam and assign terah.

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
    CREATE new object within terah object named children using new Object().

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
    SET property carson within object children under terah and assign value "Carson".

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
    SET property carter within object children under terah and assign value "Carter".

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
    SET property colton within object children under terah and assign value "Colton".

11. Add a children property to adam and assign it the value of terah children.
    CREATE new property within adam named children and equate it with terah's children.

*/

// __________________________________________
// Write your code below.

var adam = {
  name:"Adam",
  spouse:terah,
};

terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;

terah.children = {};
adam.children = terah.children;

// There has to be a function I can write to clean this up...  Bang'n my head on it!

terah.children.carson = {};
terah.children.carson.name = "Carson";

terah.children.carter = {};
terah.children.carter.name = "Carter";

terah.children.colton = {};
terah.children.colton.name = "Colton";



// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I feel like I was able to brute force my way through this challenge.  I'm sure there is a better way to refactor
// my code further.  A pairing session with one of my peers would really help me to gain more traction on working 
// with objects in JS.  I was stuck for a long while getting the children object setup correctly.  I had to adjust 
// my pcode and draw a diagram before I was able to put it together.  Really wish I could figure out that function
// but sadly I have much more work to do.


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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)