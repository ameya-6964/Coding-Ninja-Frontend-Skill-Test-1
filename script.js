// Selecting DOM elements
const millisecondDisplay = document.getElementById("ms");
const secondDisplay = document.getElementById("sec");
const minuteDisplay = document.getElementById("min");
const hourDisplay = document.getElementById("hr");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Adding event listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

// Variables to store time values
let hour = 0;
let minute = 0;
let second = 0;
let miliSecond = 0;

// Flag to indicate if timer is running
let isRunning = false;

//This Will Add Disable Class To Stop And Reset Button
if (isRunning === false) {
  disableBtn();
}
// Start the timer
function start() {
  isRunning = true;
  startBtn.classList.add("disabled");
  //This Will Remove Disable Class To Stop And Reset Button
  removeDisableBtn();
  // Call the stopWatch function
  stopWatch();
}

// Pause the timer
function stop() {
  isRunning = false;
  startBtn.classList.remove("disabled");
}

// Reset the timer
function reset() {
  isRunning = false;
  disableBtn();
  startBtn.classList.remove("disabled");

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

  millisecondDisplay.innerHTML = formattedMiliSecond;
  secondDisplay.innerHTML = formattedSecond;
  minuteDisplay.innerHTML = formattedMinute;
  hourDisplay.innerHTML = formattedHour;
}

// Add leading zero
function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

// Function To Add Disable Class t0 Button Stop And Reset Button
function disableBtn() {
  stopBtn.classList.add("disabled");
  resetBtn.classList.add("disabled");
}
// Function To Remove Disable Class t0 Button Stop And Reset Button
function removeDisableBtn() {
  stopBtn.classList.remove("disabled");
  resetBtn.classList.remove("disabled");
}
