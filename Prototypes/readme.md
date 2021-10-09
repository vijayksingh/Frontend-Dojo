
## Dynamic Lookups

In java
// No Property or Methods
class Robot {};
class Machine {};

// Will not have any property
const robot = new Robot();
const machine = new Machine();

const robby = new Robby();

class Robby extends Robot, Machine () {};
robby.kind // Throw an error.

class Robot {
	string kind;
	string motors;
}

// This object 
const robot = new Robot();

