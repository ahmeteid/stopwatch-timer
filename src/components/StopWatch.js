import { useEffect, useState } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="contanier">
      <h1 className="">01-Stopwatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}m:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}s:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}ms</span>
      </div>
      <div>
        {running ? (
          <button onClick={() => setRunning(false)}>stop</button>
        ) : (
          <button onClick={() => setRunning(true)}>start</button>
        )}
        <button onClick={() => setTime(0)}>reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
