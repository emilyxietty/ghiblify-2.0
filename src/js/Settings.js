import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  Button,
  Modal,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useAtom } from "jotai";
import {
  avatarAtom,
  dateAtom,
  infoAtom,
  timeAtom,
  avatarAtomDefault,
  dateAtomDefault,
  infoAtomDefault,
  timeAtomDefault,
} from "../state/atoms";

import "../css/App.css";
import "../css/Settings.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SettingsModal = () => {
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmOpen}
              sx={{ mt: 2 }}
            >
              Confirm Action
            </Button>
          </Typography>
        </Box>
      </Modal>
      <Dialog open={confirmOpen} onClose={() => handleConfirmClose(false)}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleConfirmClose(true)} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SettingsModal;
