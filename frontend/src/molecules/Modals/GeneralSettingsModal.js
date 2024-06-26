import Button from "../../atoms/Buttons/Button";
import Modal from "../../atoms/Modal";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
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
} from "../../state/atoms";

const GeneralSettingsModal = ({ type, isVisible, hideModal }) => {
  const [avatar, setAvatar] = useAtom(avatarAtom);
  const [date, setDate] = useAtom(dateAtom);
  const [info, setInfo] = useAtom(infoAtom);
  const [time, setTime] = useAtom(timeAtom);
  const [pomodoro, setPomodoro] = useAtom(pomodoroAtom);
  const [confirmOpen, setConfirmOpen] = useState(false);

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
      <Modal isVisible={isVisible} hideModal={hideModal}>
        <Button type="close" buttonText="Close" toggleVisibility={hideModal} />
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
        </Typography>
        <Button
          //   type="custom"
          variant="contained"
          // color="primary"
          onClick={handleConfirmOpen}
          // sx={{ mt: 2 }}
          //   buttonText="Reset To Default Settings"
        >
          Reset To Default Settings
        </Button>
      </Modal>
      <Dialog open={confirmOpen} onClose={() => handleConfirmClose(false)}>
        <DialogTitle>Danger</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleConfirmClose(false)}
            variant="contained"
            // color="primary"
          >
            No
          </Button>
          <Button
            onClick={() => handleConfirmClose(true)}
            variant="contained"
            // color="primary"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GeneralSettingsModal;
