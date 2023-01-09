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
        <Card sx={{ mt: 3, mb: 3, p: 5 }}>
          <Grid container columnSpacing={3} rowGap={3}>
            {/* uplaod Logo */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="logo" {...globalStyles.textFieldLabel}>
                  Upload Logo*
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
                  value={values.logo}
                  onChange={handleFileChange}
                  onBlur={handleBlur}
                  error={touched.logo && errors.logo ? true : false}
                  helperText={touched.logo && errors.logo}
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
            {/* partner name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="partnerName" {...globalStyles.textFieldLabel}>
                  Partner Name*
                </FormLabel>
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
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="orangebits india">orangebits india</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* address line 1 */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="addressLine1" {...globalStyles.textFieldLabel}>
                  Address Line 1
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="addressLine1"
                  value={values.addressLine1}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                  //   onBlur={handleBlur}
                  //   error={touched.addressLine1 && errors.addressLine1 ? true : false}
                  //   helperText={touched.addressLine1 && errors.addressLine1}
                />
              </FormControl>
            </Grid>
            {/* address line 2 */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="addressLine2" {...globalStyles.textFieldLabel}>
                  Address Line 2
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="addressLine2"
                  value={values.addressLine2}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                  //   onBlur={handleBlur}
                  //   error={touched.addressLine2 && errors.addressLine2 ? true : false}
                  //   helperText={touched.addressLine2 && errors.addressLine2}
                />
              </FormControl>
            </Grid>
            {/* select city */}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.selectCity && errors.selectCity ? true : false}
                  helperText={touched.selectCity && errors.selectCity}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="Nagpur">Nagpur</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* select state */}
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
                  error={
                    touched.selectState && errors.selectState ? true : false
                  }
                  helperText={touched.selectState && errors.selectState}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="Maharastra">Maharastra</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* Country */}
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
                  error={touched.country && errors.country ? true : false}
                  helperText={touched.country && errors.country}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="India">India</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* postal code */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="postalCode" {...globalStyles.textFieldLabel}>
                  Postal code
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="postalCode"
                  value={values.postalCode}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                  //   onBlur={handleBlur}
                  //   error={touched.postalCode && errors.postalCode ? true : false}
                  //   helperText={touched.postalCode && errors.postalCode}
                />
              </FormControl>
            </Grid>

            {/* id */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="id" {...globalStyles.textFieldLabel}>
                  id
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="id"
                  value={values.id}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
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
        <Grid container columnSpacing={3} rowGap={3}>
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
              <FormLabel id="value" {...globalStyles.textFieldLabel}>
                value
              </FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="value"
                InputProps={{
                  disableUnderline: true,
                  style: { ...globalStyles.textField },
                }}
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
              <FormLabel id="value" {...globalStyles.textFieldLabel}>
                value
              </FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="value"
                InputProps={{
                  disableUnderline: true,
                  style: { ...globalStyles.textField },
                }}
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
        <Grid container columnSpacing={3} rowGap={3}>
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
        <Grid container columnSpacing={3} rowGap={3}>
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
