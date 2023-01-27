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
  handleConfirm: () => void;
  handleCancel: () => void;
  title: string;
  message: string;
}

const ConfirmationModal = (props: ConfirmationModalInterface) => {
  const { open, handleConfirm, handleCancel, title, message } = props;

  return (
    <Dialog
      open={open}
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
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleConfirm} autoFocus>
          Confirrm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
