import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import './Settings.css';


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
      <Button onClick={handleOpen} startIcon={<SettingsIcon/>} className="light button" size="large"></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="settings-modal-title"
        aria-describedby="settings-modal-description"
      >
        <Box className='settings-modal-container'>
          <Typography id="settings-modal-title" variant="h6" component="h2">
            Settings
          </Typography>
          <Typography id="settings-modal-description" sx={{ mt: 2 }}>
            Insert Settings content here later
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SettingsModal;
