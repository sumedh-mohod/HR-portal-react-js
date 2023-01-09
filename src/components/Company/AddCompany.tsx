import React from "react";
import { useFormik } from "formik";
import { addCompanyValidator } from "../../utils/validations/auth";
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
import { styles } from "../../styles/components/addCompany";
import { useAppDispatch } from "../../store/hooks";
import { addcompany } from "../../store/reducers/companies/companies";
import { useNavigate } from "react-router-dom";
import { padding } from "@mui/system";

const AddCompany = () => {
  const dispatch = useAppDispatch();
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
      dispatch(addcompany(values))
        .unwrap()
        .then((response: any) => {
          console.log("response from addCompany file", response);
        })
        .catch((error: any) => { });
    },
  });

  // cancle butn click
  const handleCancle = () => {
    navigate(-1);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box {...styles.parentBox}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "22px",
              lineHeight: "27px",
              letterSpacing: "0.3px",
              color: "#252733",
            }}
          >
            Add Company
          </Typography>
          <Box>
            <Button
              {...styles.parentBoxCancelButton}
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
          <Grid container spacing={2} rowGap={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="company" {...styles.textFieldLabel}>
                  Company*
                </FormLabel>
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
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="defaultLetterHead" {...styles.textFieldLabel}>
                  Default Letter Head*
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="defaultLetterHead"
                  value={values.defaultLetterHead}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                  }}
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
                <FormLabel id="abbr" {...styles.textFieldLabel}>
                  Abbr*
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="abbr"
                  value={values.abbr}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  error={touched.abbr && errors.abbr ? true : false}
                  helperText={touched.abbr && errors.abbr}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="taxID" {...styles.textFieldLabel}>
                  Tax ID
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="taxID"
                  value={values.taxID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  error={touched.taxID && errors.taxID ? true : false}
                  helperText={touched.taxID && errors.taxID}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="defaultCurrency" {...styles.textFieldLabel}>
                  Default Currency*
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="defaultCurrency"
                  value={values.defaultCurrency}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                  }}
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
                <FormLabel id="domain" {...styles.textFieldLabel}>
                  Domain
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="domain"
                  value={values.domain}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  InputProps={{
                    disableUnderline: true,
                  }}
                  error={touched.domain && errors.domain ? true : false}
                  helperText={touched.domain && errors.domain}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="country" {...styles.textFieldLabel}>
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
                  InputProps={{
                    disableUnderline: true,
                  }}
                  error={touched.country && errors.country ? true : false}
                  helperText={touched.country && errors.country}
                >
                  <MenuItem value="India">India</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="dateOfEstablishment" {...styles.textFieldLabel}>
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
                  InputProps={{
                    disableUnderline: true,
                  }}
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
            <Grid item xs={12} md={6} lg={6}>
              <FormControl fullWidth>
                <FormLabel id="address" {...styles.textFieldLabel}>
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
                  InputProps={{
                    disableUnderline: true,
                  }}
                  error={touched.address && errors.address ? true : false}
                  helperText={touched.address && errors.address}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Card>
      </form>
    </Box>
  );
};

export default AddCompany;
