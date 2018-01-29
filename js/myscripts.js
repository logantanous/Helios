// Business Logic

function ComputerTerminal (status, name, buildingLocationNumber, roomNumber, locationX, locationY, type, questionArray, answerArray, success, failure) {
  this.status = status;
  this.name = name;
  this.buildingLocationNumber = buildingLocationNumber;
  this.roomNumber = roomNumber;
  this.locationX = locationX;
  this.locationY = locationY;
  this.type = type;
  this.questionArray = questionArray;
  this.answerArray = answerArray;
  this.success = success;
  this.failure = failure;
}

ComputerTerminal.prototype.askQuestion = function () {
  var size = this.size;
  return yourCost;
};

ComputerTerminal.prototype.verifyAnswer = function (answer) { // pass in the answer as array or string
  var compare = 0;
  for (var i=0; i < answer.length; i++) {
    if (answer[i] === this.answerArray[i]) { compare ++;}
  }
  if (compare === this.answerArray.length) { return true; } else { return false;}
  // return compare;
  // if(this.answerArray === answer) {return true; } else { return false; }
};

function testAnswer(myPrompt, x){
  // if  (myPrompt.verifyAnswer(x)) { alert("It's true!"); }
  if  (myPrompt.verifyAnswer(x)) { return true; } else { return false;}
}



function getAnswer(myPrompt){
  var combo = "";
  var x = "";
  // if (Array.isArray(myPrompt)){
  //   alert("It's an array!");
  //   alert("And it's got a length of " + myPrompt.length);
  //   for (var i = 0; i < myPrompt.length; i++){
  //     combo += myPrompt[i] + "\n";
  //   }
  //   x = prompt(combo);
  // } else { x = prompt(myPrompt); }
  // return x;
  alert("My question type is: " + myPrompt);

  if (myPrompt.type ==="colors") {
    for (var i = 0; i < myPrompt.questionArray.length; i++){
      combo += myPrompt.questionArray[i] + "=";
    }
    combo = combo.slice(0, -1);
    x = prompt(combo); // this is prompting the user ********
    $("#row1").html("<h3>" + combo + "</h3>");
    alert("Drumroll: ");
    if  (myPrompt.verifyAnswer(x)) { alert("It's true!"); }
  } else if (myPrompt.type ==="questions") {
    for (var i = 0; i < myPrompt.questionArray.length; i++){
      combo += myPrompt.questionArray[i] + "\n";
    }
    x = prompt(combo);
  } else if (myPrompt.type ==="keypad") {
    alert("KEYPAD!");
    for (var i = 0; i < (myPrompt.questionArray.length); i+=3){
      combo += myPrompt.questionArray[i] + " : ";
      combo += myPrompt.questionArray[i + 1] + " : ";
      combo += myPrompt.questionArray[i + 2] + "\n";
    }
    x = prompt(combo);
  } else return "Destroyed!";
  return x;
}

function checkAnswer(answer, myAnswer){

  // alert("Type of " + typeof answer);

  // if (answer === myObject) {
  //   alert("Correct!");
  // }

  // alert("My question type is: " + myAnswer.type);

  if (myAnswer.type === "colors") {
    // for (var i = 0; i < myPrompt.questionArray.length; i++){
    //   combo += myPrompt.questionArray[i] + "=";
    // }
    // combo = combo.slice(0, -1);
    // x = prompt(combo);
    alert(myAnswer.type);   // works!! **********************************
    alert("Answer = " + answer);
    answer=answer.split("");
    alert("Answer is NOW = " + answer);
    alert("Expecting: ") +  myAnswer.answerArray;
    alert("myAnswer is :") + myAnswer;
    if (answer != myAnswer.answerArray){
      alert("That is NOT correct!");
    }
    alert("COLORS!");
  } else if (myAnswer.type ==="questions") {
    // for (var i = 0; i < myPrompt.questionArray.length; i++){
    //   combo += myPrompt.questionArray[i] + "\n";
    // }
    // x = prompt(combo);
    alert("QUESTIONS!");
  } else if (myAnswer.type ==="keypad") {
    alert("KEYPAD!");
    // for (var i = 0; i < (myPrompt.questionArray.length); i+=3){
    //   combo += myPrompt.questionArray[i] + " : ";
    //   combo += myPrompt.questionArray[i + 1] + " : ";
    //   combo += myPrompt.questionArray[i + 2] + "\n";
    // }
    // x = prompt(combo);
  } else return "Destroyed!";
  // return x;
  return;

}

// User Interface Logic

function showQuestion(someTerminal){
  var combo = "";
  if (someTerminal.type ==="colors") {
    for (var i = 0; i < someTerminal.questionArray.length; i++){
      combo += someTerminal.questionArray[i] + "=";
    }
    combo = combo.slice(0, -1);
    x = prompt(combo); // this is prompting the user ********
    $("#row1").html("<h3>" + combo + "</h3>");
    // alert("Drumroll: ");
    // if  (someTerminal.verifyAnswer(x)) { alert("It's true!"); }  // This verifies the answer!
  } else if (someTerminal.type ==="questions") {
    for (var i = 0; i < someTerminal.questionArray.length; i++){
      combo += someTerminal.questionArray[i] + "\n";
    }
    x = prompt(combo);
    $("#row1").html("<h3>" + combo + "</h3>");
  } else if (someTerminal.type ==="keypad") {
    alert("KEYPAD!");
    for (var i = 0; i < (someTerminal.questionArray.length); i+=3){
      combo += someTerminal.questionArray[i] + " : ";
      combo += someTerminal.questionArray[i + 1] + " : ";
      combo += someTerminal.questionArray[i + 2] + "\n";
    }
    x = prompt(combo);
    $("#row1").html("<h3>" + combo + "</h3>");
  } else return "Destroyed!";
  return x;
}





$(document).ready(function() {
  myTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "colors", ["R","G","B","Y","B"], ["R","G","B","Y","B"], "OPEN", "ALARM-5");
  alert("My terminal type= ")+myTerminal.type;
  myQuestionTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "questions", ["What is your favorite color?", "1. Red", "2. Blue", "3. Purple"], ["3"], "OPEN", "ALARM-5");
  myKeypadTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "keypad", [1,2,3,4,5,6,7,8,9], ["3"], "OPEN", "ALARM-5");
  var test = "";

  var myKindOfTerminal = myTerminal ;
  showQuestion(myKindOfTerminal);


  // var redundant = getAnswer("What is the ultimate answer?");
  // checkAnswer(redundant);
  //
  // var test = getAnswer(myTerminal);
  // checkAnswer(test);

  // var test = getAnswer(myQuestionTerminal.questionArray);
  // checkAnswer(test);
  //
  // // var test = getAnswer(myKeypadTerminal.questionArray);
  // // checkAnswer(test);
  // test = getAnswer(myTerminal);
  // // alert("Test = " + test);
  // alert(testAnswer(myTerminal, test));

  //
  // alert ("Test = ") + test;
  // var result = checkAnswer(test, myKeyTerminal);
  // alert ("Result = ") + result;
  // alert("My terminal type= ")+myKeypadTerminal.type.toString();
  // checkAnswer(test);



});
