import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    if (getHours > 0) {
      return `${getHours}:${getMinutes}:${getSeconds}`;
    } else {
      return `${getMinutes}:${getSeconds}`;
    }
  };

  return (
    <div className="timer-container">
      <h1 className="timer-title">Timer</h1>
      <div className="timer-display">{formatTime(time)}</div>
      <div className="timer-controls">
        <button className="timer-button start-pause" onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button className="timer-button reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;