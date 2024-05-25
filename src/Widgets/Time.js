import React, { useEffect, useState } from "react";
// import './Widget.css';
import Draggable from "react-draggable";

function TimeWidget() {

  const [timePosition, setTimePosition] = useState({ x: 0, y: 0 });

  const dragHandler = (e, data) => {
    setTimePosition({ x: data.x, y: data.y });
    console.log("New position:", { x: data.x, y: data.y });
  };

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
