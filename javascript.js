

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
// If we click on the start/reset
document.getElementById("startreset").onclick = function (){
    // If we are playing
    if (playing === true) {
        location.reload();        // reload page
    } else {    // If we are not playing
        playing = true;
        score = 0;        // set score to 0
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("timeremaining").style.display = "block";        // show countdown timer
        
    }
}
        // reduce time by 1sec in loop
            // if timeleft?
                // yes - continue
                // no - game over

document.getElementById("startreset").innerHTML = "Reset Game";// butoon to reset
        // generate new Q&A


// If we click on answer box
    // If we are playing
        // correct?
            // yes
                // Increase score
                // show correct box for 1sec
            // no
                // show try again box