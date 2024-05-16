import React from 'react';

function DateWidget() {
  // Creating an instance of Intl.DateTimeFormat with weekday and day options
  const currentDate = new Date();
  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  };

  // Format the day to add "st", "nd", "rd", or "th"
  const formatDayWithSuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1: return `${day}st`;
      case 2: return `${day}nd`;
      case 3: return `${day}rd`;
      default: return `${day}th`;
    }
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);
  const daySuffix = formatDayWithSuffix(currentDate.getDate());
  const formattedDateWithSuffix = formattedDate.replace(/\d+/, daySuffix);

  return <div className='Date subtitle shadow'>{`${formattedDateWithSuffix}`}</div>;
}

export default DateWidget;

// export default DateWidget;
