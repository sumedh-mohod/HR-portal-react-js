import React from "react";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import { globalStyles } from "styles/global";
import { styles } from "styles/components/addVendor";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

const AddContact = ({
  values,
  index,
  handleAddContactGlobal,
  handleRemoveContactGlobal,
  handleSubmitContactGlobal,
}: {
  values: any;
  index: any;
  handleAddContactGlobal: any;
  handleRemoveContactGlobal: any;
  handleSubmitContactGlobal: any;
}) => {
  console.log("partersssssssssssssssssss", values[0].value);
  return (
    <>
      {/* name */}
      <Grid item xs={12} md={6} lg={3}>
        <FormControl fullWidth>
          <FormLabel id="name" {...globalStyles.textFieldLabel}>
            Name
          </FormLabel>
          <TextField
            variant="filled"
            size="small"
            type={"text"}
            name="name"
            InputProps={{
              disableUnderline: true,
              style: { ...globalStyles.textField },
            }}
          />
        </FormControl>
      </Grid>
      {/* email id */}
      <Grid item xs={12} md={6} lg={3}>
        <FormControl fullWidth>
          <FormLabel id="email_id" {...globalStyles.textFieldLabel}>
            Email id
          </FormLabel>
          <TextField
            variant="filled"
            size="small"
            type={"email"}
            name="email_id"
            InputProps={{
              disableUnderline: true,
              style: { ...globalStyles.textField },
            }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6} lg={3}>
        <FormControl fullWidth>
          <FormLabel id="contact" {...globalStyles.textFieldLabel}>
            Contact
          </FormLabel>
          <TextField
            variant="filled"
            size="small"
            type={"phone"}
            name="contact"
            InputProps={{
              disableUnderline: true,
              style: { ...globalStyles.textField },
            }}
          />
        </FormControl>
      </Grid>
      {/* buttons add or remove */}
      <Grid item xs={12} md={6} lg={3}>
        <Box sx={{ display: "flex", justifyContent: "baseline" }}>
          <CheckIcon
            {...styles.checkIcon}
            onClick={() => {
              handleSubmitContactGlobal(index);
            }}
          />
          <CloseIcon
            {...styles.closeIcon}
            onClick={() => {
              handleRemoveContactGlobal(index);
            }}
          />
          {values.length - 1 === index ? (
            <Button {...styles.addButton} onClick={handleAddContactGlobal}>
              <AddIcon fontSize="small" {...styles.addIcon} />
              <Typography sx={{ fontSize: "small" }}>Add</Typography>
            </Button>
          ) : null}
        </Box>
      </Grid>
    </>
  );
};

export default AddContact;
