function StopWatch() {
  let running = false;
  let hour = 0;
  let minutes = 0;
  let seconds = 0;
  let timer = null;
  Object.defineProperty(this, "hour", {
    get: function () {
      return hour;
    }
  });
  Object.defineProperty(this, "minutes", {
    get: function () {
      return minutes;
    }
  });
  Object.defineProperty(this, "seconds", {
    get: function () {
      return seconds;
    }
  });
  this.startWatch = function () {
    if (running) {
      console.log("Stop watch is already started");
      return;
    }
    running = true;
    timer = setInterval(() => {
      if (!running) {
        clearInterval(timer);
      }
      seconds++;
      if (seconds > 59) {
        seconds = 0;
        minutes++;
        if (minutes > 59) {
          minutes = 0;
          hour++;
        }
      }
      console.log(`${hour}:${minutes}:${seconds}`);
    }, 1000);
  };

  this.stopWatch = function () {
    if (!running) {
      console.log("Stop watch is already stopped");
      return false;
    }
    running = false;
    clearInterval(timer);
    return;
  };

  this.resetWatch = function () {
    hour = 0;
    minutes = 0;
    seconds = 0;
    running = false;
    clearInterval(timer); //if reset is clicked while running
    return;
  };
}
