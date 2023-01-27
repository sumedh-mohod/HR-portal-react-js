import React, { useRef } from "react";
import { useFormik } from "formik";
import { addPartnerValidator } from "utils/validations/auth";
import { useNavigate } from "react-router-dom";
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
import { addPartner } from "store/reducers/partners/partners";
import { styles } from "styles/components/addPartner";
import { globalStyles } from "styles/global";
import SaveTickIcon from "components/Icons/SaveTickIcon";
import DeleteIcon from "components/Icons/DeleteIcon";
import AddIcon from "@mui/icons-material/Add";

const AddPartner = () => {
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
      logo: "",
      partnerName: "",
      addressLine1: "",
      addressLine2: "",
      selectCity: "",
      selectState: "",
      country: "",
      postalCode: "",
      partnerOnBoardDate: "",
      taxes: [
        {
          name: "",
          value: "",
        },
      ],
      contactsOrangebits: [
        {
          name: "",
          emailId: "",
          contactNo: ""
        },
      ],
      contactPartners: [
        {
          name: "",
          emailId: "",
          contactNo: ""
        },
      ],
      id: "",
    },
    validationSchema: addPartnerValidator,
    onSubmit: (values) => {
      console.log("values of add partner", values);
      dispatch(addPartner(values))
        .unwrap()
        .then((response: any) => {
          console.log("response from add partner file", response);
        })
        .catch((error: any) => { });
    },
  });

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

  const handleAddTaxes = () => {
    const newTaxes = [
      ...values.taxes,
      {
        name: "",
        value: "",
      },
    ];
    setFieldValue("taxes", newTaxes);
  };

  const handleRemoveTaxes = (index: number) => {
    const newTaxes = [...values.taxes];
    newTaxes.splice(index, 1);
    setFieldValue("taxes", newTaxes);
  };

  const handleChangeTaxName = (event: any, index: number) => {
    setFieldValue(`taxes.${index}.name`, event.target.value);
  };

  const handleChangeTaxValue = (event: any, index: number) => {
    setFieldValue(`taxes.${index}.value`, event.target.value);
  };

  const handleSubmitTaxes = (index: number) => { };

  // add point of contacts orangebist
  const handleAddContactsOrangebits = () => {
    const newContactsOrangebits = [
      ...values.contactsOrangebits,
      {
        name: "",
        emailId: "",
        contactNo: ""
      },
    ];
    setFieldValue("contactsOrangebits", newContactsOrangebits);
  };

  const handleRemoveContactsOrangebits = (index: number) => {
    const newContactsOrangebits = [...values.contactsOrangebits];
    newContactsOrangebits.splice(index, 1);
    setFieldValue("contactsOrangebits", newContactsOrangebits);
  };

  const handleChangeContactsOrangebitsName = (event: any, index: number) => {
    setFieldValue(`contactsOrangebits.${index}.name`, event.target.value);
  };

  const handleChangeContactsOrangebitsEmailId = (event: any, index: number) => {
    setFieldValue(`contactsOrangebits.${index}.emailId`, event.target.value);
  };

  const handleChangeContactsOrangebitsContactNo = (event: any, index: number) => {
    setFieldValue(`contactsOrangebits.${index}.contactNo`, event.target.value);
  };

  const handleSubmitContactsOrangebits = (index: number) => { };

  // point of contacts partner

  const handleAddContactPartners = () => {
    const newContactPartners = [
      ...values.contactPartners,
      {
        name: "",
        emailId: "",
        contactNo: ""
      },
    ];
    setFieldValue("contactPartners", newContactPartners);
  };

  const handleRemoveContactPartners = (index: number) => {
    const newContactPartners = [...values.contactPartners];
    newContactPartners.splice(index, 1);
    setFieldValue("contactPartners", newContactPartners);
  };

  const handleChangeContactPartnersName = (event: any, index: number) => {
    setFieldValue(`contactPartners.${index}.name`, event.target.value);
  };

  const handleChangeContactPartnersEmailId = (event: any, index: number) => {
    setFieldValue(`contactPartners.${index}.emailId`, event.target.value);
  };

  const handleChangeContactPartnerscontactNo = (event: any, index: number) => {
    setFieldValue(`contactPartners.${index}.contactNo`, event.target.value);
  };

  const handleSubmitContactPartners = (index: number) => { };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* header Box */}
        <Box {...styles.parentBox}>
          <Typography {...globalStyles.moduleTitle} variant="h5">
            Add Partner
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
            {/* partner name */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="partnerName" {...globalStyles.textFieldLabel}>
                  Partner Name*
                </FormLabel>
                <TextField
                  select
                  variant="filled"
                  size="small"
                  name="partnerName"
                  value={values.partnerName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.partnerName && errors.partnerName ? true : false
                  }
                  helperText={touched.partnerName && errors.partnerName}
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
                />
              </FormControl>
            </Grid>

            {/* id */}
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="id" {...globalStyles.textFieldLabel}>
                  id
                </FormLabel>
                <TextField
                  variant="filled"
                  size="small"
                  type={"text"}
                  name="id"
                  value={values.id}
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

      {/* =================taxId is sesion strt========================== */}
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Tax
        </Typography>
      </Box>
      <Card {...styles.card}>
        <Grid container columnSpacing={3} rowGap={3}>
          {values.taxes.map((tax, index) => (
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
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                    value={(values.taxes && values.taxes[index].name) || ""}
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
                    value={(values.taxes && values.taxes[index].value) || ""}
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
                  {values.taxes.length - 1 === index ? (
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

      {/* points of contact orangebits */}
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Points of contact orangebits{" "}
        </Typography>
      </Box>
      <Card {...styles.card}>
        <Grid container columnSpacing={3} rowGap={3}>
          {values.contactsOrangebits.map((contactsOrangebit, index) => (
            <>
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
                    value={(values.contactsOrangebits && values.contactsOrangebits[index].name) || ""}
                    onChange={(event) => {
                      handleChangeContactsOrangebitsName(event, index);
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                  />
                </FormControl>
              </Grid>

              {/* email id */}
              <Grid item xs={12} md={6} lg={3}>
                <FormControl fullWidth>
                  <FormLabel id="emailId" {...globalStyles.textFieldLabel}>
                    Email id
                  </FormLabel>
                  <TextField
                    variant="filled"
                    size="small"
                    type={"email"}
                    name="emailId"
                    value={(values.contactsOrangebits && values.contactsOrangebits[index].emailId) || ""}
                    onChange={(event) => {
                      handleChangeContactsOrangebitsEmailId(event, index);
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                  />
                </FormControl>
              </Grid>

              {/* contact no */}
              <Grid item xs={12} md={6} lg={3}>
                <FormControl fullWidth>
                  <FormLabel id="contactNo" {...globalStyles.textFieldLabel}>
                    Contact
                  </FormLabel>
                  <TextField
                    variant="filled"
                    size="small"
                    type={"phone"}
                    name="contactNo"
                    value={(values.contactsOrangebits && values.contactsOrangebits[index].contactNo) || ""}
                    onChange={(event) => {
                      handleChangeContactsOrangebitsContactNo(event, index);
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                  />
                </FormControl>
              </Grid>
              {/* buttons add or remove */}
              <Grid item xs={12} md={6} lg={3} {...styles.gridItem}>
                <Box
                  {...styles.taxRightClickIconBox}
                  onClick={() => {
                    handleSubmitContactsOrangebits(index);
                  }}
                >
                  <SaveTickIcon />
                </Box>
                <Box
                  {...styles.taxCloseClickIconBox}
                  onClick={() => {
                    handleRemoveContactsOrangebits(index);
                  }}
                >
                  <DeleteIcon fill={"white"} />
                </Box>
                <Box>
                  {values.contactsOrangebits?.length - 1 === index ? (
                    <Button {...styles.addButton} onClick={handleAddContactsOrangebits}>
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

      {/* point of contact partner */}
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Points of contact partner{" "}
        </Typography>
      </Box>
      <Card {...styles.card}>
        <Grid container columnSpacing={3} rowGap={3}>
          {values.contactPartners.map((contactPartner, index) => (
            <>
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
                    value={(values.contactPartners && values.contactPartners[index].name) || ""}
                    onChange={(event) => {
                      handleChangeContactPartnersName(event, index);
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                  />
                </FormControl>
              </Grid>

              {/* email id */}
              <Grid item xs={12} md={6} lg={3}>
                <FormControl fullWidth>
                  <FormLabel id="emailId" {...globalStyles.textFieldLabel}>
                    Email id
                  </FormLabel>
                  <TextField
                    variant="filled"
                    size="small"
                    type={"email"}
                    name="emailId"
                    value={(values.contactPartners && values.contactPartners[index].emailId) || ""}
                    onChange={(event) => {
                      handleChangeContactPartnersEmailId(event, index);
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                  />
                </FormControl>
              </Grid>
              {/* contact no */}
              <Grid item xs={12} md={6} lg={3}>
                <FormControl fullWidth>
                  <FormLabel id="contactNo" {...globalStyles.textFieldLabel}>
                    Contact
                  </FormLabel>
                  <TextField
                    variant="filled"
                    size="small"
                    type={"phone"}
                    name="contactNo"
                    value={(values.contactPartners && values.contactPartners[index].contactNo) || ""}
                    onChange={(event) => {
                      handleChangeContactPartnerscontactNo(event, index);
                    }}
                    InputProps={{
                      disableUnderline: true,
                      style: { ...globalStyles.textField },
                    }}
                  />
                </FormControl>
              </Grid>
              {/* buttons add or remove */}
              <Grid item xs={12} md={6} lg={3} {...styles.gridItem}>
                <Box
                  {...styles.taxRightClickIconBox}
                  onClick={() => {
                    handleSubmitContactPartners(index);
                  }}
                >
                  <SaveTickIcon />
                </Box>
                <Box
                  {...styles.taxCloseClickIconBox}
                  onClick={() => {
                    handleRemoveContactPartners(index);
                  }}
                >
                  <DeleteIcon fill={"white"} />
                </Box>
                <Box>
                  {values.contactPartners.length - 1 === index ? (
                    <Button {...styles.addButton} onClick={handleAddContactPartners}>
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
    </Box>
  );
};

export default AddPartner;
