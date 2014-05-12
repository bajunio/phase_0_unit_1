// I worked by myself on this challenge.

// Your mission description:
// Thorin will move around a few times before he falls into a pit and dies.
// 
// 

// Pseudocode
/* 
Prompt playerName for their name.

Create function Player for new objects
	include name
	include health
	include x position
	include y position

Create badGuy object literal 
	include name
	include health
	include x pos
	include y pos

Create hero via previously defined function
	set name = playerName
	set health = 50
	set x pos = 0
	set y pos = 0

Create getInfo function to display Player object data

Create getPosition function to display Player position

Greet playerName with warning of their death

Create move left function
	adjust x - 1
	display coords
	call playerDead function
Create move right function
	adjust x + 1
	display coords
	call playerDead function
Create move up function
	adjust y + 1
	display coords
	call playerDead function
Create move down function
	adjust y - 1
	display coords
	call playerDead function


*/
// Initial Code

var playerName = prompt("What is your name, player?");

function Player(name, health, x, y) {
    this.name = name,
    this.health = health,
    this.x = x,
    this.y = y
};

var grimReaper = {
	name: "Death",
	health: 5000,
	x: 4,
	y: 4
}

var hero = new Player(playerName, 50, 0, 0);

var getInfo = function(arg) {
    console.log("Name: " + arg.name + ", Health: " + arg.health + ", X Position: " + arg.x + ", Y Position: " + arg.y);
};

var getPosition = function(arg) {
	console.log("X Position: " + arg.x + ", Y Position: " + arg.y);
};

console.log("Greetings " + playerName + ", I will be guiding you towards your death.  Terribly sorry about this.");
getInfo(hero);

var moveUp = function(arg) {
	arg.y += 1;
	console.log("Moved Up One");
	getPosition(arg);
	if (hero.x === grimReaper.x && hero.y === grimReaper.y) {
		hero.health = -1;
		getInfo(hero);
		console.log("You have encountered Death.  He was way more prepared than you were.");
	};
};

var moveRight = function(arg) {
	arg.x += 1;
	console.log("Moved Right One");
	getPosition(arg);
		if (hero.x === grimReaper.x && hero.y === grimReaper.y) {
		hero.health = -1;
		getInfo(hero);
		console.log("You have encountered Death.  He was way more prepared than you were.");
	};
};

var moveDown = function(arg) {
	arg.y -= 1;
	console.log("Moved Down One");
	getPosition(arg);
		if (hero.x === grimReaper.x && hero.y === grimReaper.y) {
		hero.health = -1;
		getInfo(hero);
		console.log("You have encountered Death.  He was way more prepared than you were.");
	};
};

var moveLeft = function(arg) {
	arg.x -= 1;
	console.log("Moved Left One");
	getPosition(arg);
		if (hero.x === grimReaper.x && hero.y === grimReaper.y) {
		hero.health = -1;
		getInfo(hero);
		console.log("You have encountered Death.  He was way more prepared than you were.");
	};
};





// Refactored Code


// Prompt user for name
var playerName = prompt("What is your name, player?");

// create Player objects
function Player(name, health, x, y) {
    this.name = name,
    this.health = health,
    this.x = x,
    this.y = y
};

// literal creation of baddie
var grimReaper = {
	name: "Death",
	health: 5000,
	x: 4,
	y: 4
}

// using function to create hero
var hero = new Player(playerName, 50, 0, 0);

// full info
var getInfo = function(arg) {
    console.log("Name: " + arg.name + ", Health: " + arg.health + ", X Position: " + arg.x + ", Y Position: " + arg.y);
};

// only position
var getPosition = function(arg) {
	console.log("X Position: " + arg.x + ", Y Position: " + arg.y);
};

// player dead?  check pos hero vs pos grimReaper
var playerDead = function(arg) {
	getPosition(arg);
	if (hero.x === grimReaper.x && hero.y === grimReaper.y) {
		hero.health = -1;
		getInfo(hero);
		console.log("You have encountered Death.  He was way more prepared than you were.");
	};
};

// greeting to player
console.log("Greetings " + playerName + ", I will be guiding you towards your death.  Terribly sorry about this.");
getInfo(hero);

// movement functions
var moveUp = function(up) {
	up.y += 1;
	console.log("Moved Up One");
	playerDead(up);
};

var moveRight = function(right) {
	right.x += 1;
	console.log("Moved Right One");
	playerDead(right);
};

var moveDown = function(down) {
	down.y -= 1;
	console.log("Moved Down One");
	playerDead(down);
};

var moveLeft = function(left) {
	left.x -= 1;
	console.log("Moved Left One");
	playerDead(left);
};





// Reflection
/*







*/