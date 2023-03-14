import React, { useEffect, useState } from "react";
import "./clock.scss";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = hours * 30 + minutes / 2;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  const hourStyle = { transform: `rotate(${hourDegrees}deg)` };
  const minuteStyle = { transform: `rotate(${minuteDegrees}deg)` };
  const secondStyle = { transform: `rotate(${secondDegrees}deg)` };

  return (
    <div className="clock">
      <div className="hand hours" style={hourStyle}></div>
      <div className="hand minutes" style={minuteStyle}></div>
      <div className="hand seconds" style={secondStyle}></div>
      <div className="point"></div>
      <div className="marker">
        <span className="marker__1"></span>
        <span className="marker__2"></span>
        <span className="marker__3"></span>
        <span className="marker__4"></span>
      </div>
    </div>
  );
};

export default Clock;
