
const finalScore = $("#finalScore");
const displayHighScore = $("#highScore");


function getFinalScore() {
    // localStorage.getItem(highScore);//
    // JSON.parse(localStorage.getItem(highScore));//
// localStorage.getItem(highScore);//
finalScore.text(JSON.stringify(localStorage.getItem("highScore")));


};

getFinalScore();
