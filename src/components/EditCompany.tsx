import React from "react";
import { useFormik } from "formik";
import {
  Box,
  Container,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { editCompanyValidator } from "../utils/validations/auth";
const EditCompany = () => {
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
      company: "",
      defaultLetterHead: "",
      abbr: "",
      taxID: "",
      defaultCurrency: "",
      domain: "",
      country: "",
      dateOfEstablishment: ""
    },
    validationSchema: editCompanyValidator,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <Container sx={{ p: 3 }}>
      {/* ----------company1 start------------- */}
      <form onSubmit={handleSubmit}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="h5">Company 1</Typography>
        </Box>
        {/* form fielsds started */}
        <Grid
          container
          spacing={2}
          sx={{ p: 5, mt: 5, border: "1px solid #DFDFDF" }}
        >
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="company">Company*</FormLabel>
              <TextField
                name="company"
                variant="filled"
                size="small"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.company && errors.company ? true : false}
                helperText={touched.company && errors.company}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
              <TextField
                name="defaultLetterHead"
                variant="filled"
                size="small"
                value={values.defaultLetterHead}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.defaultLetterHead && errors.defaultLetterHead
                    ? true
                    : false
                }
                helperText={
                  touched.defaultLetterHead && errors.defaultLetterHead
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="abbr">Abbr*</FormLabel>
              <TextField
                name="abbr"
                variant="filled"
                size="small"
                value={values.abbr}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.abbr && errors.abbr ? true : false}
                helperText={touched.abbr && errors.abbr}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="taxID">Tax ID</FormLabel>
              <TextField
                name="taxID"
                variant="filled"
                size="small"
                value={values.taxID}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="defaultCurrency">Default Currency*</FormLabel>
              <TextField
                name="defaultCurrency"
                variant="filled"
                size="small"
                value={values.defaultCurrency}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.defaultCurrency && errors.defaultCurrency
                    ? true
                    : false
                }
                helperText={touched.defaultCurrency && errors.defaultCurrency}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="domain">Domain</FormLabel>
              <TextField
                name="domain"
                variant="filled"
                size="small"
                value={values.domain}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
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
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="dateOfEstablishment">
                Date of Establishment*
              </FormLabel>
              <TextField
                name="dateOfEstablishment"
                variant="filled"
                size="small"
                type="date"
                value={values.dateOfEstablishment}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.dateOfEstablishment && errors.dateOfEstablishment
                    ? true
                    : false
                }
                helperText={
                  touched.dateOfEstablishment && errors.dateOfEstablishment
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#9FA2B4",
                borderRadius: "5px",
                textTransform: "inherit",
                width: "100%",
                size: "large",
                py: "12px",
              }}
            >
              <SaveIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Save
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* ------------Holiday start ------------------*/}
      <form>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5">Holiday</Typography>
        </Box>
        {/* holiday form field start */}

        <Grid
          container
          spacing={2}
          sx={{ p: 5, mt: 5, border: "1px solid #DFDFDF" }}
        >
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="holidayname">Holiday Name</FormLabel>
              <TextField
                name="holidayname"
                variant="filled"
                size="small"
                // value={values.holidayname}
                // onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="selectDate">Select Date*</FormLabel>
              <TextField
                type="date"
                name="selectDate"
                variant="filled"
                size="small"
                // value={values.selectDate}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // error={touched.selectDate && errors.selectDate ? true : false}
                // helperText={touched.selectDate && errors.selectDate}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                mx: 1,
                backgroundColor: "#9FA2B4",
                borderRadius: "70px",
                textTransform: "inherit",
                padding: "12px 25px",
              }}
            >
              <SaveIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Save
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                mx: 1,
                backgroundColor: "#D82A2A",
                borderRadius: "70px",
                textTransform: "inherit",
                py: "12px",
              }}
            >
              <HighlightOffIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Remove
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="holidayname">Holiday Name</FormLabel>
              <TextField
                name="holidayname"
                variant="filled"
                size="small"
                // value={values.holidayname}
                // onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="selectDate">Select Date*</FormLabel>
              <TextField
                type="date"
                name="selectDate"
                variant="filled"
                size="small"
                // value={values.selectDate}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // error={touched.selectDate && errors.selectDate ? true : false}
                // helperText={touched.selectDate && errors.selectDate}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                mx: 1,
                backgroundColor: "#0FBD35",
                borderRadius: "70px",
                textTransform: "inherit",
                padding: "12px 25px",
              }}
            >
              <SaveIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Save
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                mx: 1,
                backgroundColor: "#D82A2A",
                borderRadius: "70px",
                textTransform: "inherit",
                py: "12px",
              }}
            >
              <HighlightOffIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Remove
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#F58634",
                borderRadius: "5px",
                textTransform: "inherit",
                width: "100%",
                size: "large",
                py: "12px",
              }}
            >
              <AddCircleOutlineIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
      {/*-------------------- Designation start -----------*/}
      <form>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5">Designation</Typography>
        </Box>
        {/* Designation form field start */}
        <Grid
          container
          spacing={2}
          sx={{ p: 5, mt: 5, border: "1px solid #DFDFDF" }}
        >
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="designationname">Designation Name</FormLabel>
              <TextField
                name="designationname"
                variant="filled"
                size="small"
                // value={values.designationname}
                // onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="description">Description</FormLabel>
              <TextField
                name="description"
                variant="filled"
                size="small"
                // value={values.description}
                // onChange={handleChange}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                mt: 3,
                mx: 1,
                backgroundColor: "#0FBD35",
                borderRadius: "70px",
                textTransform: "inherit",
                padding: "12px 25px",
              }}
            >
              <SaveIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Save
            </Button>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                mx: 1,
                backgroundColor: "#D82A2A",
                borderRadius: "70px",
                textTransform: "inherit",
                py: "12px",
              }}
            >
              <HighlightOffIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Remove
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#F58634",
                borderRadius: "5px",
                textTransform: "inherit",
                width: "100%",
                size: "large",
                py: "12px",
              }}
            >
              <AddCircleOutlineIcon sx={{ pr: 1, fontSize: "inheit" }} />
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditCompany;
