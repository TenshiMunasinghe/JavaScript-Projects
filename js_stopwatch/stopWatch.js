function StopWatch() {
  'use strict';
  let running = false;
  let startTime = 0;
  let stopTime = 0;
  let duration = 0;

  this.start = function () {
    if (running) {
      throw new Error('Stop watch already started');
    } else {
      running = true;
      startTime = new Date();
    }
  };

  this.stop = function () {
    if (!running) {
      throw new Error('Stop watch already stopped');
    } else {
      running = false;
      stopTime = new Date();
      const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    }
  };

  this.reset = function () {
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    }
  });
}

const sw = new StopWatch();