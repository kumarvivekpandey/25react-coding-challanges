import { useEffect, useState } from "react";
import "./style.css";

export default function Countdown() {
  const [counter, setCounter] = useState(false);
  const [timer, setTimer] = useState({ hours: "", minute: "", second: "" });
  const [intervalId, setIntervalId] = useState(null);
  const [paused, setPaused] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;
    setTimer((prevTimer) => ({
      ...prevTimer,
      [id]: value,
    }));
  }

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  function start() {
    if (
      timer.hours !== "" &&
      timer.minute !== "" &&
      timer.second !== "" &&
      parseInt(timer.hours) >= 0 &&
      parseInt(timer.minute) >= 0 &&
      parseInt(timer.second) >= 0
    ) {
      setCounter(true);
      const id = setInterval(() => {
        setTimer((prevTimer) => {
          let updatedHours = parseInt(prevTimer.hours);
          let updatedMinute = parseInt(prevTimer.minute);
          let updatedSecond = parseInt(prevTimer.second);

          if (
            updatedHours === 0 &&
            updatedMinute === 0 &&
            updatedSecond === 0
          ) {
            clearInterval(intervalId);
            setCounter(false);
            return prevTimer;
          }

          if (!paused) {
            if (updatedSecond === 0) {
              if (updatedMinute > 0) {
                updatedMinute--;
                updatedSecond = 59;
              } else {
                updatedHours--;
                updatedMinute = 59;
                updatedSecond = 59;
              }
            } else {
              updatedSecond--;
            }
          }

          return {
            hours: updatedHours.toString().padStart(2, "0"),
            minute: updatedMinute.toString().padStart(2, "0"),
            second: updatedSecond.toString().padStart(2, "0"),
          };
        });
      }, 1000);
      setIntervalId(id);
    }
  }

  function reset() {
    setCounter(false);
    setTimer({ hours: "", minute: "", second: "" });
    clearInterval(intervalId);
    setPaused(false);
  }

  function pause() {
    clearInterval(intervalId);
    setPaused(true);
  }

  function resume() {
    setPaused(false);
    clearInterval(intervalId); // Clear the interval first
    start(); // Then start with updated values
  }

  return (
    <div className="App">
      <h1 className="container">CountDown</h1>
      <div className="input-container">
        <input
          type="number"
          id="hours"
          value={timer.hours}
          onChange={handleChange}
          className="input"
          placeholder="HH"
        />
        <input
          type="number"
          id="minute"
          value={timer.minute}
          onChange={handleChange}
          className="input"
          placeholder="MM"
        />
        <input
          type="number"
          id="second"
          value={timer.second}
          onChange={handleChange}
          className="input"
          placeholder="SS"
        />
      </div>
      <div className="button-container">
        {counter ? (
          <>
            <button type="submit" onClick={pause} className="btn">
              Pause
            </button>
            <button type="submit" onClick={reset} className="btn">
              Reset
            </button>
          </>
        ) : (
          <button onClick={start} type="submit" className="btn">
            Start
          </button>
        )}
        {paused && (
          <button type="submit" onClick={resume} className="btn">
            Resume
          </button>
        )}
      </div>
    </div>
  );
}
