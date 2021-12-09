// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let stopButton = document.getElementById("stop-button");

let i = 0;
let count;

let countUp = function() {
    count = setTimeout(function (){
        seconds.innerHTML = i.toString();
        i++;
        countUp();
    }, 1000);
};

let stopCountUp = function() {
    clearInterval(count);
};

countUp();
// How can you make it stop counting?
stopButton.addEventListener("click", stopCountUp);

