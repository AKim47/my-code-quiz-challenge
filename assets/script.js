var body = document.body;
var scoresHTML = document.createElement("div");
var scoresBtn = document.createElement("button");
var timerHTML = document.createElement("div");
var h1E1 = document.createElement("h1");
var h2E1 = document.createElement("h2");
var startHTML = document.createElement("div");
var startBtn = document.createElement("button");

scoresBtn.textContent = "View High Scores";
timerHTML.textContent = 75;
h1E1.textContent = "Coding Quiz Challenge";
h2E1.textContent = "Try and complete this quiz before time runs out! Every wrong answer deducts 10 seconds from your time/score.";
startBtn.textContent = "Start Quiz";

body.appendChild(scoresHTML);
scoresHTML.appendChild(scoresBtn);
body.appendChild(timerHTML);
body.appendChild(h1E1);
body.appendChild(h2E1);
body.appendChild(startHTML);
startHTML.appendChild(startBtn);

scoresBtn.id = "scores";
startBtn.id = "generate";


var scores = document.querySelector("#scores");
var start = document.querySelector("#generate");
var highScore = [];



scores.addEventListener("click", function(){
    alert("scores button clicked");
});

start.addEventListener("click", function(){
    alert("start button clicked");    
});
