

//--------X-------X-------GAME LOGIC--------X-------X--------//
// If we click on the start/reset
    // If we are playing
        // reload page
    // If we are not playing
        // set score to 0
        // show countdown timer
        // reduce time by 1sec in loop
            // if timeleft?
                // yes - continue
                // no - game over
        // butoon to reset
        // generate new Q&A


// If we click on answer box
    // If we are playing
        // correct?
            // yes
                // Increase score
                // show correct box for 1sec
            // no
                // show try again box

//--------X-------X-------X--------X--------X-------X--------//



var playing = false;
var score;
var action;
var timeremaining;
var correctAns;

// If we click on the start/reset
document.getElementById("startreset").onclick = function (){
    // If we are playing
    if (playing === true) {
        
        location.reload();        // reload page
    } 
    else {    // If we are not playing
        
        playing = true;
        score = 0;        // set score to 0

        document.getElementById("scorevalue").innerHTML = score;
    
        // show countdown timer
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over box
        hide("gameover");        

        // button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";

        //start countdown
        startCountdown();

        // generate new Q&A
        generateQA();


    }
}

// Clicking on the answer box
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    // check if we are playing
    if(playing == true){

        // 'this' gives the element we clicked
        if(this.innerHTML == correctAns){
            // correct answer
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            
            // show the "correct answer" box and hide "wrong" box
            hide("wrong");
            show("correct");
            // show for 1sec and then hide it
            setTimeout(function(){
                    hide("correct");
                }, 1000);

            // generate next question
            generateQA();
        }
        else{
            // wrong answer
            show("wrong");
            hide("correct");
            // show for 1sec and then hide it
            setTimeout(function(){
                hide("wrong");
            }, 1000);
        }
    }
}
}
// If we click on answer box
    // If we are playing
        // correct?
            // yes
                // Increase score
                // show correct box for 1sec
            // no
                // show try again box


// functions

// start the counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;


        if(timeremaining == 0){     //game over
            // stop the counter
            stopCountdown();

            // pop up game over message
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game over!</p> <p>Your score is " + score + ".</p>";

            // hide countdown time if game is over
            hide("timeremaining");
            hide("correct");
            hide("wrong");

            //change mode to non playing mode
            playing = false;

            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}

// stop the counter
function stopCountdown(){
    clearInterval(action);
}

// hide an element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

// show an element
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers
function generateQA(){
    // random(): gives a number between 0 and 1.

    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());  
    correctAns = x*y;

    document.getElementById("question").innerHTML = x + "x" + y;

    // random position to place the correct answer
    var correctPosition = 1 + Math.round(3*Math.random());

    // fill one box with correct ans
    document.getElementById("box"+ correctPosition).innerHTML = correctAns; 


    // filling all boxes with different answers
    var answers = [correctAns];

    // fill other box with wrong answer
    for(i=1; i<=4; i++){
        if(i != correctPosition){
            // wrongAns = product of two random numbers
            var wrongAns;

            // wrongAns must not be equal to correctAns 
            do{
                wrongAns = (1 + Math.round(9*Math.random()) ) * (1 + Math.round(9*Math.random()));
            }while(answers.indexOf(wrongAns)>-1);
        
        document.getElementById("box" + i).innerHTML = wrongAns;
        answers.push(wrongAns);         
        }
    }
}