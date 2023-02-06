import * as React from "react";
import { useFormik } from "formik";
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
import { globalStyles } from "styles/global";
import { styles } from "styles/components/uploadLeavePolicy";

const UploadLeavePolicy = ({
  handleClose,
  open,
}: {
  handleOpen: any;
  handleClose: any;
  open: any;
}) => {

  const {
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      leaveType: "",
      days: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log("values upload policy", values);
      handleClose();
    },
  });

  return (
    <Box>
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
            <form onSubmit={handleSubmit}>
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
                      value={values.leaveType}
                      onChange={handleChange}
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
                      value={values.days}
                      onChange={handleChange}
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
                    <TextareaAutosize
                      minRows={5}
                      maxRows={5}
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                    />
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
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default UploadLeavePolicy;
