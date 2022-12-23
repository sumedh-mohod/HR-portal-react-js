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
      parentsCompany: "",
      defaultHollidayList: "",
    },
    validationSchema: addCompanyValidator,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <Container sx={{ p: 3 }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 80px",
            justifyItems: "center",
            alignContent: "flex-start",
          }}
        >
          <Typography variant="h5">New Company</Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F58634",
              borderRadius: "5px",
            }}
            type="submit"
          >
            Save
          </Button>
        </Box>

        {/* form fields started */}
        <Grid container spacing={5} sx={{ padding: "10px 80px" }}>
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
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
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
              <FormLabel id="country">Country*</FormLabel>
              <Select
                variant="filled"
                size="small"
                labelId="country"
                id="country"
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.country && errors.country ? true : false}
              >
                <MenuItem value="India">India</MenuItem>
              </Select>
              {touched.country && (
                <FormHelperText sx={{ color: "#d32f2f" }}>
                  Please Select a valid country
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6}>
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
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Is Group"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
              <FormLabel id="parentsCompany">Parents Company</FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="parentsCompany"
                value={values.parentsCompany}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.parentsCompany && errors.parentsCompany ? true : false
                }
                helperText={touched.parentsCompany && errors.parentsCompany}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={6}>
            <FormControl fullWidth>
              <FormLabel id="defaultHollidayList">
                Default Holliday List
              </FormLabel>
              <TextField
                variant="filled"
                size="small"
                type={"text"}
                name="defaultHollidayList"
                value={values.defaultHollidayList}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.defaultHollidayList && errors.defaultHollidayList
                    ? true
                    : false
                }
                helperText={
                  touched.defaultHollidayList && errors.defaultHollidayList
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
