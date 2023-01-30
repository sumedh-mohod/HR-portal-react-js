import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { addCompanyValidator } from "utils/validations/auth";
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
import { useAppDispatch } from "store/hooks";
import { addCompany } from "store/reducers/companies/companies";
import { styles } from "styles/components/addCompany";
import { globalStyles } from "styles/global";
import SaveTickIcon from "components/Icons/SaveTickIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import AddIcon from "@mui/icons-material/Add";
import ConfirmationModal from "components/HigherOrder/ConfirmationModal";

const isObjectEmpty = (obj: any) => {
  for (let propName in obj) {
    if (obj[propName] === "" || Object.keys(obj[propName]).length === 0) {
      return true;
    }
  }
  return false;
};

const AddCompany = () => {
  const [confimationModal, setConfimationModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [taxes, setTaxes] = useState([
    {
      name: "",
      value: "",
    },
  ]);
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
          postalCode: "",
        },
      ],
    },
    validationSchema: addCompanyValidator,
    onSubmit: (values) => {
      dispatch(addCompany(values))
        .unwrap()
        .then((response: any) => {
          console.log("response from addCompany file", response);
        })
        .catch((error: any) => {});
    },
  });

  const handleSubmitTaxes = (index: number) => {
    console.log("submit taxes");
  };

  // cancle butn click
  const handleCancle = () => {
    const isEmpty = Object.values(values).every((x) => x === null || x === "");

    console.log("isEmpty", isEmpty);

    if (isEmpty) {
      navigate(-1);
    } else {
      setConfimationModal(true);
    }
  };

  const handleConfirmationModal = () => {
    setConfimationModal(false);
    navigate(-1);
  };

  const handleCancelModal = () => {
    setConfimationModal(false);
  };

  const handleAddTaxes = () => {
    const newTaxes = [
      ...taxes,
      {
        name: "",
        value: "",
      },
    ];
    // setFieldValue("taxes", newTaxes);
    console.log("new Taxes", newTaxes);
    setTaxes(newTaxes);
  };
  console.log("taxes", taxes);
  const handleChangeTaxName = (event: any, index: number) => {
    // setFieldValue(`taxes.${index}.name`, event.target.value);
    // setTaxes(() => {
    //   return [
    //     ...taxes,
    //     { [`taxes.${index}.name`]: event.target.value }
    //   ]
    // })
  };

  const handleChangeTaxValue = (event: any, index: number) => {
    // setFieldValue(`taxes.${index}.value`, event.target.value);
    // setTaxes([...taxes, {
    //   value: event.target.value
    // }]);
    // console.log("event", event.target.value);
  };
  console.log("values", values);

  const handleAddAddress = () => {
    const newAddresses = [
      ...values.address,
      {
        addressLine1: "",
        addressLine2: "",
        country: "",
        selectState: "",
        selectCity: "",
        postalCode: "",
      },
    ];
    setFieldValue("address", newAddresses);
  };

  const handleRemoveTaxes = (index: number) => {
    const newTaxes = [...taxes];
    newTaxes.splice(index, 1);
    setTaxes(newTaxes);
  };

  const handleRemoveAddress = (index: number) => {
    const newAddresses = [...values.address];
    newAddresses.splice(index, 1);
    setFieldValue("address", newAddresses);
  };

  // address
  const handleChangeAddressLine1 = (event: any, index: number) => {
    setFieldValue(`address.${index}.addressLine1`, event.target.value);
    console.log("address line1", event.target.value);
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

  // const handleSubmitTaxes = (index: number) => { };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Box {...styles.parentBox}>
          <Typography variant="h5" {...globalStyles.moduleTitle}>
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
                    style: { ...globalStyles.textField },
                  }}
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
                    style: { ...globalStyles.textField },
                  }}
                  error={touched.abbr && errors.abbr ? true : false}
                  helperText={touched.abbr && errors.abbr}
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
                    style: { ...globalStyles.textField },
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
                    style: { ...globalStyles.textField },
                  }}
                  error={touched.domain && errors.domain ? true : false}
                  helperText={touched.domain && errors.domain}
                />
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
                    style: { ...globalStyles.textField },
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
          </Grid>
        </Card>
        {/* =================taxId is sesion strt========================== */}
        <Box {...styles.parentBox}>
          <Typography {...globalStyles.moduleTitle} variant="h5">
            Tax
          </Typography>
        </Box>
        <Card {...styles.card}>
          <Grid container columnSpacing={3} rowGap={3}>
            {taxes?.map((tax, index) => (
              <>
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel id="name" {...globalStyles.textFieldLabel}>
                      Name
                    </FormLabel>
                    <TextField
                      variant="filled"
                      size="small"
                      type={"text"}
                      name="name"
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                      value={(taxes && taxes[index].name) || ""}
                      onChange={(event) => {
                        handleChangeTaxName(event, index);
                      }}
                      onBlur={handleBlur}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel id="value" {...globalStyles.textFieldLabel}>
                      value
                    </FormLabel>
                    <TextField
                      variant="filled"
                      size="small"
                      type={"text"}
                      name="value"
                      value={(taxes && taxes[index].value) || ""}
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                      onChange={(event) => {
                        handleChangeTaxValue(event, index);
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6} {...styles.gridItem}>
                  <Box
                    {...styles.taxRightClickIconBox}
                    onClick={() => {
                      handleSubmitTaxes(index);
                    }}
                  >
                    <SaveTickIcon />
                  </Box>
                  <Box
                    {...styles.taxCloseClickIconBox}
                    onClick={() => {
                      handleRemoveTaxes(index);
                    }}
                  >
                    <DeleteIcon fill={"white"} />
                  </Box>
                  <Box>
                    {taxes.length - 1 === index ? (
                      <Button {...styles.addButton} onClick={handleAddTaxes}>
                        <AddIcon fontSize="small" {...styles.addIcon} />
                        <Typography sx={{ fontSize: "small" }}>Add</Typography>
                      </Button>
                    ) : null}
                  </Box>
                </Grid>
              </>
            ))}
          </Grid>
        </Card>

        {/* addresess */}
        {values.address.map((address, index) => (
          <>
            <Box {...styles.parentBox}>
              <Typography variant="h5" {...globalStyles.moduleTitle}>
                Address 1
              </Typography>
              <Box
                {...styles.taxCloseClickIconBox}
                onClick={() => {
                  handleRemoveAddress(index);
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
                      <FormLabel id="addressLine1" {...styles.textFieldLabel}>
                        Address Line 1
                      </FormLabel>
                      <TextField
                        name="addressLine1"
                        variant="filled"
                        size="small"
                        type={"text"}
                        value={
                          (values.address &&
                            values.address[index].addressLine1) ||
                          ""
                        }
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
                      <FormLabel id="addressLine2" {...styles.textFieldLabel}>
                        Address Line 2
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        type={"text"}
                        name="addressLine2"
                        value={
                          (values.address &&
                            values.address[index].addressLine2) ||
                          ""
                        }
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
                        value={
                          (values.address && values.address[index].country) ||
                          ""
                        }
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
                      <FormLabel
                        id="selectState"
                        {...globalStyles.textFieldLabel}
                      >
                        Select state*
                      </FormLabel>
                      <TextField
                        select
                        name="selectState"
                        variant="filled"
                        size="small"
                        id="selectState"
                        value={
                          (values.address &&
                            values.address[index].selectState) ||
                          ""
                        }
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
                      <FormLabel
                        id="selectCity"
                        {...globalStyles.textFieldLabel}
                      >
                        Select City*
                      </FormLabel>
                      <TextField
                        select
                        name="selectCity"
                        variant="filled"
                        size="small"
                        id="selectCity"
                        value={
                          (values.address &&
                            values.address[index].selectCity) ||
                          ""
                        }
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
                      <FormLabel id="postalCode" {...styles.textFieldLabel}>
                        Postal Code
                      </FormLabel>
                      <TextField
                        variant="filled"
                        size="small"
                        type="text"
                        name="postalCode"
                        value={
                          (values.address &&
                            values.address[index].postalCode) ||
                          ""
                        }
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
                </>
              </Grid>
            </Card>
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
        ))}
      </form>
      <ConfirmationModal
        open={confimationModal}
        handleConfirm={handleConfirmationModal}
        handleCancel={handleCancelModal}
        title={"Please confirm"}
        message={
          "You have not saved your changes, Please save your changes or Discard your chanages."
        }
      />
    </Box>
  );
};

export default AddCompany;
