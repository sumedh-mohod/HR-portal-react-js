import React, { useRef } from "react";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

import Modal from "@mui/material/Modal";

import Divider from "@mui/material/Divider";

import CloseIcon from "@mui/icons-material/Close";

import Grid from "@mui/material/Grid";

import FormLabel from "@mui/material/FormLabel/FormLabel";

import TextField from "@mui/material/TextField";

import FormControl from "@mui/material/FormControl/FormControl";

import { TextareaAutosize } from "@mui/base";

import { globalStyles } from "../../../styles/global";

import { styles } from "../../../styles/components/organizationData";

export default function AddOrganisationData({
  handleAddClose,

  addOpen,
}: {
  handleAddClose: any;
  addOpen: any;
}) {
  const inputRef: any = useRef(null);
  const handleClick = () => {
    // open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (fileObj) {
      // setFieldValue("logo", fileObj.name);
    }
    //  reset file input
    event.target.value = null;

    //  can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
  return (
    <div>
      <Modal
        open={addOpen}
        onClose={handleAddClose}
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
              Add Data
            </Typography>

            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleAddClose} />
          </Box>

          <Divider />

          <Box sx={{ p: 2 }}>
            <Grid container spacing={2} rowGap={3}>
              <Grid item xs={9} md={9} lg={9}>
                <FormControl fullWidth>
                  <FormLabel id="logo" {...globalStyles.textFieldLabel}>
                  Upload PDF (Max 5 Mbps)
                  </FormLabel>
                  <input
                    name="logo"
                    style={{ display: "none" }}
                    ref={inputRef}
                    type="file"
                    onChange={handleFileChange}
                  />
                  <TextField
                    variant="filled"
                    size="small"
                    {...styles.logoTextfield}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                      endAdornment: (
                        <Button
                          onClick={handleClick}
                          size="small"
                          {...styles.selectFileButton}
                        >
                          Select File
                        </Button>
                      ),
                    }}
                  ></TextField>
                </FormControl>
              </Grid>
              <Grid item xs={3} md={3} lg={3}>
                <Button
                  {...styles.parentBoxUploadButton}
                  variant="contained"
                  type="submit"
                >
                  Upload
                </Button>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", marginTop:"100px" }}
                >
                  <Button {...styles.parentBoxCancleButton} variant="contained" onClick={handleAddClose}>
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
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
