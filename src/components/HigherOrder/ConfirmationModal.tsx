import React from "react";
import {
  Box,
  Typography,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface ConfirmationModalInterface {
  open: boolean;
  handleClose: () => void;
  title: string;
  message: string;
}

const ConfirmationModal = (props: ConfirmationModalInterface) => {
  const { open, handleClose, title, message } = props;

  return (
    <Dialog
      open={open}
    //   onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} autoFocus>
          Confirrm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
