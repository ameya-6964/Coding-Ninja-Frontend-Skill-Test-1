// Selecting DOM elements
const mili = document.getElementById("ms");
const sec = document.getElementById("sec");
const min = document.getElementById("min");
const hr = document.getElementById("hr");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

// Adding event listeners
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

// Variables to store time values
let hour = 0;
let minute = 0;
let second = 0;
let miliSecond = 0;

// Flag to indicate if timer is running
let isRunning = false;

// Start the timer
function start() {
  isRunning = true;
  startButton.classList.add("disabled");

  // Call the stopWatch function
  stopWatch();
}

// Pause the timer
function stop() {
  isRunning = false;
  startButton.classList.remove("disabled");
}

// Reset the timer
function reset() {
  isRunning = false;
  startButton.classList.remove("disabled");

  // Reset time values
  hour = 0;
  minute = 0;
  second = 0;
  miliSecond = 0;

  // Update DOM elements
  updateTimeDisplay();
}

// Main timer function
function stopWatch() {
  if (isRunning) {
    // Increment time values
    miliSecond++;
    if (miliSecond === 10) {
      second++;
      miliSecond = 0;
    }
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
      second = 0;
    }

    // Format and update DOM elements
    updateTimeDisplay();

    // Repeat every 100 milliseconds
    setTimeout(stopWatch, 100);
  }
}

// Update DOM with formatted time
function updateTimeDisplay() {
  let formattedHour = formatNumber(hour);
  let formattedMinute = formatNumber(minute);
  let formattedSecond = formatNumber(second);
  let formattedMiliSecond = miliSecond;

  mili.innerHTML = formattedMiliSecond;
  sec.innerHTML = formattedSecond;
  min.innerHTML = formattedMinute;
  hr.innerHTML = formattedHour;
}

// Add leading zero
function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}
