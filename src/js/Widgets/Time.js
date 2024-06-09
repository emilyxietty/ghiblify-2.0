import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { timeAtom, timePositionAtom } from "../../state/atoms";
import { useAtom } from "jotai";

function TimeWidget() {
  const [time, setTime] = useAtom(timeAtom);
  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));

  const dragHandler = (e, data) => {
    setTime({ ...time, xPos: data.x, yPos: data.y });
  };

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
    <Draggable
      bounds="parent"
      onStop={dragHandler}
      defaultPosition={{
        x: time.xPos,
        y: time.yPos,
      }}
    >
      <div className="Time widget_container title shadow">{`${currentTime}`}</div>
    </Draggable>
  );
}

export default TimeWidget;
