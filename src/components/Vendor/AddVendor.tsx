import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { addVendorValidator } from "utils/validations/auth";
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
import SaveTickIcon from "components/Icons/SaveTickIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch } from "store/hooks";
import { addVendor } from "store/reducers/vendors/vendors";
import { globalStyles } from "styles/global";
import { styles } from "styles/components/addVendor";

const AddVendor = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [pointsofContactOrangebits, setPointsofContactOrangebits] = useState([
    {
      name: "",
      email_id: "",
      contact: "",
    },
  ]);
  const [pointsofContactVendors, setPointsofContactVendors] = useState([
    {
      vendors_name: "",
      vendors_email_id: "",
      vendors_contact: "",
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
      logo: "",
      vendorName: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      selectState: "",
      selectCity: "",
      postalCode: "",
      vendorOnbaordDate: "",
      taxId: "",
    },
    validationSchema: addVendorValidator,
    onSubmit: (values) => {
      console.log("values of add VENDOR", values);
      dispatch(addVendor(values))
        .unwrap()
        .then((response: any) => {
          console.log("response from add vendor file", response);
        })
        .catch((error: any) => { });
    },
  });

  //  Points of contacts orangebits functions
  const handleSubmitPointsofContactOrangebits = (index: number) => {
    console.log("submit pointsofContactOrangebits", pointsofContactOrangebits);
  };
  const handleAddPointsofContactOrangebits = (index: any) => {
    const newpointsofContactOrangebits = [
      ...pointsofContactOrangebits,
      {
        name: "",
        email_id: "",
        contact: "",
      },
    ];
    setPointsofContactOrangebits(newpointsofContactOrangebits);
  };
  const handleChangeOrangebitsName = (event: any, index: number) => {
    let changedName = event.target.value;
    let newPointsofContactOrangebits = [...pointsofContactOrangebits];
    newPointsofContactOrangebits[index].name = changedName;
    setPointsofContactOrangebits(newPointsofContactOrangebits);
  };
  const handleChangeOrangebitsEmail = (event: any, index: number) => {
    let changedEmail_id = event.target.value;
    let newPointsofContactOrangebits = [...pointsofContactOrangebits];
    newPointsofContactOrangebits[index].email_id = changedEmail_id;
    setPointsofContactOrangebits(newPointsofContactOrangebits);
  };
  const handleChangeOrangebitsContact = (event: any, index: number) => {
    let changedContact = event.target.value;
    let newPointsofContactOrangebits = [...pointsofContactOrangebits];
    newPointsofContactOrangebits[index].contact = changedContact;
    setPointsofContactOrangebits(newPointsofContactOrangebits);
  };
  const handleRemoveOrangebits = (index: number) => {
    console.log("delet orangebits");
    const newPointsofContactOrangebits = [...pointsofContactOrangebits];
    newPointsofContactOrangebits.splice(index, 1);
    setPointsofContactOrangebits(newPointsofContactOrangebits);
  };

  //  Points of contacts Vendors functions
  const handleSubmitVendors = (index: number) => {
    console.log("submit pointsofContactVendors", pointsofContactVendors);
  }
  const handleAddPointsofContactVendors = (index: any) => {
    const newPointsofContactVendors = [
      ...pointsofContactVendors,
      {
        vendors_name: "",
        vendors_email_id: "",
        vendors_contact: "",
      },
    ];
    setPointsofContactVendors(newPointsofContactVendors);
  };
  const handleChangeVendorsName = (event: any, index: number) => {
    let changedName = event.target.value;
    let newPointsofContactVendors = [...pointsofContactVendors];
    newPointsofContactVendors[index].vendors_name = changedName;
    setPointsofContactVendors(newPointsofContactVendors);
  };
  const handleChangeVendorsEmail = (event: any, index: number) => {
    let changedEmail_id = event.target.value;
    let newPointsofContactVendors = [...pointsofContactVendors];
    newPointsofContactVendors[index].vendors_email_id = changedEmail_id;
    setPointsofContactVendors(newPointsofContactVendors);
  };
  const handleChangeVendorsContact = (event: any, index: number) => {
    let changedContact = event.target.value;
    let newPointsofContactVendors = [...pointsofContactVendors];
    newPointsofContactVendors[index].vendors_contact = changedContact;
    setPointsofContactVendors(newPointsofContactVendors);
  };
  const handleRemoveVendors = (index: number) => {
    console.log("delet orangebits");
    const newPointsofContactVendors = [...pointsofContactVendors];
    newPointsofContactVendors.splice(index, 1);
    setPointsofContactVendors(newPointsofContactVendors);
  };

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
          <Typography {...globalStyles.moduleTitle} variant="h5">
            Vendor
          </Typography>
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
        <Card sx={{ mt: 3, mb: 3, p: 5 }}>
          <Grid container columnSpacing={3} rowGap={3}>
            {/* uplaod Logo */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="logo" {...globalStyles.textFieldLabel}>
                  Upload Logo*
                </FormLabel>
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
            {/* vendor name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="vendorName" {...globalStyles.textFieldLabel}>
                  Vendor Name*
                </FormLabel>
                <TextField
                  select
                  variant="filled"
                  size="small"
                  name="vendorName"
                  value={values.vendorName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.vendorName && errors.vendorName ? true : false}
                  helperText={touched.vendorName && errors.vendorName}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="orangebits india">orangebits india</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* address line 1 */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="addressLine1" {...globalStyles.textFieldLabel}>
                  Address Line 1
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="addressLine1"
                  value={values.addressLine1}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/* address line 2 */}
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
                  value={values.addressLine2}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/* Country */}
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
                  value={values.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.country && errors.country ? true : false}
                  helperText={touched.country && errors.country}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="India">India</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* select state */}
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
                  value={values.selectState}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.selectState && errors.selectState ? true : false
                  }
                  helperText={touched.selectState && errors.selectState}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="Maharastra">Maharastra</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* select city */}
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
                  value={values.selectCity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.selectCity && errors.selectCity ? true : false}
                  helperText={touched.selectCity && errors.selectCity}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                >
                  <MenuItem value="Nagpur">Nagpur</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* postal code */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="postalCode" {...globalStyles.textFieldLabel}>
                  Postal code
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="postalCode"
                  value={values.postalCode}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                //   onBlur={handleBlur}
                //   error={touched.postalCode && errors.postalCode ? true : false}
                //   helperText={touched.postalCode && errors.postalCode}
                />
              </FormControl>
            </Grid>

            {/* Vendor onboard Date */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel
                  id="vendorOnbaordDate"
                  {...globalStyles.textFieldLabel}
                >
                  Vendor onboard Date
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="vendorOnbaordDate"
                  value={values.vendorOnbaordDate}
                  onChange={handleChange}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>
            </Grid>
            {/* Tax id */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="taxId" {...globalStyles.textFieldLabel}>
                  Tax id
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="taxId"
                  value={values.taxId}
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
      {/* points of contact orangebits */}
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Point of Contact Orangebits
        </Typography>
      </Box>
      <Card {...styles.card}>
        {pointsofContactOrangebits.map((address, index) => (
          <>
            <Grid container columnSpacing={3} rowGap={3} sx={{ mb: 3 }}>
              {/* name */}
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
                    value={
                      (pointsofContactOrangebits &&
                        pointsofContactOrangebits[index].name) ||
                      ""
                    }
                    onChange={(event) => {
                      handleChangeOrangebitsName(event, index);
                    }}
                  />
                </FormControl>
              </Grid>

              {/* email id */}
              <Grid item xs={12} md={6} lg={3}>
                <FormControl fullWidth>
                  <FormLabel id="email_id" {...globalStyles.textFieldLabel}>
                    Email id
                  </FormLabel>
                  <TextField
                    variant="filled"
                    size="small"
                    // type={"email"}
                    name="email_id"
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                    value={
                      (pointsofContactOrangebits &&
                        pointsofContactOrangebits[index].email_id) ||
                      ""
                    }
                    onChange={(event) => {
                      handleChangeOrangebitsEmail(event, index);
                    }}
                  />
                </FormControl>
              </Grid>

              {/* contact no */}
              <Grid item xs={12} md={6} lg={3}>
                <FormControl fullWidth>
                  <FormLabel id="contact" {...globalStyles.textFieldLabel}>
                    Contact
                  </FormLabel>
                  <TextField
                    variant="filled"
                    size="small"
                    // type={"phone"}
                    name="contact"
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                    value={
                      (pointsofContactOrangebits &&
                        pointsofContactOrangebits[index].contact) ||
                      ""
                    }
                    onChange={(event) => {
                      handleChangeOrangebitsContact(event, index);
                    }}
                  />
                </FormControl>
              </Grid>
              {/* buttons add or remove */}
              <Grid item xs={12} md={6} lg={3} {...styles.gridItem} >
                <Box
                  {...styles.RightClickIconBox}
                  onClick={() => {
                    handleSubmitPointsofContactOrangebits(index)
                  }}
                >
                  <SaveTickIcon />
                </Box>
                <Box
                  {...styles.CloseClickIconBox}
                  onClick={() => {
                    handleRemoveOrangebits(index);
                  }}
                >
                  <DeleteIcon fill={"white"} />
                </Box>
                <Box>
                  {pointsofContactOrangebits.length - 1 === index ? (
                    <Button
                      {...styles.addButton}
                      onClick={handleAddPointsofContactOrangebits}
                    >
                      <AddIcon fontSize="small" {...styles.addIcon} />
                      <Typography sx={{ textTransform: "none" }}>
                        Add
                      </Typography>
                    </Button>
                  ) : null}
                </Box>
              </Grid>
            </Grid>
          </>
        ))}
      </Card>

      {/* ==============points of contact vendors===================== */}
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Point of Contact Vendor
        </Typography>
      </Box>
      <Card {...styles.card}>
        {pointsofContactVendors.map((address, index) => (
          <>
            <Grid container columnSpacing={3} rowGap={3} sx={{ mb: 3 }}>
              {/* name */}
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
                    value={
                      (pointsofContactVendors &&
                        pointsofContactVendors[index].vendors_name) ||
                      ""
                    }
                    onChange={(event) => {
                      handleChangeVendorsName(event, index);
                    }}
                  />
                </FormControl>
              </Grid>

              {/* email id */}
              <Grid item xs={12} md={6} lg={3}>
                <FormControl fullWidth>
                  <FormLabel id="email_id" {...globalStyles.textFieldLabel}>
                    Email id
                  </FormLabel>
                  <TextField
                    variant="filled"
                    size="small"
                    type={"email"}
                    name="email_id"
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                    value={
                      (pointsofContactVendors &&
                        pointsofContactVendors[index]
                          .vendors_email_id) ||
                      ""
                    }
                    onChange={(event) => {
                      handleChangeVendorsEmail(event, index);
                    }}
                  />
                </FormControl>
              </Grid>
              {/* contact no */}
              <Grid item xs={12} md={6} lg={3}>
                <FormControl fullWidth>
                  <FormLabel id="contact" {...globalStyles.textFieldLabel}>
                    Contact
                  </FormLabel>
                  <TextField
                    variant="filled"
                    size="small"
                    type={"phone"}
                    name="contact"
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                    value={
                      (pointsofContactVendors &&
                        pointsofContactVendors[index].vendors_contact) ||
                      ""
                    }
                    onChange={(event) => {
                      handleChangeVendorsContact(event, index);
                    }}
                  />
                </FormControl>
              </Grid>
              {/* buttons add or remove */}
              <Grid item xs={12} md={6} lg={3} {...styles.gridItem}>
                <Box
                  {...styles.RightClickIconBox}
                  onClick={() => {
                    handleSubmitVendors(index);
                  }}
                >
                  <SaveTickIcon />
                </Box>
                <Box
                  {...styles.CloseClickIconBox}
                  onClick={() => {
                    handleRemoveVendors(index);
                  }}
                >
                  <DeleteIcon fill={"white"} />
                </Box>
                <Box>
                  {pointsofContactVendors.length - 1 === index ? (
                    <Button
                      {...styles.addButton}
                      onClick={handleAddPointsofContactVendors}
                    >
                      <AddIcon fontSize="small" {...styles.addIcon} />
                      <Typography sx={{ textTransform: "none" }}>
                        Add
                      </Typography>
                    </Button>
                  ) : null}
                </Box>
              </Grid>
            </Grid>
          </>
        ))}
      </Card>
    </Box>
  );
};

export default AddVendor;
