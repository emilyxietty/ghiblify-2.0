import React from "react";
import Draggable from "react-draggable";
import { useAtom } from "jotai";
import { dateAtom } from "../../state/atoms.js";

function DateWidget() {
  const [date, setDate] = useAtom(dateAtom);

  const dragHandler = (e, data) => {
    if (date.toggle) {
      setDate({ ...date, xPos: data.x, yPos: data.y });
    }
  };

  const currentDate = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  // Format the day to add "st", "nd", "rd", or "th"
  const formatDayWithSuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    currentDate
  );
  const daySuffix = formatDayWithSuffix(currentDate.getDate());
  const formattedDateWithSuffix = formattedDate.replace(/\d+/, daySuffix);

  return (
    <Draggable
      bounds="parent"
      onStop={dragHandler}
      position={{
        x: date.xPos,
        y: date.yPos,
      }}
    >
      <div className="Date widget_container subtitle shadow">{`${formattedDateWithSuffix}`}</div>
    </Draggable>
  );
}

export default DateWidget;
