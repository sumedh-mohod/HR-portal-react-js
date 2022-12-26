import React from "react";
import { useFormik } from "formik";
import { addCompanyValidator } from "../utils/validations/auth";
import {
  Box,
  Container,
  Button,
  Grid,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { styles } from "../styles/components/addCompany";

const AddCompany = () => {
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
      dateOfEstablishment: "",
      address: "",
    },
    validationSchema: addCompanyValidator,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <Container sx={{ p: 3 }}>
      <form onSubmit={handleSubmit}>
        <Box {...styles.parentBox}>
          <Typography variant="h5">New Company</Typography>
          <Button {...styles.parentBoxButton} variant="contained" type="submit">
            Save
          </Button>
        </Box>

        {/* form fields started */}
        <Grid container spacing={5} {...styles.parentGrid}>
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="company">Company*</FormLabel>
              <TextField
                name="company"
                variant="filled"
                size="small"
                type={"text"}
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.company && errors.company ? true : false}
                helperText={touched.company && errors.company}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="defaultLetterHead"
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
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="abbr">Abbr*</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="abbr"
                value={values.abbr}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.abbr && errors.abbr ? true : false}
                helperText={touched.abbr && errors.abbr}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={3}>
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
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="defaultCurrency">Default Currency*</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="defaultCurrency"
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
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="domain">Domain</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="domain"
                value={values.domain}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.domain && errors.domain ? true : false}
                helperText={touched.domain && errors.domain}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={3}>
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
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <FormLabel id="dateOfEstablishment">
                Date of Establishment
              </FormLabel>
              <TextField
                variant="filled"
                size="small"
                type="date"
                name="dateOfEstablishment"
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
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
              <FormLabel id="address">
                Address*
              </FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.address && errors.address
                    ? true
                    : false
                }
                helperText={
                  touched.address && errors.address
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default AddCompany;
