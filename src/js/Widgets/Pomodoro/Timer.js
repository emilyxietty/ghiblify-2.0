import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Button, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import "../../../css/Settings.css";
import Controls from "./components/Controls/controls";
import Settings from "./components/Settings/settings";
import TimerDisplay from "./components/TimerDisplay/timerdisplay";
import timesUpSfx from "./sounds/timesUp.mp3";

const Timer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [settingsVisible, setSettingsVisible] = useState(false);
  const [timerMode, setTimerMode] = useState("pomo"); // options: pomo, short, long
  const [pomoLength, setPomoLength] = useState(25);
  const [shortLength, setShortLength] = useState(3);
  const [longLength, setLongLength] = useState(15);
  //   const [fontPref, setFontPref] = useState("kumbh"); // options: kumbh, roboto, space
  //   const [accentColor, setAccentColor] = useState("default"); // options: default, blue, purple
  const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("START");

  const [volume, setVolume] = useState(1);
  const [timesUp] = useSound(timesUpSfx, {
    volume: volume,
  });

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (secondsLeft === 0) {
        clearInterval(interval);
        setIsActive(false);
        setButtonText("");
        timesUp();
      }

      return () => clearInterval(interval);
    }
  }, [isActive, secondsLeft, timesUp]);

  const toggleSettingsVisibility = (event) => {
    setSettingsVisible(!settingsVisible);
  };

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  const calcPercentage = () => {
    if (timerMode === "pomo") {
      return (secondsLeft / (pomoLength * 60)) * 100;
    }
    if (timerMode === "short") {
      return (secondsLeft / (shortLength * 60)) * 100;
    }
    if (timerMode === "long") {
      return (secondsLeft / (longLength * 60)) * 100;
    }
  };

  return (
    <div className="Pomodoro light widget_container title">
      <Controls
        timerMode={timerMode}
        setTimerMode={setTimerMode}
        setSecondsLeft={setSecondsLeft}
        pomoLength={pomoLength}
        shortLength={shortLength}
        longLength={longLength}
        setIsActive={setIsActive}
        buttonText={buttonText}
        setButtonText={setButtonText}
        volume={volume}
      />
      <TimerDisplay
        timerMode={timerMode}
        percentage={calcPercentage()}
        timeLeft={formatTimeLeft(secondsLeft)}
        isActive={isActive}
        setIsActive={setIsActive}
        buttonText={buttonText}
        setButtonText={setButtonText}
        volume={volume}
        setVolume={setVolume}
      />
      <Button
        onClick={handleOpen}
        startIcon={<SettingsIcon />}
        className="light button"
        size="large"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="settings-modal-title"
        aria-describedby="settings-modal-description"
      >
        <Box className="settings-modal-container">
          <Settings
            visible={settingsVisible}
            pomoLength={pomoLength}
            setPomoLength={setPomoLength}
            shortLength={shortLength}
            setShortLength={setShortLength}
            longLength={longLength}
            setLongLength={setLongLength}
            closeSettings={handleClose}
            setSecondsLeft={setSecondsLeft}
            timerMode={timerMode}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Timer;
