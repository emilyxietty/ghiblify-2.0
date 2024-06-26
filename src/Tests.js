// import bg from "../assets/bg1.jpg";
import React, { useState } from "react";

import Button from "./atoms/Buttons/Button";
import GeneralSettingsModal from "./molecules/Modals/GeneralSettingsModal";
import "./style/app.css";

function Tests() {
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
        type="settings"
        buttonText="Open Settings"
        toggleVisibility={handleOpen}
      />
      <GeneralSettingsModal
        type="general"
        isVisible={open}
        hideModal={handleClose}
      />

      <Button
        type="submit"
        buttonText="Submit"
        // toggleVisibility={handleSubmit} // Assuming you have a handleSubmit function
      />
    </div>
  );
}

export default Tests;
