const watchObj = new StopWatch();
let displayTimerID = null;

function getHourElement() {
  return document.getElementById("hour");
}
function getMinutesElement() {
  return document.getElementById("minutes");
}
function getSecondsElement() {
  return document.getElementById("seconds");
}
function getStartButtonElement() {
  return document.getElementById("startButton");
}
function getStopButtonElement() {
  return document.getElementById("stopButton");
}

function displayTime() {
  let ss =
    watchObj.seconds < 10 ? `0${watchObj.seconds}` : `${watchObj.seconds}`;
  let mm =
    watchObj.minutes < 10 ? `0${watchObj.minutes}` : `${watchObj.minutes}`;
  let hh = watchObj.hour < 10 ? `0${watchObj.hour}` : `${watchObj.hour}`;

  console.log("displaying time");

  getSecondsElement().innerHTML = ss;
  getMinutesElement().innerHTML = mm;
  getHourElement().innerHTML = hh;
}

function start() {
  console.log("start is clicked");
  watchObj.startWatch();
  displayTimerID = setInterval(displayTime, 1000);
  getStartButtonElement().disabled = true;
  getStopButtonElement().disabled = false;
  getStartButtonElement().classList.add("not-allowed");
  getStopButtonElement().classList.remove("not-allowed");
}

function stop() {
  console.log("stop is clicked");
  watchObj.stopWatch();
  clearInterval(displayTimerID);
  getStartButtonElement().disabled = false;
  getStopButtonElement().disabled = true;
  getStopButtonElement().classList.add("not-allowed");
  getStartButtonElement().classList.remove("not-allowed");
}

function reset() {
  console.log("reset is clicked");
  watchObj.resetWatch();
  clearInterval(displayTimerID); //if reset is clicked while running
  getStartButtonElement().disabled = false;
  getStopButtonElement().disabled = true;
  getStopButtonElement().classList.add("not-allowed");
  getStartButtonElement().classList.remove("not-allowed");
  getHourElement().innerHTML = "00";
  getMinutesElement().innerHTML = "00";
  getSecondsElement().innerHTML = "00";
}
