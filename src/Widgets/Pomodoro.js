import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const PomodoroWidget = () => {
  const [time, setTime] = useState(25 * 60); // Initial time (25 minutes)
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // Toggle between work and break times
      setIsWorkTime(prev => !prev);
      setTime(isWorkTime ? breakTime * 60 : workTime * 60);
    }

    return () => clearInterval(interval);
  }, [isRunning, time, isWorkTime, workTime, breakTime]);

  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsWorkTime(true);
    setTime(workTime * 60);
  };

  return (
    <div>
      <Typography variant="h4">{isWorkTime ? 'Work Time' : 'Break Time'}</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button variant="contained" color={isRunning ? 'secondary' : 'primary'} onClick={handleStartStop}>
            {isRunning ? 'Pause' : 'Start'}
          </Button>
          <Button variant="outlined" onClick={handleReset}>Reset</Button>
        </Grid>
        <Grid item>
          <TextField
            type="number"
            label="Work Time (minutes)"
            value={workTime}
            onChange={(e) => setWorkTime(e.target.value)}
            disabled={isRunning}
          />
        </Grid>
        <Grid item>
          <TextField
            type="number"
            label="Break Time (minutes)"
            value={breakTime}
            onChange={(e) => setBreakTime(e.target.value)}
            disabled={isRunning}
          />
        </Grid>
      </Grid>
      <CircularProgress
        variant="determinate"
        value={(time / (isWorkTime ? workTime * 60 : breakTime * 60)) * 100}
        size={200}
        thickness={2}
      />
      <Typography variant="h4">{`${Math.floor(time / 60)}:${('0' + (time % 60)).slice(-2)}`}</Typography>
    </div>
  );
};

export default PomodoroWidget;
