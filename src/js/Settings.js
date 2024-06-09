import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { useAtom } from "jotai";
// import {
//   avatarAtom,
//   dateAtom,
//   infoAtom,
//   pomodoroAtom,
import { avatarAtom, dateAtom, infoAtom, timeAtom } from "../state/atoms";

import "../css/App.css";
import "../css/Settings.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SettingsModal = () => {
  const [open, setOpen] = React.useState(false);
  const [avatar, setAvatar] = useAtom(avatarAtom);
  const [date, setDate] = useAtom(dateAtom);
  const [info, setInfo] = useAtom(infoAtom);
  // const [pomodoro, setPomodoro] = useAtom(pomodoroAtom);
  const [time, setTime] = useAtom(timeAtom);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (setter, currentValue) => (event) => {
    setter({ ...currentValue, toggle: event.target.checked });
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        startIcon={<SettingsIcon />}
        className="light button"
        size="large"
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="settings-modal-title"
        aria-describedby="settings-modal-description"
      >
        <Box className="settings-modal-container">
          <Typography id="settings-modal-title" variant="h6" component="h2">
            Settings
          </Typography>
          <Typography id="settings-modal-description" sx={{ mt: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={avatar.toggle}
                    onChange={handleCheckboxChange(setAvatar, avatar)}
                  />
                }
                label="Avatar"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={date.toggle}
                    onChange={handleCheckboxChange(setDate, date)}
                  />
                }
                label="Date"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={info.toggle}
                    onChange={handleCheckboxChange(setInfo, info)}
                  />
                }
                label="Info"
              />
              {/* <FormControlLabel
                control={
                  <Checkbox
                    checked={pomodoro.toggle}
                    onChange={handleCheckboxChange(setPomodoro, pomodoro)}
                  />
                }
                label="Pomodoro"
              /> */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={time.toggle}
                    onChange={handleCheckboxChange(setTime, time)}
                  />
                }
                label="Time"
              />
            </FormGroup>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;
