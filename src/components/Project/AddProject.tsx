import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { addProjectValidator } from "utils/validations/auth";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { useAppDispatch } from "store/hooks";
import { addProject } from "store/reducers/projects/projects";
import { globalStyles } from "styles/global";
import { styles } from "styles/components/addProject";

const AddProject = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
      name: "",
      startDate: "",
      endDate: "",
      pointofContactPartrner1: "",
      pointofContactPartrner2: "",
      pointofContactPartrner3: "",
    },
    validationSchema: addProjectValidator,
    onSubmit: (values) => {
      console.log("values of add project", values);
      dispatch(addProject(values))
        .unwrap()
        .then((response: any) => {
          console.log("response from add partner file", response);
        })
        .catch((error: any) => {});
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
          <Typography variant="h5">Add Project</Typography>
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
          <Grid container columnSpacing={3} rowGap={3}>
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
            {/*  name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="name">Name*</FormLabel>
                <TextField
                  type={"text"}
                  variant="filled"
                  size="small"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && errors.name ? true : false}
                  helperText={touched.name && errors.name}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/* start date */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="startDate">Start Date</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="date"
                  name="startDate"
                  value={values.startDate}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/* end date*/}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="endDate">End Date</FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type="date"
                  name="endDate"
                  value={values.endDate}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
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
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
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
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
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

export default AddProject;
