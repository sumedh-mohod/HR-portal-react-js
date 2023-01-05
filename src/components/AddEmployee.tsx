import React, { useRef } from "react";
import { useFormik } from "formik";
// import { addEmployeeValidator } from "../utils/validations/auth";
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
import { styles } from "../styles/components/addEmployee";
import { useNavigate } from "react-router-dom";
import { globalStyles } from "../styles/global";
// import { useAppDispatch} from "../store/hooks";
const AddEmployee = () => {
  const navigate = useNavigate();
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
      DisplayName: "",
      firstName: "",
      lastName: "",
      employeeId: "",
      designation: "",
      emailId: "",
    },
    // validationSchema: addEmployeeValidator,
    onSubmit: (values) => {
      console.log("values of add project", values);
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
          <Typography variant="h5" {...globalStyles.moduleTitle}>Add Employee</Typography>
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
        <Card sx={{ mt: 3, mb: 3, p: 5 }}>
          <Grid container columnSpacing={3} rowGap={3}>
            {/* uplaod Logo */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="logo" {...styles.textFieldLabel}>Upload Logo*</FormLabel>
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
                  // inputProps={{ maxLength: 12 }}
                  // sx={{"textOverflow":"ellipsis"}}
                  {...styles.logoTextfield}
                  InputProps={{
                    endAdornment: (
                      <Button
                        onClick={handleClick}
                        size="small"
                        {...styles.selectFileButton}
                      >
                        {" "}
                        Select File
                      </Button>
                    ),
                    disableUnderline: true,
                  }}
                ></TextField>
              </FormControl>
            </Grid>
            {/* Display name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="displayName"  {...styles.textFieldLabel}>Display Name*</FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="DisplayName"
                  value={values.DisplayName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.DisplayName && errors.DisplayName ? true : false
                  }
                  helperText={touched.DisplayName && errors.DisplayName}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
            </Grid>
            {/* First name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="firstName"  {...styles.textFieldLabel}>First Name</FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
            </Grid>
            {/* last name*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="lastName"  {...styles.textFieldLabel}>Last Name</FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
            </Grid>
            {/* employee id  */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="employeeId"  {...styles.textFieldLabel}>Employee Id</FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="employeeId"
                  value={values.employeeId}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
            </Grid>
            {/* designation */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="designation"  {...styles.textFieldLabel}>Designation</FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="designation"
                  value={values.designation}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
            </Grid>
            {/* email id */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="emailId"  {...styles.textFieldLabel}>Email id</FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="emailId"
                  value={values.emailId}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
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

export default AddEmployee;
