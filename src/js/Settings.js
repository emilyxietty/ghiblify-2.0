import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { settingsAtom } from "../state/atoms";
import "../css/App.css";
import "../css/Settings.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SettingsModal = () => {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useAtom(settingsAtom);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (setting) => (e) => {
    setSettings({ ...settings, [setting]: e.target.checked });
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
                    checked={settings.avatar}
                    onChange={handleCheckboxChange("avatar")}
                  />
                }
                label="Avatar"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={settings.date}
                    onChange={handleCheckboxChange("date")}
                  />
                }
                label="Date"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={settings.info}
                    onChange={handleCheckboxChange("info")}
                  />
                }
                label="Info"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={settings.pomodoro}
                    onChange={handleCheckboxChange("pomodoro")}
                  />
                }
                label="Pomodoro"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={settings.time}
                    onChange={handleCheckboxChange("time")}
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
