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
  // alert("My question type is: " + myPrompt);
  if (myPrompt.type ==="colors") {
    for (var i = 0; i < myPrompt.questionArray.length; i++){
      combo += myPrompt.questionArray[i] + "=";
    }
    combo = combo.slice(0, -1);
    x = prompt(combo); // this is prompting the user ********
    $("#row1").html("<h3>" + combo + "</h3>");
    alert("Drumroll: ");
    if  (myPrompt.verifyAnswer(x)) { alert("It's true!"); } // ***********************


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
  if (myAnswer.type === "colors") {
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
    alert("QUESTIONS!");
  } else if (myAnswer.type ==="keypad") {
    alert("KEYPAD!");
  } else return "Destroyed!";
  // return x;
  return;
}


// User Interface Logic

function drawKeypad(){
  for (var i = 1; i < 10; i++) {
    // myI = "<h2>" + " " + i + " " + "</h2>" + "<br>";
    myI = "<h2>" + " " + i + " " + "</h2>";
    $("#" + i).append(myI);
  }
  // $("#row3").show();
}

function showQuery(someTerminal){
  var combo = "";
  var combo1 = "";
  if (someTerminal.type ==="colors") {
    for (var i = 0; i < someTerminal.questionArray.length; i++){
      // combo += someTerminal.questionArray[i] + "=";
      combo += someTerminal.questionArray[i];
    }
    // combo = combo.slice(0, -1);

    for (var i = 1; i < someTerminal.questionArray.length + 1; i++){
      if(someTerminal.questionArray[i-1] === "R") {
        $("#show"+i).css("background-color", "red");
      } else if (someTerminal.questionArray[i-1] === "G") {
        $("#show"+i).css("background-color", "green");
      } else if (someTerminal.questionArray[i-1] === "B") {
        $("#show"+i).css("background-color", "blue");
      } else {
        $("#show"+i).css("background-color", "yellow");
      }
    }

    // x = prompt(combo); // this is prompting the user ********
    // x = "none";
    x = combo;
    // $("#colorboxes").append("<h2>" + combo + "</h2>");
    // $("#show").append("<h2>" + combo + "</h2>");
    $("#colorbox").css( "display", "block" );


    // alert("Drumroll: ");
    // if  (someTerminal.verifyAnswer(x)) { alert("It's true!"); }  // This verifies the answer!
  } else if (someTerminal.type ==="questions") {
    alert("questions");
    // $("#questions").show();
    for (var i = 0; i < someTerminal.questionArray.length; i++){
      combo += someTerminal.questionArray[i] + "\n";
      combo1 += someTerminal.questionArray[i] + "<br><br>";
    }
    // x = prompt(combo);
    x = "none";
    // $("#questions").show(); // do I need this?

    $("#ask").append("<h2>" + combo1 + "</h2>");
    $("#question").css( "display", "block" );

  } else if (someTerminal.type ==="keypad") {
    alert("KEYPAD!");
    for (var i = 0; i < (someTerminal.questionArray.length); i+=3){
      combo += someTerminal.questionArray[i] + " : ";
      combo1 += someTerminal.questionArray[i];
      combo += someTerminal.questionArray[i + 1] + " : ";
      combo1 += someTerminal.questionArray[i + 1];
      combo += someTerminal.questionArray[i + 2] + "\n";
      combo1 += someTerminal.questionArray[i + 2];
    }
    // x = prompt(combo);
    // $("#"+i).append("<h2>" + i  + "</h2>");
    // $("#keypad").append("<h2>" + combo1  + "</h2>");
    x = "none";
    drawKeypad();
    $("#keypad").css( "display", "block");
  } else return "Destroyed!";
  return x;
}

function challenge(someTerminal){
  if (someTerminal.type ==="colors") {
    var myFormQ =
    '<form id="colors" class="form-group terminal row">' +
      '<div class="col-md-10">' +
        '<input id="colorAnswers" type="text" name="colorAnswers" value="" class="form-control" placeholder="#" required>' +
      '</div>' +
      '<div class="col-md-2">' +
        '<button class="btn btn-primary" type="submit" name="button">Submit</button>' +
      '</div>' +
    '</form>';
      $("#formLine").html(myFormQ);
      // $("#questions").show();
      $("#tformLine").css( "display", "block" );
      alert("Got here!");
  } else if (someTerminal.type ==="questions") {
    var myFormQ =
    '<form id="questions" class="form-group terminal row">' +
      '<div class="col-md-10">' +
        '<input id="answers" type="text" name="answers" value="" class="form-control" placeholder="#" required>' +
      '</div>' +
      '<div class="col-md-2">' +
        '<button class="btn btn-primary" type="submit" name="button">Submit</button>' +
      '</div>' +
    '</form>';
      $("#answer").html(myFormQ);
      // $("#questions").show();
      $("#answer").css( "display", "block" );
  } else if (someTerminal.type ==="keypad") {
    // (check for keys) and wait! (set interval and every ten seconds prompt them!)
    // if they click on a key display the key they chose
    // if they press a key display the key in the answer window
    var myFormK =
    '<form id="keys" class="form-group terminal row">' +
      '<div class="col-md-10 keyA">' +
        '<input id="keyAnswers" type="text" name="keyAnswers" value="" class="form-control" placeholder="#" required>' +
      '</div>' +
      '<div class="col-md-2 keyA">' +
        '<button class="btn btn-primary" type="submit" name="button">Submit</button>' +
      '</div>' +
    '</form>';
      $("#entry").append(myFormK);
  }
}

$(document).ready(function() {
  myTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "colors", ["R","G","B","Y","B"], ["R","G","B","Y","B"], "OPEN", "ALARM-5");
  myQuestionTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "questions", ["What is your favorite color?", "1. Red", "2. Blue", "3. Purple"], ["3"], "OPEN", "ALARM-5");
  myKeypadTerminal = new ComputerTerminal("Locked", "Terminal", 1, 1, 10, 10, "keypad", [1,2,3,4,5,6,7,8,9], ["3"], "OPEN", "ALARM-5");
  var test = "";

  // var myKindOfTerminal = myTerminal ;
  // var myKindOfTerminal = myQuestionTerminal ;
  var myKindOfTerminal = myKeypadTerminal;
  alert("My terminal type= ")+myKindOfTerminal.type;

  showQuery(myKindOfTerminal);
  challenge(myKindOfTerminal);
  // drawKeypad();

  $(document).submit(function(e) {
    e.preventDefault();
    var myAnswer = "";
    if ($("#colorAnswers").val()) { alert ($("#colorAnswers").val()); } else if ($("#keyAnswers").val()) { alert ($("#keyAnswers").val()); } else if ($("#answers").val()){ alert($("#answers").val()); } else { alert("No answer!"); }

    // alert ("Here's my answer: " + $("#answers").val());
    // if the answer is equal to what's in the object's answer array then exit then results change to terminal and return control to the next level up?
    // clear the form;
  });

});
