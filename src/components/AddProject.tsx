import React from "react";
import { useFormik } from "formik";
import { addProjectValidator } from "../utils/validations/auth";
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
import { styles } from "../styles/components/addProject";
// import { useAppDispatch} from "../store/hooks";

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
    },
  });

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* header Box */}
        <Box {...styles.parentBox}>
          <Typography variant="h5">Add Project</Typography>
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
