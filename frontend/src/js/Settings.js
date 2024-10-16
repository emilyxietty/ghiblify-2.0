import SettingsIcon from "@mui/icons-material/Settings";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";
import { useAtom } from "jotai";
import React, { useState } from "react";
import {
  avatarAtom,
  avatarAtomDefault,
  dateAtom,
  dateAtomDefault,
  infoAtom,
  infoAtomDefault,
  pomodoroAtom,
  pomodoroAtomDefault,
  timeAtom,
  timeAtomDefault,
} from "../state/atoms";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import "../css/App.css";
import "../css/Settings.css";

const SettingsModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [avatar, setAvatar] = useAtom(avatarAtom);
  const [date, setDate] = useAtom(dateAtom);
  const [info, setInfo] = useAtom(infoAtom);
  const [time, setTime] = useAtom(timeAtom);
  const [pomodoro, setPomodoro] = useAtom(pomodoroAtom);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  };

  const handleConfirmClose = (confirm) => {
    setConfirmOpen(false);
    if (confirm) {
      // Reset to default values
      setAvatar(avatarAtomDefault);
      setDate(dateAtomDefault);
      setInfo(infoAtomDefault);
      setTime(timeAtomDefault);
      setPomodoro(pomodoroAtomDefault);
    }
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={pomodoro.toggle}
                    onChange={handleCheckboxChange(setPomodoro, pomodoro)}
                  />
                }
                label="Pomodoro"
              />
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmOpen}
              sx={{ mt: 2 }}
            >
              Reset To Default Settings
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Dialog open={confirmOpen} onClose={() => handleConfirmClose(false)}>
        <DialogTitle>Danger</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmClose(false)} color="primary">
            No
          </Button>
          <Button onClick={() => handleConfirmClose(true)} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SettingsModal;
