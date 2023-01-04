import React, { useRef } from "react";
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
  IconButton,
} from "@mui/material";
import { styles } from "../styles/components/addPartner";
import { useNavigate } from "react-router-dom";
import { globalStyles } from "../styles/global";
// import { useAppDispatch} from "../store/hooks";
// import { addcompany } from "../store/reducers/companies/companies";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
const AddPartner = () => {
  //   const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
      // pointofContactOrangebits: "",
      // pointofContactPartrner1: "",
      // pointofContactPartrner2: "",
      // pointofContactPartrner3: "",
      id: "",
    },
    validationSchema: addPartnerValidator,
    onSubmit: (values) => {
      console.log("values of add partner", values);
    },
  });
  const inputRef: any = useRef(null);
  const handleClick = () => {
    // open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (fileObj) {
      setFieldValue("logo", fileObj.name);
    }
    //  reset file input
    event.target.value = null;

    //  can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
  // cancle butn click
  const handleCancle = () => {
    navigate(-1);
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* header Box */}
        <Box {...styles.parentBox}>
          <Typography {...globalStyles.moduleTitle} variant="h5">
            Add Partner
          </Typography>
          <Box>
            <Button
              {...styles.parentBoxCancleButton}
              variant="contained"
              onClick={handleCancle}
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
        </Box>
        {/* form fields started */}
        <Card {...styles.card}>
          <Grid container columnSpacing={3} rowGap={1}>
            {/* uplaod Logo */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="logo">Upload Logo*</FormLabel>
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
                  value={values.logo}
                  onChange={handleFileChange}
                  onBlur={handleBlur}
                  error={touched.logo && errors.logo ? true : false}
                  helperText={touched.logo && errors.logo}
                  {...styles.logoTextfield}
                  InputProps={{
                    sx: { color: "#515151" },
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
            {/* select state */}
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
            {/*  Partner OnBoard Date  */}
            {/* <Grid item xs={12} md={6} lg={3}>
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
            </Grid> */}
            {/* Point of Contact Orangebits */}
            {/* <Grid item xs={12} md={6} lg={3}>
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
            </Grid> */}
            {/* Point of Contact Partrner 1  */}
            {/* <Grid item xs={12} md={6} lg={3}>
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
            </Grid> */}
            {/* Point of Contact Partrner 2 */}
            {/* <Grid item xs={12} md={6} lg={3}>
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
            </Grid> */}
            {/* Point of Contact Partrner 3 */}
            {/* <Grid item xs={12} md={6} lg={3}>
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
            </Grid> */}
            {/* id */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="id">id</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="id"
                  value={values.id}
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  // error={touched.taxID && errors.taxID ? true : false}
                  // helperText={touched.taxID && errors.taxID}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Card>
      </form>

      {/* =================taxId is sesion strt========================== */}
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Tax
        </Typography>
      </Box>
      <Card {...styles.card}>
        <Grid container columnSpacing={3} rowGap={1}>
          {/* name */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="name">Name</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="name"
                // value={values.name}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* value */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="value">value</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="value"
                // value={values.value}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* buttons add or remove */}
          <Grid item xs={12} md={12} lg={6}>
            <CheckIcon {...styles.checkIcon} />
            <CloseIcon {...styles.closeIcon} />
          </Grid>

          {/* name */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="name">Name</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="name"
                // value={values.name}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* value */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="value">value</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="value"
                // value={values.value}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Box sx={{ display: "flex", justifyContent: "baseline" }}>
              <CheckIcon {...styles.checkIcon} />
              <CloseIcon {...styles.closeIcon} />
              <Button {...styles.addButton}>
                <AddIcon fontSize="small" {...styles.addIcon} />
                <Typography sx={{ fontSize: "small" }}>Add</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* points of contact orangebits */}
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Points of contact orangebits{" "}
        </Typography>
      </Box>
      <Card {...styles.card}>
        <Grid container columnSpacing={3} rowGap={1}>
          {/* name */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="name">Name</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="name"
                // value={values.name}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* email id */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="email_id">Email id</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"email"}
                name="email_id"
                // value={values.value}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* contact no */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="contact">Contact</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"phone"}
                name="contact"
                // value={values.value}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* buttons add or remove */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ display: "flex", justifyContent: "baseline" }}>
              <CheckIcon {...styles.checkIcon} />
              <CloseIcon {...styles.closeIcon} />
              <Button {...styles.addButton}>
                <AddIcon fontSize="small" {...styles.addIcon} />
                <Typography sx={{ fontSize: "small" }}>Add</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* point of contact partner */}
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Points of contact partner{" "}
        </Typography>
      </Box>
      <Card {...styles.card}>
        <Grid container columnSpacing={3} rowGap={1}>
          {/* name */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="name">Name</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="name"
                // value={values.name}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* email id */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="email_id">Email id</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"email"}
                name="email_id"
                // value={values.value}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* contact no */}
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="contact">Contact</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"phone"}
                name="contact"
                // value={values.value}
                // onChange={name}
                //   onBlur={handleBlur}
                //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                //   helperText={touched.addressLine1 && errors.addressLine1}
              />
            </FormControl>
          </Grid>
          {/* buttons add or remove */}
          <Grid item xs={12} md={6} lg={3}>
            <Box sx={{ display: "flex", justifyContent: "baseline" }}>
              <CheckIcon {...styles.checkIcon} />
              <CloseIcon {...styles.closeIcon} />
              <Button {...styles.addButton}>
                <AddIcon fontSize="small" {...styles.addIcon} />
                <Typography sx={{ fontSize: "small" }}>Add</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AddPartner;
