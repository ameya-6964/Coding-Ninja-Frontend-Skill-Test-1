const mili = document.getElementById("ms");
const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hr");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

//! Event Listeners
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

//! Global Default Variables
let hour = 0;
let minute = 0;
let second = 0;
let miliSecond = 0;
let isRunning = false;

//! Start Function
function start() {
  isRunning = true;
  startButton.classList.add("disabled");
  stopWatch();
}

//! Stop Function
function stop() {
  isRunning = false;
  startButton.classList.remove("disabled");
}
//! Reset Function
function reset() {
  isRunning = false;
  startButton.classList.remove("disabled");
  hour = 0;
  minute = 0;
  second = 0;
  miliSecond = 0;
  hr.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  mili.innerHTML = "0";
}

//! Main Stopwatch Function
function stopWatch() {
  if (isRunning == true) {
    miliSecond++;
    if (miliSecond == 10) {
      second++;
      miliSecond = 0;
    }
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    let hrString = hour;
    let minString = minute;
    let secondString = second;
    let miliSecondString = miliSecond;
    if (hour < 10) {
      hrString = "0" + hrString;
    }
    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secondString = "0" + secondString;
    }

    mili.innerHTML = miliSecondString;
    sec.innerHTML = secondString;
    min.innerHTML = minString;
    hr.innerHTML = hrString;
    setTimeout("stopWatch()", 100);
  }
}
