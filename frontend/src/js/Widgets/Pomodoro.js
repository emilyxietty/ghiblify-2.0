import { useAtom } from "jotai";
import React from "react";
import Draggable from "react-draggable";
import { pomodoroAtom } from "../../state/atoms";
import Timer from "./Pomodoro/Timer.js";

function PomodoroWidget() {
  const [pomodoro, setPomodoro] = useAtom(pomodoroAtom);

  const dragHandler = (e, data) => {
    if (pomodoro.toggle) {
      setPomodoro({ ...pomodoro, xPos: data.x, yPos: data.y });
    }
  };

  return (
    <Draggable
      bounds="parent"
      onStop={dragHandler}
      position={{
        x: pomodoro.xPos,
        y: pomodoro.yPos,
      }}
    >
      <div className="Pomodoro widget_container">{<Timer />}</div>
    </Draggable>
  );
}

export default PomodoroWidget;
