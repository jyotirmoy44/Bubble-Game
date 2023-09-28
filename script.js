let timer = 60;
let score = 0;
let numHit = 0;

function newScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function newHit() {
    numHit = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = numHit;
}

function makeBubble() {
    let clutter = "";

for (let i = 1; i <= 162; i++) {
  let bubble = Math.floor(Math.random() * 10)
  clutter += `<div class="bubble">${bubble}</div>`;
}

document.querySelector("#pBottom").innerHTML = clutter;
}


function runTimer() {
   
   let timerInterval = setInterval(function() {

        if (timer > 0) {
        timer--;
        document.querySelector("#timerValue").textContent = timer;
        }
        else {
            clearInterval(timerInterval);
            document.querySelector("#pBottom").innerHTML = `<h1>Game Over</h1>`;
        }
        
    }, 1000);
}

document.querySelector("#pBottom").addEventListener("click", function(details) {
    let clickedNumber = Number(details.target.textContent);
    if (clickedNumber === numHit) {
        newScore();
        makeBubble();
        newHit();
    }
});

newHit();
runTimer();
makeBubble();
newScore();