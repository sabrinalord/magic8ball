/*
Sabrina Lord Magic 8 ball
*
*
*/


var timeoutInMiliseconds = 20000;
var timeoutId; 
const ball = document.querySelector('.ball')
const whiteCircle = document.querySelector('.white_circle')
const answers = document.querySelector('.answers')
const results = [ "Make it simple, but significant.", 
				         "Every step makes a footprint.",
                   "Don't fear growing slowly, be afraid of standing still.", 
				     "Design is not just what it looks like and feels like. Design is how it works.",
                   "You will have a wonderful day!", 
				 "Design can be art. Design can be aesthetics. ",
				 "Accessible design is good design.",
				       "Digital design is like painting, except the paint never dries."];
		


ball.addEventListener('click', predictFuture)


function predictFuture() {

startTimer() 
//shake 8 ball

  $( ".ball" ).effect( "shake", {times:3}, 1000 );
let randomNumber = Math.floor(Math.random() * 6)
whiteCircle.classList.add('hide');
answers.innerHTML = "<div class = 'text'>" + results[randomNumber] + "</div>";	
	
}


 //set inactivity timer
function startTimer() { 
    // window.setTimeout returns an Id that can be used to start and stop a timer
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}
	
function doInactive() {
	whiteCircle.classList.remove('hide');
}

