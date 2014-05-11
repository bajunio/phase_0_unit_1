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
/*
This was my first GPS session and I was quite happy with the outcome.  At first I was intimdated by the prospect of having an 
instructor oversee a session I was having with a peer.  But she was so supportive and only chimed in when she felt we could 
benefit from a link or little nudge.  We were able to complete the challenge in the alloted hour of time.  After that we moved
on to idle chit-chat for another 45 mins discussing our hopes and dreams.  Super fun!

I need to continue to solidify my knowledge of object manipulation in JS.  For now I feel I have the concept down and just need
to practice my syntax until my fingers just do it for me.  : )
*/