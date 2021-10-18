var body = document.body;
var scoresHTML = document.createElement("div");
var scoresBtn = document.createElement("button");
var timerHTML = document.createElement("div");
var h1E1 = document.createElement("h1");
var h2E1 = document.createElement("h2");
var startHTML = document.createElement("div");
var startBtn = document.createElement("button");
var question = 0;
var finalScore = 0;

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
var highScore = [];

scores.addEventListener("click", function(){
    body.innerHTML = "";
    var scoreboard = document.createElement("p");
    scoreboard.textContent = "";
    body.appendChild(scoreboard);
    var rankings = ""

    for (let i = 0; i < highScore.length; i++) {
        var nameEntry = highScore[i][0];
        var scoreEntry = highScore[i][1];
        rankings = rankings + nameEntry + ": " + scoreEntry;
    }
    scoreboard.textContent = rankings;

});

start.addEventListener("click", function(){
    body.innerHTML = "";
    question++;
    console.log(question);
    countdown();
    changePage();
});

function countdown() {
    var timeInterval = setInterval(function (){
        if (timerHTML.textContent > 0 && finalScore === 0) {
            timerHTML.textContent--;
        }
        else {
            clearInterval(timeInterval);
            submitScore();
        }
    }, 1000);
}

function changePage() {

    if (question > 3 || timerHTML.textContent <=0){
        finalScore = timerHTML.textContent;
        console.log(question);
        submitScore();
    }
    else if (question === 1){
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
        q1B1.className = "btn";
        q1B2.className = "btn";
        q1B3.className = "btn";
        q1B4.className = "btn";
        const buttons = document.querySelectorAll('.btn')
        buttons.forEach(function(currentBtn){
            currentBtn.addEventListener('click', function(){
                if (currentBtn.textContent === "Git Clone"){
                    body.innerHTML = "";
                    var ans = document.createElement("p");
                    ans.textContent = "Correct";
                    body.appendChild(ans);
                    }
                else{
                    body.innerHTML = "";
                    timerHTML.textContent = timerHTML.textContent - 10;
                    var ans = document.createElement("p");
                    ans.textContent = "Incorrect";
                    body.appendChild(ans);
                    }
                question++;
                console.log(question);
                changePage();
            });
        });
    }
    else if (question === 2){
        var q2H1 = document.createElement("h1");
        var q2BtnWrapper = document.createElement("div");
        var q2B1 = document.createElement("button");
        var q2B2 = document.createElement("button");
        var q2B3 = document.createElement("button");
        var q2B4 = document.createElement("button");
        q2H1.textContent = "What do you use to pull changes to the remote repo to your local drive?"
        q2B1.textContent = "Git Clone";
        q2B2.textContent = "Git Pull";
        q2B3.textContent = "Git Commit";
        q2B4.textContent = "Git Add";
        body.appendChild(timerHTML);
        body.appendChild(q2H1);
        body.appendChild(q2BtnWrapper);
        q2BtnWrapper.appendChild(q2B1);
        q2BtnWrapper.appendChild(q2B2);
        q2BtnWrapper.appendChild(q2B3);
        q2BtnWrapper.appendChild(q2B4);
        q2B1.className = "btn";
        q2B2.className = "btn";
        q2B3.className = "btn";
        q2B4.className = "btn";
        const buttons = document.querySelectorAll('.btn')
        buttons.forEach(function(currentBtn){
            currentBtn.addEventListener('click', function(){
                if (currentBtn.textContent === "Git Pull"){
                    body.innerHTML = "";
                    var ans = document.createElement("p");
                    ans.textContent = "Correct";
                    body.appendChild(ans);
                    }
                else{
                    body.innerHTML = "";
                    timerHTML.textContent = timerHTML.textContent - 10;
                    var ans = document.createElement("p");
                    ans.textContent = "Incorrect";
                    body.appendChild(ans);
                    }
                question++;
                console.log(question);
                changePage();
            });
        });
    }

    else if (question === 3){
        var q3H1 = document.createElement("h1");
        var q3BtnWrapper = document.createElement("div");
        var q3B1 = document.createElement("button");
        var q3B2 = document.createElement("button");
        var q3B3 = document.createElement("button");
        var q3B4 = document.createElement("button");
        q3H1.textContent = "What do you use to add comments to the changes you are pushing from your local drive to the repo?"
        q3B1.textContent = "Git Clone";
        q3B2.textContent = "Git Pull";
        q3B3.textContent = "Git Commit";
        q3B4.textContent = "Git Add";
        body.appendChild(timerHTML);
        body.appendChild(q3H1);
        body.appendChild(q3BtnWrapper);
        q3BtnWrapper.appendChild(q3B1);
        q3BtnWrapper.appendChild(q3B2);
        q3BtnWrapper.appendChild(q3B3);
        q3BtnWrapper.appendChild(q3B4);
        q3B1.className = "btn";
        q3B2.className = "btn";
        q3B3.className = "btn";
        q3B4.className = "btn";
        const buttons = document.querySelectorAll('.btn')
        buttons.forEach(function(currentBtn){
            currentBtn.addEventListener('click', function(){
                if (currentBtn.textContent === "Git Commit"){
                    body.innerHTML = "";
                    var ans = document.createElement("p");
                    ans.textContent = "Correct";
                    body.appendChild(ans);
                    }
                else{
                    body.innerHTML = "";
                    timerHTML.textContent = timerHTML.textContent - 10;
                    var ans = document.createElement("p");
                    ans.textContent = "Incorrect";
                    body.appendChild(ans);
                    }
                question++;
                console.log(question);
                changePage();
            });
        });
    }
    
};

function submitScore() {
    body.innerHTML = "";
    var submitH1 = document.createElement("h1");
    var congratsScore = document.createElement("h2");
    var submitAreaDiv = document.createElement("div");
    var submitAreaLabel = document.createElement("p");
    var submitArea = document.createElement("textarea");
    var submitBtn = document.createElement("button");

    submitH1.textContent = "All Done!"
    congratsScore.textContent = "Congratulations, you got " + timerHTML.textContent + " points.";
    submitAreaLabel.textContent = "Enter Intials: ";
    submitArea.textContent = "";
    submitBtn.textContent = "Submit";

    body.appendChild(submitH1);
    body.appendChild(congratsScore);
    body.appendChild(submitAreaDiv);
    submitAreaDiv.appendChild(submitAreaLabel);
    submitAreaDiv.appendChild(submitArea);
    body.appendChild(submitBtn);

    submitBtn.className = "submit";
    var submit = document.querySelector(".submit");
    submit.addEventListener("click", function(){
        if (timerHTML.textContent < 0) {
            timerHTML.textContent = 0;
        }
        highScore.push([submitArea.value, timerHTML.textContent]);
        console.log(highScore);
        body.innerHTML = "";
        reset();
    });

    
}

function reset() {
    question = 0;
    finalScore = 0;

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

}