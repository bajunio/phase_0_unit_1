// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Brian Junio
//  2. Derek Siker


// 1. "YOU SIGNED... WHO?!"

var brian = {
    name: "Brian",
    age: 34,
    quotes: "yo",
    };


// 2. "Here they Come!"

var adamSandler = {
    name: "Adam Sandler",
    age: 47,
    quotes: "That's your home, are you too good for your home?",
    };

var kristenBell = {
    name: "Kristen Bell",
    age: 33,
    quotes: "Do you wanna build a snowman?",
    };

var jimCarrey = {
    name: "Jim Carrey",
    age: 52,
    quotes: "I don't sign napkins",
    };    



// 3. "TIME IS MONEY!"

//YOUR CODE HERE!
function Client(name, age, quote) {
    this.name = name,
    this.age = age,
    this.quote = quote
};



var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

var getInfo = function(name) {
    return "Client's name: " + this.name + " Client's age: " + this.age + " Client's Quote: " + this.quote;
};

//Just call gitInfo via console.log with an argument of the client's name

// ** BONUS **


//  Your Reflection: