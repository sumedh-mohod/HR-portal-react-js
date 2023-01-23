import React from "react";
import { useFormik } from "formik";
import { Button, Grid, FormControl, FormLabel, TextField, MenuItem, Card, Box, Typography } from "@mui/material";
import DeleteIcon from "../Icons/DeleteIcon";
import AddIcon from "@mui/icons-material/Add";
import { editCompanyValidator } from "../../utils/validations/auth";
import { useAppDispatch } from "../../store/hooks";
import { updateCompany } from "../../store/reducers/companies/companies";
import { styles } from "../../styles/components/editCompany";
import { globalStyles } from "../../styles/global";

interface CompanyDetailsCardInterface {
  data: any,
  submitRef: any
}
const CompanyDetailsCard = (props: CompanyDetailsCardInterface) => {
  const {
    data,
    submitRef
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
      abbr: "",
      defaultCurrency: "",
      domain: "",
      dateOfEstablishment: "",
      address: [
        {
          addressLine1: "",
          addressLine2: "",
          country: "",
          selectState: "",
          selectCity: "",
          postalCode: ""
        },
      ],
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

  const handleAddAddress = () => {
    const newAddresses = [
      ...values.address,
      {
        addressLine1: "",
        addressLine2: "",
        country: "",
        selectState: "",
        selectCity: "",
        postalCode: ""
      },
    ];
    setFieldValue("address", newAddresses);
  };

  const handleRemoveAddress = (index: number) => {
    const newAddresses = [...values.address];
    newAddresses.splice(index, 1);
    setFieldValue("address", newAddresses);
  };

  // address
  const handleChangeAddressLine1 = (event: any, index: number) => {
    setFieldValue(`address.${index}.addressLine1`, event.target.value);
    console.log("address line1", event.target.value)
  };

  const handleChangeAddressLine2 = (event: any, index: number) => {
    setFieldValue(`address.${index}.addressLine2`, event.target.value);
  };

  const handleChangeCountry = (event: any, index: number) => {
    setFieldValue(`address.${index}.country`, event.target.value);
  };

  const handleChangeSelectState = (event: any, index: number) => {
    setFieldValue(`address.${index}.selectState`, event.target.value);
  };

  const handleChangeSelectCity = (event: any, index: number) => {
    setFieldValue(`address.${index}.selectCity`, event.target.value);
  };

  const handleChangePostalCode = (event: any, index: number) => {
    setFieldValue(`address.${index}.postalCode`, event.target.value);
  };

  const handleSubmitTaxes = (index: number) => { };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Card sx={{ mt: 3, mb: 3, p: 5 }}>
          <Grid container spacing={2} >
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="company" {...globalStyles.textFieldLabel}>Company*</FormLabel>
                <TextField
                  name="company"
                  variant="filled"
                  size="small"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.company && errors.company ? true : false}
                  helperText={touched.company && errors.company}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="abbr" {...globalStyles.textFieldLabel}>Abbr*</FormLabel>
                <TextField
                  name="abbr"
                  variant="filled"
                  size="small"
                  value={values.abbr}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.abbr && errors.abbr ? true : false}
                  helperText={touched.abbr && errors.abbr}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="defaultCurrency" {...globalStyles.textFieldLabel}>Default Currency*</FormLabel>
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
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth {...globalStyles.textFieldLabel}>
                <FormLabel id="domain" {...globalStyles.textFieldLabel}>Domain</FormLabel>
                <TextField
                  name="domain"
                  variant="filled"
                  size="small"
                  value={values.domain}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="dateOfEstablishment" {...globalStyles.textFieldLabel}>
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
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
          </Grid>
          {/* invisible button call submit from parents save button */}
          <button ref={submitRef} type="submit" style={{ display: 'none' }} />
        </Card>
        {/* address */}
        {values.address.map((address, index) => (
          <>
            <Box {...styles.parentBox}>
              <Typography
                variant="h5"
                {...globalStyles.moduleTitle}
              >
                Address 1
              </Typography>
              <Box
                {...styles.taxCloseClickIconBox}
                onClick={() => {
                  handleRemoveAddress(index)
                }}
              >
                <DeleteIcon fill={"white"} />
              </Box>
            </Box>
            {/* form fields started */}
            <Card {...styles.card}>
              <Grid container columnSpacing={3} rowGap={3}>
                <>
                  <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel id="addressLine1" {...globalStyles.textFieldLabel}>
                        Address Line 1
                      </FormLabel>
                      <TextField
                        name="addressLine1"
                        variant="filled"
                        size="small"
                        type={"text"}
                        value={(values.address && values.address[index].addressLine1) || ""}
                        onChange={(event) => {
                          handleChangeAddressLine1(event, index);
                        }}
                        onBlur={handleBlur}
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                      />
                    </FormControl>
                  </Grid>
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
                        value={(values.address && values.address[index].addressLine2) || ""}
                        onChange={(event) => {
                          handleChangeAddressLine2(event, index);
                        }}
                        onBlur={handleBlur}
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                      // error={touched.abbr && errors.abbr ? true : false}
                      // helperText={touched.abbr && errors.abbr}
                      />
                    </FormControl>
                  </Grid>
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
                        value={(values.address && values.address[index].country) || ""}
                        onChange={(event) => {
                          handleChangeCountry(event, index);
                        }}
                        onBlur={handleBlur}
                        // error={touched.country && errors.country ? true : false}
                        // helperText={touched.country && errors.country}
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                      >
                        <MenuItem value="India">India</MenuItem>
                      </TextField>
                    </FormControl>
                  </Grid>
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
                        value={(values.address && values.address[index].selectState) || ""}
                        onChange={(event) => {
                          handleChangeSelectState(event, index);
                        }}
                        onBlur={handleBlur}
                        // error={
                        //   touched.selectState && errors.selectState ? true : false
                        // }
                        // helperText={touched.selectState && errors.selectState}
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                      >
                        <MenuItem value="Maharastra">Maharastra</MenuItem>
                      </TextField>
                    </FormControl>
                  </Grid>
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
                        value={(values.address && values.address[index].selectCity) || ""}
                        onChange={(event) => {
                          handleChangeSelectCity(event, index);
                        }}
                        onBlur={handleBlur}
                        // error={touched.selectCity && errors.selectCity ? true : false}
                        // helperText={touched.selectCity && errors.selectCity}
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                      >
                        <MenuItem value="Nagpur">Nagpur</MenuItem>
                      </TextField>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth>
                      <FormLabel id="postalCode" {...globalStyles.textFieldLabel}>
                        Postal Code
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        type="text"
                        name="postalCode"
                        value={(values.address && values.address[index].postalCode) || ""}
                        onChange={(event) => {
                          handleChangePostalCode(event, index);
                        }}
                        onBlur={handleBlur}
                        InputProps={{
                          disableUnderline: true,
                          style: { ...globalStyles.textField },
                        }}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={12}>
                    {values.address.length - 1 === index ? (
                      <Button
                        variant="contained"
                        onClick={handleAddAddress}
                        startIcon={<AddIcon />}
                        {...styles.addressAddBtn}
                      >
                        Add
                      </Button>
                    ) : null}
                  </Grid>
                </>
              </Grid>
            </Card>
          </>
        ))}
      </form>
    </Box>
  );
};

export default CompanyDetailsCard;
