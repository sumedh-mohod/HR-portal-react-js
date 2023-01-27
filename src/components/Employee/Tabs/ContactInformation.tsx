import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  MenuItem,
  Card,
} from "@mui/material";
import EditIcon from "../../Icons/EditIcon";
import { globalStyles } from "../../../styles/global";
import { styles } from "../../../styles/components/ContactInformationEmployee";
import EmployeeEditIcon from "../../Icons/EmployeeEditIcon";

const ContactInformation = () => {
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
      primaryNumber: "",
      secondaryNumber: "",
      emailID: "",
      secondaryEmailID: "",
      permanent_address_addressLine1: "",
      permanent_address_addressLine2: "",
      permanent_address_country: "",
      permanent_address_selectState: "",
      permanent_address_selectCity: "",
      permanent_address_postalCode: "",
      communication_address_addressLine1: "",
      communication_address_addressLine2: "",
      communication_address_country: "",
      communication_address_selectState: "",
      communication_address_selectCity: "",
      communication_address_postalCode: "",
    },
    // validationSchema: addCompanyValidator,
    onSubmit: (values) => {
      console.log("values", values)
    },
  });

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* addresess */}
        <Card  {...styles.contactInformationCard}>
          <Box
            {...styles.contactTitleBox}
          >
            <Typography variant="h5"
              {...styles.contactTitle}
            >
              Contact Details
            </Typography>
            <Box>
              <Button
                {...styles.contactDetailsBtn}
                variant="contained"
                type="submit"
              // onClick={EditHandle}
              >
                <EmployeeEditIcon />
                <Typography sx={{ ml: 1 }}>Edit</Typography>
              </Button>
            </Box>
          </Box>
          <Grid container columnSpacing={3} rowGap={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="primaryNumber" {...globalStyles.textFieldLabel}>
                  Primary Number
                </FormLabel>
                <TextField
                  name="primaryNumber"
                  variant="filled"
                  size="small"
                  type={"text"}
                  value={values.primaryNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="secondaryNumber"  {...globalStyles.textFieldLabel}>
                  Secondary Number
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="secondaryNumber"
                  value={values.secondaryNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="emailID"  {...globalStyles.textFieldLabel}>
                  Email ID
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="emailID"
                  value={values.emailID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="secondaryEmailID"  {...globalStyles.textFieldLabel}>
                  Secondary Email ID
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="secondaryEmailID"
                  value={values.secondaryEmailID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box
            {...styles.contactTitleBox}
          >
            <Typography variant="h5"
              {...styles.contactTitleAddress}
            >
              Permanent Address
            </Typography>
            <Box>
            </Box>
          </Box>
          <Grid container columnSpacing={3} rowGap={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="permanent_address_addressLine1"  {...globalStyles.textFieldLabel}>
                  Address Line 1
                </FormLabel>
                <TextField
                  name="permanent_address_addressLine1"
                  variant="filled"
                  size="small"
                  type={"text"}
                  value={values.permanent_address_addressLine1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="permanent_address_addressLine2"  {...globalStyles.textFieldLabel}>
                  Address Line 2
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="permanent_address_addressLine2"
                  value={values.permanent_address_addressLine2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                // error={touched.abbr && errors.abbr ? true : false}
                // helperText={touched.abbr && errors.abbr}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="permanent_address_country" {...globalStyles.textFieldLabel}>
                  Country*
                </FormLabel>
                <TextField
                  select
                  name="permanent_address_country"
                  variant="filled"
                  size="small"
                  id="country"
                  value={values.permanent_address_country}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel
                  id="permanent_address_selectState"
                  {...globalStyles.textFieldLabel}
                >
                  Select state*
                </FormLabel>
                <TextField
                  select
                  name="permanent_address_selectState"
                  variant="filled"
                  size="small"
                  id="selectState"
                  value={values.permanent_address_selectState}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel
                  id="selectCity"
                  {...globalStyles.textFieldLabel}
                >
                  Select City*
                </FormLabel>
                <TextField
                  select
                  name="permanent_address_selectCity"
                  variant="filled"
                  size="small"
                  id="permanent_address_selectCity"
                  value={values.permanent_address_selectCity}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="permanent_address_postalCode"  {...globalStyles.textFieldLabel}>
                  Postal Code
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="text"
                  name="permanent_address_postalCode"
                  value={values.permanent_address_postalCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box
            {...styles.contactTitleBox}
          >
            <Typography variant="h5"
              {...styles.contactTitleAddress}
            >
              Communication Address
            </Typography>
            <Box>
            </Box>
          </Box>
          <Grid container columnSpacing={3} rowGap={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="communication_address_addressLine1"  {...globalStyles.textFieldLabel}>
                  Address Line 1
                </FormLabel>
                <TextField
                  name="communication_address_addressLine1"
                  variant="filled"
                  size="small"
                  type={"text"}
                  value={values.communication_address_addressLine1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="communication_address_addressLine2"  {...globalStyles.textFieldLabel}>
                  Address Line 2
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="communication_address_addressLine2"
                  value={values.communication_address_addressLine2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                // error={touched.abbr && errors.abbr ? true : false}
                // helperText={touched.abbr && errors.abbr}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="communication_address_country" {...globalStyles.textFieldLabel}>
                  Country*
                </FormLabel>
                <TextField
                  select
                  name="communication_address_country"
                  variant="filled"
                  size="small"
                  id="country"
                  value={values.communication_address_country}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel
                  id="communication_address_selectState"
                  {...globalStyles.textFieldLabel}
                >
                  Select state*
                </FormLabel>
                <TextField
                  select
                  name="communication_address_selectState"
                  variant="filled"
                  size="small"
                  id="selectState"
                  value={values.communication_address_selectState}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel
                  id="communication_address_selectCity"
                  {...globalStyles.textFieldLabel}
                >
                  Select City*
                </FormLabel>
                <TextField
                  select
                  name="communication_address_selectCity"
                  variant="filled"
                  size="small"
                  id="selectCity"
                  value={values.communication_address_selectCity}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="communication_address_postalCode"  {...globalStyles.textFieldLabel}>
                  Postal Code
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="text"
                  name="communication_address_postalCode"
                  value={values.communication_address_postalCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
    </Box >
  );
};

export default ContactInformation;
