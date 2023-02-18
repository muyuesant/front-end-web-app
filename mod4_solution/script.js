// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using either the helloSpeaker's or byeSpeaker's 'speak' method.
  // See Lecture 50, part 1
  for ( index in names) {
    // STEP 11:
    // Retrieve the first letter of the current name in the loop.
    // Use the string object's 'charAt' function. Since we are looking for
    // names that start with either upper case or lower case 'J'/'j', call
    // string object's 'toLowerCase' method on the result so we can compare
    // to lower case character 'j' afterwards.
    // Look up these methods on Mozilla Developer Network web site if needed.
    var firstLetter = names[index][0].toLowerCase();

    // STEP 12:
    // Compare the 'firstLetter' retrieved in STEP 11 to lower case
    // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
    // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
    // name in the loop.
    if ("j" == firstLetter) {
      byeSpeaker.speak(names[index]);
    } else {
      helloSpeaker.speak(names[index]);
    }
  }
  
   // second list
  var greetingName = function (name){
    if (name.startsWith("j") || name.startsWith("J")){
      return byeSpeaker.speakSimple(name);
    } else {
      return helloSpeaker.speakSimple(name);
    }
  };

  var names2 = names.map(greetingName);
  console.log("\nThis is the second list.\n");
  names2.forEach(element => {
    console.log(element);
  });


  // third list
  var reducingName = function (accumulator, currentValue){
    if (currentValue.startsWith("H")){
      accumulator.hello.push(currentValue);
    } else {
      accumulator.bye.push(currentValue);
    }
    return accumulator;
  };
  
  var initialValue = {
    hello: [],
    bye: []
  };

  var name3 = names2.reduce(reducingName, initialValue);
  console.log("\nThis is the third list.\n");
  name3.hello.forEach(element => {
    console.log(element);
  });

  name3.bye.forEach(element => {
    console.log(element);
  });

})();
