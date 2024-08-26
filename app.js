let timer = 60;
let score = 0;

let hitRn = 0;

function increseScore() {
    score += 10;
    document.querySelector("#scoreNum").textContent = score;
}

function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRn;

}
function makeBubble() {
    let clutter = "";

    for (let i = 1; i <= 100; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class ="bubble">${rn}</div>`;
    }

    document.querySelector(".pBottom").innerHTML = clutter;

}

function runTimer() {
    let timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }

        else {
            clearInterval(timerInterval);

            document.querySelector(".pBottom").innerHTML = `<h1>Game Over....</h1><h1>You have Scored : ${score}</h1>`;
        }

    }, 1000);
}

document.querySelector(".pBottom").addEventListener("click", function (dets) {
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitRn) {
        increseScore();
        makeBubble();
        getNewHit();
    }

})

runTimer();

makeBubble();

getNewHit();
