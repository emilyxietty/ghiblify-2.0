import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button as MuiButton } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import React from "react";

// const Button = ({ type, buttonText = "", toggleVisibility }) => {
const Button = ({
  type,
  buttonText = "",
  toggleVisibility,
  children,
  ...props
}) => {
  const handleOpen = () => {
    toggleVisibility(true);
  };

  if (type === "settings") {
    return (
      <IconButton
        // color="primary"
        aria-label="settings"
        size="large"
        className="settings"
        name="settings"
        onClick={handleOpen}
      >
        <SettingsIcon fontSize="inherit" />
      </IconButton>
    );
  }

  if (type === "close") {
    return (
      <IconButton
        aria-label="close"
        size="large"
        className="close"
        name="close"
        onClick={toggleVisibility}
      >
        <CloseIcon fontSize="inherit" />
      </IconButton>
    );
  }

  if (type === "submit") {
    return (
      <MuiButton variant="contained" className="submit">
        <input
          type="submit"
          value={buttonText}
          className="submit"
          //   size="large"
        />
      </MuiButton>
    );
  } else {
    //   if (type === "custom") {
    return (
      <MuiButton variant="contained" className="custom" {...props}>
        {children}
      </MuiButton>
    );
  }
  //   else {
  // return null;
  //   }
};

export default Button;
