var mapLayout = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+
'x________________________________________________x'+
'x________________________@_______________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x_________[]_______________________________[]____x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x____!___________________________________________x'+
'x_______________________[]_______________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x______________________[]________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x_____________[]____________________________!____x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x________________________________________________='+
'x_____________________[]_________________________='+
'x________________________________________________='+
'x_________________________________________[]_____x'+
'x_______!________________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x__________________________________________!_____x'+
'x____[]__________________________________________x'+
'x________________________________________________x'+
'x______________________________________[]________x'+
'x____________&___________________________________x'+
'x________________________________________________x'+
'x________________________________________________x'+
'x____[]___________8_____________[]_______________x'+
'xxxxxxxxxxxxxxxxx===xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

function Player(xCoord, yCoord, facing) {
  this.xCoord = xCoord;
  this.yCoord = yCoord;
  this.currentSpot = 2018;
  this.nextSpot = "";
  this.facing = "top";
  this.pause = false;
}

function Robot(xCoord, yCoord, facing) {
  this.xCoord = xCoord;
  this.yCoord = yCoord;
  this.currentSpot = "";
  this.nextSpot = "";
  this.status = true;
  this.facing = facing;
  this.sight = "nothing";
}

var player1 = new Player(18,40, "down");

var robot1 = new Robot(5,10, "top");
var robot2 = new Robot(44,23, "top");
var robot3 = new Robot(8,30, "top");
var robot4 = new Robot(43,33, "top");



Robot.prototype.move = function() {

  this.currentSpot = passConvertCoordinates(this.xCoord,this.yCoord);

  var spotSelector = this.currentSpot+1;
  $("span:nth-of-type("+spotSelector+")").css('background', 'red');

  if (this.sight == "nothing") {

  }
  else {
    if (this.status == true) {
      if (this.yCoord < player1.yCoord) {this.nextSpot = passConvertCoordinates(this.xCoord,this.yCoord+1)}
      if (this.yCoord > player1.yCoord) {this.nextSpot = passConvertCoordinates(this.xCoord,this.yCoord-1)}
      if (mapLayout.charAt(this.nextSpot) == "_") {
        mapLayout = mapLayout.replaceAt(this.currentSpot, "_");
        mapLayout = mapLayout.replaceAt(this.nextSpot, "!");
        this.currentSpot = this.nextSpot;
        this.nextSpot = "";
        if (this.yCoord < player1.yCoord) {
          this.yCoord = this.yCoord+1;
          this.facing = "bottom";
        }
        if (this.yCoord > player1.yCoord) {
          this.yCoord = this.yCoord-1;
          this.facing = "top";
        }
        else {this.yCoord = this.yCoord}
      } else {
        this.status = false;
      }
    }
    else {
      if (this.xCoord < player1.xCoord) {this.nextSpot = passConvertCoordinates(this.xCoord+1,this.yCoord)}
      if (this.xCoord > player1.xCoord) {this.nextSpot = passConvertCoordinates(this.xCoord-1,this.yCoord)}
      if (mapLayout.charAt(this.nextSpot) == "_") {
        mapLayout = mapLayout.replaceAt(this.currentSpot, "_");
        mapLayout = mapLayout.replaceAt(this.nextSpot, "!");
        this.currentSpot = this.nextSpot;
        this.nextSpot = "";
        if (this.xCoord < player1.xCoord) {
          this.xCoord = this.xCoord+1;
          this.facing = "right";
        }
        if (this.xCoord > player1.xCoord) {
          this.xCoord = this.xCoord-1;
          this.facing = "left";
        }
        else {this.xCoord = this.xCoord}
      }
      else {
        this.status = true;
      }
    }
  }
  $("span:nth-of-type("+spotSelector+")").css('border-'+this.facing, '1px solid black');

}

Player.prototype.checkForRobots = function() {
  if (mapLayout.charAt(passConvertCoordinates(this.xCoord,this.yCoord+1)) == "!" ||
      mapLayout.charAt(passConvertCoordinates(this.xCoord,this.yCoord-1)) == "!" ||
      mapLayout.charAt(passConvertCoordinates(this.xCoord+1,this.yCoord)) == "!" ||
      mapLayout.charAt(passConvertCoordinates(this.xCoord-1,this.yCoord)) == "!"
      // ||
      // mapLayout.charAt(passConvertCoordinates(this.xCoord+1,this.yCoord+1)) == "!" ||
      // mapLayout.charAt(passConvertCoordinates(this.xCoord+1,this.yCoord-1)) == "!" ||
      // mapLayout.charAt(passConvertCoordinates(this.xCoord-1,this.yCoord+1)) == "!" ||
      // mapLayout.charAt(passConvertCoordinates(this.xCoord-1,this.yCoord-1)) == "!"
      ) {
    //console.log("game over");
    $(".test").html("game over");
  } else {
    $(".test").html("");
  }
}

