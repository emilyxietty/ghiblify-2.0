import React, { useState } from "react";
import Draggable from "react-draggable";

function DateWidget() {
  // Creating an instance of Intl.DateTimeFormat with weekday and day options

  const [datePosition, setDatePosition] = useState({ x: 0, y: 0 });

  const dragHandler = (e, data) => {
    setDatePosition({ x: data.x, y: data.y });
    console.log("New date position:", { x: data.x, y: data.y });
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
    <Draggable bounds="parent" onStop={dragHandler}>
      <div className="Date widget_container subtitle shadow">{`${formattedDateWithSuffix}`}</div>
    </Draggable>
  );
}

export default DateWidget;

// export default DateWidget;
