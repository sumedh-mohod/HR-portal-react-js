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
import CreateIcon from "@mui/icons-material/Create";
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
      defaultLetterHead:"",
      abbr:"",
      defaultCurrency:"",
      country:"",
      dateOfEstablishment:""
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          alignContent: "flex-start",
          mt: 2,
        }}
      >
        <Typography variant="h5">Company 1</Typography>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#F58634",
            borderRadius: "5px",
            textTransform: "inherit",
          }}
        >
          <CreateIcon sx={{ pr: 1, fontSize: "inheit" }} />
          Edit
        </Button>
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
            <TextField name="company" variant="filled" size="small" 
               value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.company&& errors.company ? true : false}
                helperText={touched.company && errors.company}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
            <TextField name="defaultLetterHead" variant="filled" size="small" 
              value={values.defaultLetterHead}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.defaultLetterHead&& errors.defaultLetterHead ? true : false}
              helperText={touched.defaultLetterHead && errors.defaultLetterHead}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="abbr">Abbr*</FormLabel>
            <TextField name="abbr" variant="filled" size="small" 
            value={values.abbr}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.abbr&& errors.abbr ? true : false}
            helperText={touched.abbr && errors.abbr}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="taxID">Tax ID</FormLabel>
            <TextField name="taxID" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="defaultCurrency">Default Currency*</FormLabel>
            <TextField name="defaultCurrency" variant="filled" size="small" 
             value={values.defaultCurrency}
             onChange={handleChange}
             onBlur={handleBlur}
             error={touched.defaultCurrency&& errors.defaultCurrency ? true : false}
             helperText={touched.defaultCurrency && errors.defaultCurrency}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="domain">Domain</FormLabel>
            <TextField name="domain" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="country">Country*</FormLabel>
            <Select
              name="country"
              variant="filled"
              size="small"
              labelId="country"
              id="country"
              // defaultValue="India"
              value={values.country}
             onChange={handleChange}
             onBlur={handleBlur}
             error={touched.country&& errors.country ? true : false}
            //  helperText={touched.country && errors.country}
            >
              <MenuItem value="India">India</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="dateOfEstablishment">
              Date of Establishment
            </FormLabel>
            <TextField
              name="dateOfEstablishment"
              variant="filled"
              size="small"
              type="date"
              value={values.dateOfEstablishment}
             onChange={handleChange}
             onBlur={handleBlur}
             error={touched.dateOfEstablishment&& errors.dateOfEstablishment ? true : false}
             helperText={touched.dateOfEstablishment && errors.dateOfEstablishment}
            />
          </FormControl>
        </Grid>
      </Grid>
       </form>
      {/* ------------Holiday start ------------------*/}
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
            <FormLabel id="company">Company*</FormLabel>
            <TextField name="company" variant="filled" size="small" 
               value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.company&& errors.company ? true : false}
                helperText={touched.company && errors.company}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
            <TextField name="defaultLetterHead" variant="filled" size="small" 
              value={values.defaultLetterHead}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.defaultLetterHead&& errors.defaultLetterHead ? true : false}
              helperText={touched.defaultLetterHead && errors.defaultLetterHead}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="abbr">Abbr*</FormLabel>
            <TextField name="abbr" variant="filled" size="small" 
            value={values.abbr}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.abbr&& errors.abbr ? true : false}
            helperText={touched.abbr && errors.abbr}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="taxID">Tax ID</FormLabel>
            <TextField name="taxID" variant="filled" size="small" />
          </FormControl>
        </Grid>
      </Grid>

      {/*-------------------- Designation start -----------*/}
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
            <FormLabel id="company">Company*</FormLabel>
            <TextField name="company" variant="filled" size="small" 
               value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.company&& errors.company ? true : false}
                helperText={touched.company && errors.company}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
            <TextField name="defaultLetterHead" variant="filled" size="small" 
              value={values.defaultLetterHead}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.defaultLetterHead&& errors.defaultLetterHead ? true : false}
              helperText={touched.defaultLetterHead && errors.defaultLetterHead}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="abbr">Abbr*</FormLabel>
            <TextField name="abbr" variant="filled" size="small" 
            value={values.abbr}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.abbr&& errors.abbr ? true : false}
            helperText={touched.abbr && errors.abbr}/>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="taxID">Tax ID</FormLabel>
            <TextField name="taxID" variant="filled" size="small" />
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditCompany;