Player.prototype.interact = function(interactWith) {

  if (interactWith == "talk") {

    player1.pause = true;
    //check if space where you are facing is a npc and if so then alert or w/e
    var way = player1.facing;

    if (way == "left") {this.nextSpot = passConvertCoordinates(this.xCoord-1,this.yCoord);}
    if (way == "up") {this.nextSpot = passConvertCoordinates(this.xCoord,this.yCoord-1);}
    if (way == "right") {this.nextSpot = passConvertCoordinates(this.xCoord+1,this.yCoord);}
    if (way == "down") {this.nextSpot = passConvertCoordinates(this.xCoord,this.yCoord+1);}
    if(mapLayout.charAt(this.nextSpot) == "&") {console.log("hello");}
    if(mapLayout.charAt(this.nextSpot) == "t") {
      console.log("terminal");

    }
    //console.log(this.nextSpot+" "+getConvertCoordinates(this.nextSpot));
  }
}

Player.prototype.move = function(way) {

  //collision detection
  if (way == "left") {this.nextSpot = passConvertCoordinates(this.xCoord-1,this.yCoord);}
  if (way == "up") {this.nextSpot = passConvertCoordinates(this.xCoord,this.yCoord-1);}
  if (way == "right") {this.nextSpot = passConvertCoordinates(this.xCoord+1,this.yCoord);}
  if (way == "down") {this.nextSpot = passConvertCoordinates(this.xCoord,this.yCoord+1);}

  this.facing = way;

  this.currentSpot = passConvertCoordinates(this.xCoord,this.yCoord);
  if (way == "left") {
    this.nextSpot = passConvertCoordinates(this.xCoord-1,this.yCoord);
  }
  if (way == "up") {
    this.nextSpot = passConvertCoordinates(this.xCoord,this.yCoord-1);
  }
  if (way == "right") {
    this.nextSpot = passConvertCoordinates(this.xCoord+1,this.yCoord);
  }
  if (way == "down") {
    this.nextSpot = passConvertCoordinates(this.xCoord,this.yCoord+1);
  }

  if (mapLayout.charAt(this.nextSpot) !== "_") {
    this.nextSpot = "";
  }
  else {
    if (way == "left") {
      this.xCoord = this.xCoord-1;
    }
    if (way == "up") {
      this.yCoord = this.yCoord-1;
    }
    if (way == "right") {
      this.xCoord = this.xCoord+1;
    }
    if (way == "down") {
      this.yCoord = this.yCoord+1;
    }
    mapLayout = mapLayout.replaceAt(this.currentSpot, "_");
    mapLayout = mapLayout.replaceAt(this.nextSpot, "8");
    this.currentSpot = this.nextSpot;
    this.nextSpot = "";
    return this.currentSpot;
  }
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

var moveCount = 0;

function drawScreen() {

  var map1Layout = mapLayout;

  map1Layout = map1Layout.replace(/_/g, 'o')
    .replace(/\[\]/g, 'cc')
    .replace(/8/g, 'p')
    .replace(/&/g, 'n')
    .replace(/@/g, 't')
    .replace(/=/g, 'd')
    .replace(/!/g, 'r');

    // console.log(map1Layout);

  $("#display").html("");
  //draw the screen
  var character = 0;
  for (var i = 0; i < 42; i++) {
    //row
    for (var x = 0; x < 50; x++) {

      if (map1Layout.charAt(character) == "p") {
        $("#display").append("<span class='"+map1Layout.charAt(character)+" "+player1.facing+" pixels'>"+"</span>");
      }
      else {
        $("#display").append("<span class='"+map1Layout.charAt(character)+" pixels'>"+"</span>");
       }
        character++;
    }
    $("#display").append("<br>");
  }
    if (player1.pause == false) {
      player1.checkForRobots();

      if (moveCount == 2) {
        robot1.move();
        robot2.move();
        robot3.move();
        robot4.move();
        // console.log(moveCount);
        moveCount = 0;
      }
      moveCount++;
    }

}

function getXConvertCoordinates(longCoord) {
  var y = Math.floor(longCoord/50);
  var x = longCoord - (y * 50);
  //console.log("x: "+x+" "+"y: "+y);
  return x;
}

function getYConvertCoordinates(longCoord) {
  var y = Math.floor(longCoord/50);
  var x = longCoord - (y * 50);
  //console.log("x: "+x+" "+"y: "+y);
  return y;
}

function passConvertCoordinates(xcoord,ycoord) {
  var y = ycoord * 50;
  return xcoord+y;
}

var Game = {};

if (player1.pause == true) {Game.fps = 0; console.log("0")}
else {Game.fps = 60;}


Game.run = function() {
  drawScreen();
};

var change = {
  37: {
    left: "-=1"
  },

  38: {
    top: "-=1"
  },

  39: {
    left: "+=1"
  },

  40: {
    top: "+=1"
  },
}
$(document).on({
  keydown: keydown,
  keyup: keyup
})

var movement = []

function keydown(e) {
  var key = e.which
  var animation = change[key];
  if (!movement[key]) { // watch out for repeating keys!
      movement[key] = setInterval(keepGoing)
  }
  //  console.log("down", key, movement[key])
  function keepGoing() {
    //console.log(animation)
    if (player1.pause == false) {
      if (key == 37) {player1.move("left");}
      if (key == 38) {player1.move("up");}
      if (key == 39) {player1.move("right");}
      if (key == 40) {player1.move("down");}
      if (key == 84) {player1.interact("talk");}
  }

  }
}

function keyup(e) {
  var key = e.which
  movement[key] = clearInterval(movement[key])
}

$(document).ready(function() {


    Game._intervalId = setInterval(Game.run, 1000 / Game.fps);

})
