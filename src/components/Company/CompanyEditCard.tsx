import React from "react";
import { useFormik } from "formik";
import { Button, Grid, FormControl, FormLabel, TextField, MenuItem, Card, Box } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import { editCompanyValidator } from "../../utils/validations/auth";
import { useAppDispatch } from "../../store/hooks";
import { updateCompany } from "../../store/reducers/companies/companies";
import { styles } from "../../styles/components/editCompany";

interface CompanyDetailsCardInterface{
  data: any;
}
const CompanyDetailsCard = (props:CompanyDetailsCardInterface) => 
  {
    const {
    data
    } = props;
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
      company: "",
      defaultLetterHead: "",
      abbr: "",
      taxID: "",
      defaultCurrency: "",
      domain: "",
      country:"",
      dateOfEstablishment:"",
    },
    validationSchema: editCompanyValidator,
    onSubmit: (values) => {
      console.log("values", values);
      dispatch(updateCompany(values))
        .unwrap()
        .then((response: any) => {
          console.log("response from edit Company file", response)
        })
        .catch((error: any) => { });
    },
  });
  return (
    <Box>
      <Card sx={{ mt: 3, mb: 3, p: 5 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} >
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
                  // helperText={touched.company && errors.company}
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
                  // helperText={touched.abbr && errors.abbr}
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
                  // helperText={touched.defaultCurrency && errors.defaultCurrency}
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
                  // helperText={touched.country && errors.country}
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
                  // helperText={
                  //   touched.dateOfEstablishment && errors.dateOfEstablishment
                  // }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Button
                variant="contained"
                type="submit"
                {...styles.companySaveButton}
              >
                <SaveIcon {...styles.icon} />
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default CompanyDetailsCard;
