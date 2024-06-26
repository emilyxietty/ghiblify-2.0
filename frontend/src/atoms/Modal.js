import { Box, Modal as MuiModal } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
// import "./Modal.css";

const Modal = ({ isVisible, hideModal, children, ...props }) => {
  return (
    <MuiModal
      open={isVisible}
      onClose={hideModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...props}
    >
      <Box className="modal-box">{children}</Box>
    </MuiModal>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
