// I worked on this challenge by myself.  

// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line.

// Challenge 1 Rescue Mission

// move down x 2
this.moveDown();
this.moveDown();
// move right
this.moveRight();
// move up x 2
this.moveUp();
this.moveUp();
// move right x 2
this.moveRight();
this.moveRight();
// move down
this.moveDown();
// attack!
this.attackNearbyEnemy();

// Challenge 2 Grab The 'Shrooms

// move up
this.moveUp();
// move right collect mushroom
this.moveRight();
// move left back to path
this.moveLeft();
// move forward to engage
this.moveUp();
// engage
this.attackNearbyEnemy();

// Challenge 3 Drink me!

// move right 1
// attack ogre
// move right 1
// move down 1
// collect pot
// move up 1
// move right 1
// attack ogre

this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

// Challenge 4 Taunt the Guards

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
// move right
this.moveRight();
// say "hey there!"
this.say("Hey there!");
// move left x 2
this.moveLeft();
this.moveLeft();
// say "attack!"
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
// move right
this.moveRight();
// say "follow me."
this.say("Follow me.");
// move right x 2
this.moveRight();
this.moveRight();
// move up
this.moveUp();
//move right 
this.moveRight();
// say "hey there!"
this.say("Hey there!");
// move down
this.moveDown();
// move right
this.moveRight();
// move up
this.moveUp();
// move right to escape
this.moveRight();

// Challenge 5 Its a carp!  lol

// move down x 2
this.moveDown();
this.moveDown();
// say "Hey there!"
this.say("Hey there!");
// move up x 2
this.moveUp();
this.moveUp();

// Challenge 6 Break The Prison!

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
if(name === "William")
    return true;
if(name === "Krogg")
    return false;
if(name === "Lucas")
    return true;  
if(name === "Gort")
    return false;
if(name === "Marcus")
    return true;
if(name === "William")
    return false;

if(name != "Gordon")
    return false;

return true;



// Challenge 7 Taunt!

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("You there!  You stink!");
this.say("Your mother was a hampster and your father smelt of elderberries!");
this.say("Now, meet your death!");


// Challenge 8 Cowardly Taunt!


this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(50, 16);
// Say something!
this.say("Yo!");
// Then run back behind the arrow towers for safety.
this.moveXY(65, 11);
// You can shift+click on the map to insert coordinates.


// Challenge 9 Commanding Followers



// Challenge 10 Mobile Artillery


