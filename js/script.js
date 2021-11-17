const blue = $("#blue");

let welcome = $("#welcome");
let begin = $("#begin");

begin.on("click", function () {
  questionOne.css("display", "block");
  welcome.css("display", "none");
  timerCountdown();
});

let questionOne = $("#questionOne");
questionOne.css("display", "none");

let questionTwo = $("#questionTwo");
questionTwo.css("display", "none");

let questionThree = $("#questionThree");
questionThree.css("display", "none");

// let incorrect = $(".incorrect");
// incorrect.on("click", function () {
//     incorrect.css("background-color", "red");
// });

let red = $(".red");
red.on("click", function () {
    alert("Incorrect");
    red.css("background-color", "red");
    questionTwo.css("display", "block");
});

let green = $(".green");
green.on("click", function () {
    alert("Incorrect");
    green.css("background-color", "red");
    questionTwo.css("display", "block");
});

let purple = $(".purple");
purple.on("click", function () {
    alert("Incorrect");
    purple.css("background-color", "red");
    questionTwo.css("display", "block");
});

blue.on("click", function () {
  alert("Correct");
  blue.css("background-color", "green");
  questionTwo.css("display", "block");
  localStorage.setItem("highScore", JSON.stringify("correct"));
});

let fortyTwo = $("#fortyTwo");
fortyTwo.on("click", function () {
  alert("Correct");
  fortyTwo.css("background-color", "green");
  questionThree.css("display", "block");
  localStorage.setItem("highScore", JSON.stringify("sgaddgs"));
});

let money = $(".money");
money.on("click", function () {
    alert("Incorrect");
    money.css("background-color", "red");
    questionThree.css("display", "block");
});

let happiness = $(".happiness");
happiness.on("click", function () {
    alert("Incorrect");
    happiness.css("background-color", "red");
    questionThree.css("display", "block");
});

let love = $(".love");
love.on("click", function () {
    alert("Incorrect");
    love.css("background-color", "red");
    questionThree.css("display", "block");
});



let andy = $("#andy");
andy.on("click", function () {
  alert("Correct");
  andy.css("background-color", "green");
  questionThree.css("display", "block");
  displayEnd();
});

let bigBird = $(".bigBird");
bigBird.on("click", function () {
    alert("Incorrect");
    bigBird.css("background-color", "red");
    displayEnd(); 
});

let batman = $(".batman");
batman.on("click", function () {
    alert("Incorrect");
    batman.css("background-color", "red");
    displayEnd();
});

let mrMagoo = $(".mrMagoo");
mrMagoo.on("click", function () {
    alert("Incorrect");
    mrMagoo.css("background-color", "red");
    displayEnd();
});

let highScore = $("#highScore");

let navBarText = $(".navbar-text");

let timerText = 10;

const fortytwo = $("#fortytwo");
fortytwo.attr("hidden");

function timerCountdown() {
  var timerInterval = setInterval(function () {
    timerText--;
    navBarText.text(timerText);

    if (timerText === 0) {
      clearInterval(timerInterval);
      navBarText.text("You failed.");
    }
  }, 1000);
}

let card = $(".card");
let showEnd = $("#endQuiz");

function displayEnd() {
  card.css("display", "none");
  showEnd.css("display", "block");

}