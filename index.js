setInterval(function() {
  $(".handbutton").animate({
    opacity: 0
  }).animate({
    opacity: 1
  });
}, 1000);

var buttoncolor = [".redDiv", ".blueDiv", ".yellowDiv", ".greenDiv"];
var gamePattern = [];
var userPattern = [];
var gamepatternpositon = [];
var userPatternposition = [];
var started = true;
var length = 0;
var indexnumber = 0
var count = 1;
var flag = 1;
var startgame = $(".startbutton").attr("class");

function startGame(){
  $(".startbutton").click(function(){
    return 0;
  })
}

function gameOver() {
  var wrong = "wrong";
  audioplay(wrong);
  $(".startgame").text("GAME OVER");
  count = 1;
  setTimeout(function() {
    startNewGame();
   }, 5000);

}

function createSequence() {
  userPatternposition = [];
  userPattern = [];
  var randomnumber = Math.floor(Math.random() * 4);
  var colourpallete = buttoncolor[randomnumber];
  gamePattern.push(colourpallete);
  $(colourpallete).animate({
    opacity: 0
  }).animate({
    opacity: 1
  });

  return 0;
}

function startNewGame() {
  gamePattern = [];
  $(".startgame").text("START THE GAME");
}

function audioplay(sound) {
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
  //  console.log(sound);
}

function audiowrongplay(sound) {
  var audio = new Audio("sounds/" + sound + ".mp3");
  audio.play();
}

function checkAnswer(colorname) {

 if (userPattern[colorname] === gamePattern[colorname]) {
    if (userPattern.length === gamePattern.length) {
      createSequence();
      count++;
      $(".startgame").text("LEVEL " + count);
    }

  } else {
    gameOver();
    $(".startbutton").fadeIn(100);
  }

}

$(".startbutton").click(function() {

    $(".startgame").text("LEVEL " + count);
    createSequence();
    $(".startbutton").fadeIn(100).fadeOut(100);

});

$("#redDiv,#yellowDiv,#greenDiv,#blueDiv").click(function() {

    var divname = $(this).attr("id");
    // console.log(divname);
    $("." + divname).animate({
      opacity: 0
    }).animate({
      opacity: 1
    });
    userPattern.push("." + divname);
    checkAnswer(userPattern.length - 1);
    audioplay("." + divname);

 });
