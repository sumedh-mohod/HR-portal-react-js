import * as React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Modal,
  Divider,
  FormLabel,
  TextField,
  FormControl,
  TextareaAutosize,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { globalStyles } from "../../../styles/global";
import { styles } from "../../../styles/components/uploadLeavePolicy";

const UploadLeavePolicy = ({
  handleClose,
  open,
}: {
  handleOpen: any;
  handleClose: any;
  open: any;
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box {...styles.modalBox}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              {...styles.textField}
            >
              Upload Leave Policy
            </Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Grid container spacing={2} rowGap={3}>
              <Grid item xs={12} md={6} lg={6}>
                <FormControl fullWidth>
                  <FormLabel id="leaveType" {...styles.textFieldlable}>
                    Leave Type
                  </FormLabel>
                  <TextField
                    name="leaveType"
                    variant="filled"
                    size="small"
                    type={"text"}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <FormControl fullWidth>
                  <FormLabel id="days" {...styles.textFieldlable}>
                    Days
                  </FormLabel>
                  <TextField
                    name="days"
                    variant="filled"
                    size="small"
                    type={"text"}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <FormControl fullWidth>
                  <FormLabel id="description" {...styles.textFieldlable}>
                    Description
                  </FormLabel>
                  <TextareaAutosize minRows={5} maxRows={5} />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    {...styles.parentBoxCancleButton}
                    variant="contained"
                    onClick={handleClose}
                  >
                    Cancle
                  </Button>
                  <Button
                    {...styles.parentBoxSaveButton}
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default UploadLeavePolicy;
