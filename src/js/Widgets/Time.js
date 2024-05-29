import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import Dragger from "../dragger.js";

function TimeWidget() {
  const [timePosition, dragHandler] = Dragger({ x: 0, y: 0 }, "Time");
  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes}`; // Remove AM/PM
  }

  return (
    <Draggable bounds="parent" onStop={dragHandler}>
      <div className="Time widget_container title shadow">{`${currentTime}`}</div>
    </Draggable>
  );
}

export default TimeWidget;
