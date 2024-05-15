import React, { useEffect, useState } from 'react';
// import './Widget.css';

function TimeWidget() {
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
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`; // Remove AM/PM
  }

  return <div className='Time title shadow'>{`${currentTime}`}</div>;
}

export default TimeWidget;
