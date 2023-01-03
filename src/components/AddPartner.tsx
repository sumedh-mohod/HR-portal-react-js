import React from "react";
import { useFormik } from "formik";
import { addPartnerValidator } from "../utils/validations/auth";
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
import { styles } from "../styles/components/addPartner";
// import { useAppDispatch} from "../store/hooks";
// import { addcompany } from "../store/reducers/companies/companies";

const AddPartner = () => {
  //   const dispatch = useAppDispatch();
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
      logo: "",
      partnerName: "",
      addressLine1: "",
      addressLine2: "",
      selectCity: "",
      selectState: "",
      country: "",
      postalCode: "",
      partnerOnBoardDate: "",
      pointofContactOrangebits: "",
      pointofContactPartrner1: "",
      pointofContactPartrner2: "",
      pointofContactPartrner3: "",
      taxID: "",
    },
    validationSchema: addPartnerValidator,
    onSubmit: (values) => {
      console.log("values of add partner", values);
    },
  });

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* header Box */}
        <Box {...styles.parentBox}>
          <Typography variant="h5">Add Partner</Typography>
          <Box>
            <Button {...styles.parentBoxCancleButton} variant="contained">
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
        </Box>
        {/* form fields started */}
        <Card {...styles.card}>
          <Grid container spacing={2}>
            {/* uplaod Logo */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="logo">Upload Logo*</FormLabel>
                <TextField
                  name="logo"
                  variant="filled"
                  size="small"
                  type={"file"}
                  value={values.logo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.logo && errors.logo ? true : false}
                  helperText={touched.logo && errors.logo}
                />
              </FormControl>
            </Grid>
            {/* partner name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="partnerName">Partner Name*</FormLabel>
                <TextField
                  select
                  variant="filled"
                  size="small"
                  name="partnerName"
                  value={values.partnerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.partnerName && errors.partnerName ? true : false
                  }
                  helperText={touched.partnerName && errors.partnerName}
                >
                  <MenuItem value="orangebits india">orangebits india</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* address line 1 */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="addressLine1">Address Line 1</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="addressLine1"
                  value={values.addressLine1}
                  onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                  //   helperText={touched.addressLine1 && errors.addressLine1}
                />
              </FormControl>
            </Grid>
            {/* address line 2 */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="addressLine2">Address Line 2</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="addressLine2"
                  value={values.addressLine2}
                  onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={touched.addressLine2 && errors.addressLine2 ? true : false}
                  //   helperText={touched.addressLine2 && errors.addressLine2}
                />
              </FormControl>
            </Grid>
            {/* select city */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="selectCity">Select City*</FormLabel>
                <TextField
                  select
                  name="selectCity"
                  variant="filled"
                  size="small"
                  id="selectCity"
                  value={values.selectCity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.selectCity && errors.selectCity ? true : false}
                  helperText={touched.selectCity && errors.selectCity}
                >
                  <MenuItem value="Nagpur">Nagpur</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="selectState">Select state*</FormLabel>
                <TextField
                  select
                  name="selectState"
                  variant="filled"
                  size="small"
                  id="selectState"
                  value={values.selectState}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.selectState && errors.selectState ? true : false
                  }
                  helperText={touched.selectState && errors.selectState}
                >
                  <MenuItem value="Maharastra">Maharastra</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* Country */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="country">Country*</FormLabel>
                <TextField
                  select
                  name="country"
                  variant="filled"
                  size="small"
                  id="country"
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.country && errors.country ? true : false}
                  helperText={touched.country && errors.country}
                >
                  <MenuItem value="India">India</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* postal code */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="postalCode">Postal code</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="postalCode"
                  value={values.postalCode}
                  onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   error={touched.postalCode && errors.postalCode ? true : false}
                  //   helperText={touched.postalCode && errors.postalCode}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="partnerOnBoardDate">
                  Partner OnBoard Date
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="date"
                  name="partnerOnBoardDate"
                  value={values.partnerOnBoardDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.partnerOnBoardDate && errors.partnerOnBoardDate
                      ? true
                      : false
                  }
                  helperText={
                    touched.partnerOnBoardDate && errors.partnerOnBoardDate
                  }
                />
              </FormControl>
            </Grid>
            {/* Point of Contact Orangebits */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="pointofContactOrangebits">
                  Point of Contact Orangebits
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="pointofContactOrangebits"
                  value={values.pointofContactOrangebits}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.pointofContactOrangebits &&
                    errors.pointofContactOrangebits
                      ? true
                      : false
                  }
                  helperText={
                    touched.pointofContactOrangebits &&
                    errors.pointofContactOrangebits
                  }
                />
              </FormControl>
            </Grid>
            {/* Point of Contact Partrner 1  */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="pointofContactPartrner1">
                  Point of Contact Partrner 1
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="pointofContactPartrner1"
                  value={values.pointofContactPartrner1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  //   error={touched.abbr && errors.abbr ? true : false}
                  //   helperText={touched.abbr && errors.abbr}
                />
              </FormControl>
            </Grid>
            {/* Point of Contact Partrner 2 */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="pointofContactPartrner2">
                  Point of Contact Partrner 2
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="pointofContactPartrner2"
                  value={values.pointofContactPartrner2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  //   error={touched.abbr && errors.abbr ? true : false}
                  //   helperText={touched.abbr && errors.abbr}
                />
              </FormControl>
            </Grid>
            {/* Point of Contact Partrner 3 */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="pointofContactPartrner3">
                  Point of Contact Partrner 3
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="pointofContactPartrner3"
                  value={values.pointofContactPartrner3}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  //   error={touched.abbr && errors.abbr ? true : false}
                  //   helperText={touched.abbr && errors.abbr}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="taxID">Tax ID</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="taxID"
                  value={values.taxID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.taxID && errors.taxID ? true : false}
                  helperText={touched.taxID && errors.taxID}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Card>
      </form>
    </Box>
  );
};

export default AddPartner;
