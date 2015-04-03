//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

 var isTyler = function(name){
 	if(name === "Tyler"){
 		return true; 
 	}else {
 		return false; 
 	}
 };

 var name = isTyler(Tyler); 

//Next problem

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
var getName = function(){
	var name = prompt("What's your name?");
	return name; 
}

var name = getName(name); 

//Next Problem

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 var welcome = function(){
 	alert("Welcome," + name + " Who we hatin' on today?")
 }


//Next problem




//What is the difference between arguments and parameters?
//***Arguments are what's passed when calling the function.
//*** Parameters are what's set when the function is declared / invoked.


//Next problem
//What are all the falsy values in JavaScript and how do you check if something is falsy?
//  NaN
//  Null
//  Undefined 
//  Zero 
//  ''
//  False 
// You check if something if falsey with a statement like 
var name = "Dylan"; 
if(name){
	return truthy; 
};
// If the above function returns truthy, then the data is truthy. 



//Next Problem
//Create a function called myName that returns your name

var myName = function(){
	return "Dylan"; 
}



//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName(); 

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem

//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function(){
	return function(){
		return 'Dylan'; 
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn(); 
//I returned Dylan, if that's what this was supposed t do.... 