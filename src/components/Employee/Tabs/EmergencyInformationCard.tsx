import React, { useState } from "react";
import { useFormik } from "formik";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Card,
  MenuItem,
} from "@mui/material";
import { globalStyles } from "../../../styles/global";
import { styles } from "../../../styles/components/employeeEmergencyInformations";

interface EmergencyInformationCardInterface {
  title: any;
}
const EmergencyInformationCard = (props: EmergencyInformationCardInterface) => {
  const [isEditing, setIsEditing] = useState(true);
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
      contactPersonName: "",
      emergencyNumber: "",
      emailId: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      selectState: "",
      selectCity: "",
      postalCode: "",
    },
    // validationSchema: addEmployeeValidator,
    onSubmit: (values) => {
      console.log("values of emergency contact", values);
    },
  });

  const EditHandle = () => {
    setIsEditing(false);
  }
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* form fields started */}
        <Card {...styles.contactInformationCard}>
          {/* header Box */}
          <Box {...styles.parentBox}>
            <Typography variant="h5" {...styles.moduleTitle}>
              Emergency Contact {props.title}
            </Typography>
            <Box>
              {isEditing ? (<Button
                {...styles.parentBoxEditButton}
                variant="contained"
                type="submit"
                onClick={EditHandle}
              >
                <EditIcon {...styles.icon} /> Edit
              </Button>) :
                (<Button
                  {...styles.parentBoxSaveButton}
                  variant="contained"
                  type="submit"
                >
                  Save
                </Button>)
              }
            </Box>
          </Box>
          <Grid container columnSpacing={3} rowGap={3}>
            {/* Contact Person Name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="contactPersonName" {...styles.textFieldLabel}>
                  Contact Person Name
                </FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="contactPersonName"
                  value={values.contactPersonName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isEditing}
                  error={
                    touched.contactPersonName && errors.contactPersonName
                      ? true
                      : false
                  }
                  helperText={
                    touched.contactPersonName && errors.contactPersonName
                  }
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                  sx={{
                    "&.MuiInputBase-input": {
                      paddingTop: "7px",
                      border: "1px solid red",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            {/*   Emergency Number */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="emergencyNumber" {...styles.textFieldLabel}>
                  Emergency Number
                </FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="emergencyNumber"
                  value={values.emergencyNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isEditing}
                  error={
                    touched.emergencyNumber && errors.emergencyNumber
                      ? true
                      : false
                  }
                  helperText={touched.emergencyNumber && errors.emergencyNumber}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                  sx={{
                    "&.MuiInputBase-input": {
                      paddingTop: "7px",
                      border: "1px solid red",
                    },
                  }}
                />
              </FormControl>
            </Grid>
            {/* email id */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="emailId" {...styles.textFieldLabel}>
                  Email id
                </FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="emailId"
                  value={values.emailId}
                  onChange={handleChange}
                  disabled={isEditing}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}></Grid>
            {/*     Address Line 1*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="addressLine1" {...styles.textFieldLabel}>
                  Address Line 1
                </FormLabel>
                <TextField
                  name="addressLine1"
                  variant="filled"
                  size="small"
                  type={"text"}
                  value={values.addressLine1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isEditing}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/*     Address Line 2*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="addressLine2" {...styles.textFieldLabel}>
                  Address Line 2
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="addressLine2"
                  value={values.addressLine2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isEditing}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                // error={touched.abbr && errors.abbr ? true : false}
                // helperText={touched.abbr && errors.abbr}
                />
              </FormControl>
            </Grid>
            {/* country*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="country" {...globalStyles.textFieldLabel}>
                  Country*
                </FormLabel>
                <TextField
                  select
                  name="country"
                  variant="filled"
                  size="small"
                  id="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isEditing}
                  // error={touched.country && errors.country ? true : false}
                  // helperText={touched.country && errors.country}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="India">India</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/*stste*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="selectState" {...globalStyles.textFieldLabel}>
                  Select state*
                </FormLabel>
                <TextField
                  select
                  name="selectState"
                  variant="filled"
                  size="small"
                  id="selectState"
                  value={values.selectState}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isEditing}
                  // error={
                  //   touched.selectState && errors.selectState ? true : false
                  // }
                  // helperText={touched.selectState && errors.selectState}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="Maharastra">Maharastra</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* city */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="selectCity" {...globalStyles.textFieldLabel}>
                  Select City*
                </FormLabel>
                <TextField
                  select
                  name="selectCity"
                  variant="filled"
                  size="small"
                  id="selectCity"
                  value={values.selectCity}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  disabled={isEditing}
                  // error={touched.selectCity && errors.selectCity ? true : false}
                  // helperText={touched.selectCity && errors.selectCity}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="Nagpur">Nagpur</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/*  Postal Code*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="postalCode" {...styles.textFieldLabel}>
                  Postal Code
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="text"
                  name="postalCode"
                  value={values.postalCode}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  disabled={isEditing}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Card>
      </form>
    </Box>
  );
};

export default EmergencyInformationCard;
