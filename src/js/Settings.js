import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import "../css/App.css";
import "../css/Settings.css";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SettingsModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <FormControlLabel control={<Checkbox defaultChecked />} label="Avatar" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Date" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Info" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Pomodoro" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Time" />
            </FormGroup>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;
