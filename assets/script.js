var body = document.body;
var scoresHTML = document.createElement("div");
var scoresBtn = document.createElement("button");
var timerHTML = document.createElement("div");
var h1E1 = document.createElement("h1");
var h2E1 = document.createElement("h2");
var startHTML = document.createElement("div");
var startBtn = document.createElement("button");
var question = 0;

scoresBtn.textContent = "View Scores";
timerHTML.textContent = 35;
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
var highScore = [["Abel Kim", 20]];



scores.addEventListener("click", function(){
    body.innerHTML = "";
    for (let i = 0; i < highScore.length; i++) {
        console.log(highScore[i][0])
    }
    alert("scores button clicked");
});

start.addEventListener("click", function(){
    question++;
    body.innerHTML = "";

    if (question === 1){
        var q1H1 = document.createElement("h1");
        var q1BtnWrapper = document.createElement("div");
        var q1B1 = document.createElement("button");
        var q1B2 = document.createElement("button");
        var q1B3 = document.createElement("button");
        var q1B4 = document.createElement("button");
        q1H1.textContent = "What do you use to copy an existing GitHub Repo to your local drive?"
        q1B1.textContent = "Git Clone";
        q1B2.textContent = "Git Pull";
        q1B3.textContent = "Git Commit";
        q1B4.textContent = "Git Add";
        body.appendChild(timerHTML);
        body.appendChild(q1H1);
        body.appendChild(q1BtnWrapper);
        q1BtnWrapper.appendChild(q1B1);
        q1BtnWrapper.appendChild(q1B2);
        q1BtnWrapper.appendChild(q1B3);
        q1BtnWrapper.appendChild(q1B4);
        q1B1.id = "btn";
        q1B2.id = "btn";
        q1B3.id = "btn";
        q1B4.id = "btn";
        const buttons = document.querySelectorAll('#btn')
        buttons.forEach(function(currentBtn){
            currentBtn.addEventListener('click', function(){
                if (currentBtn.textContent === "Git Clone"){
                    var ans = document.createElement("p");
                    ans.textContent = "Correct";
                    body.appendChild(ans);
                }
                else{
                    timerHTML.textContent = timerHTML.textContent - 10;
                    var ans = document.createElement("p");
                    ans.textContent = "Incorrect";
                    body.appendChild(ans);
                }
                question++;
            })
        })
    }


});
