import React, { useRef } from "react";
import { useFormik } from "formik";
import { addVendorValidator } from "../../utils/validations/auth";
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
    IconButton,
} from "@mui/material";
import { styles } from "../../styles/components/addVendor";
import { useNavigate } from "react-router-dom";
import { globalStyles } from "../../styles/global";
// import { useAppDispatch} from "../store/hooks";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import AddContact from "../AddContact";
const AddVendor = () => {
    //   const dispatch = useAppDispatch();
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
            vendorName: "",
            addressLine1: "",
            addressLine2: "",
            country: "",
            selectState: "",
            selectCity: "",
            postalCode: "",
            vendorOnbaordDate: "",
            taxId: "",
            contactVendor: [
                {
                    name: "",
                    emailId: "",
                    contactNumber: ""
                },
            ],
            contactOrangebits: [
                {
                    name: "",
                    emailId: "",
                    contactNumber: ""
                },
            ],
        },
        validationSchema: addVendorValidator,
        onSubmit: (values) => {
            console.log("values of add VENDOR", values);
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

    //add contact vendor function
    const handleAddContactVendor = () => {
        console.log("add contact vendor");
        const newContactVendor = [
            ...values.contactVendor,
            {
                name: "",
                emailId: "",
                contactNumber: ""
            },
        ];
        setFieldValue("contactVendor", newContactVendor);
    };

    //add contact orangebits function
    const handleAddContactOrangebits = () => {
        console.log("add contact orangebits");
        const newContactOrangebits = [
            ...values.contactOrangebits,
            {
                name: "",
                emailId: "",
                contactNumber: ""
            },
        ];
        setFieldValue("contactOrangebits", newContactOrangebits);
    };

    // handle remove function for contact vendor
    const handleRemoveContactVendor = (contactVendorIndex: number) => {
        const newContactVendor = [...values.contactVendor];
        newContactVendor.splice(contactVendorIndex, 1);
        setFieldValue("contactVendor", newContactVendor);
    };

    // handle remove function for contact orangebits
    const handleRemoveContactOrangebits = (contactOrangebitsIndex: number) => {
        const newContactOrangebits = [...values.contactOrangebits];
        newContactOrangebits.splice(contactOrangebitsIndex, 1);
        setFieldValue("contactOrangebits", newContactOrangebits);
    };

    const handleSubmitContactVendor = (index: number) => { };
    const handleSubmitContactOrangebits = (index: number) => { };

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
                                    error={
                                        touched.vendorName && errors.vendorName ? true : false
                                    }
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
                                <FormLabel id="vendorOnbaordDate" {...globalStyles.textFieldLabel}>
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
                    Point of Contact Orangebits{" "}
                </Typography>
            </Box>
            <Card {...styles.card}>
                <Grid container columnSpacing={3} rowGap={3}>
                    {values.contactOrangebits.map((orangebitsContact, contactOrangebitsIndex: any) => (
                        <AddContact
                            values={values.contactOrangebits}
                            index={contactOrangebitsIndex}
                            handleAddContactGlobal={handleAddContactOrangebits}
                            handleRemoveContactGlobal={handleRemoveContactOrangebits}
                            handleSubmitContactGlobal={handleSubmitContactOrangebits}
                        />
                    ))}
                </Grid>
            </Card>

            <Box {...styles.parentBox}>
                <Typography {...globalStyles.moduleTitle} variant="h5">
                    Point of Contact Vendor{" "}
                </Typography>
            </Box>
            <Card {...styles.card}>
                <Grid container columnSpacing={3} rowGap={3}>
                    {values.contactVendor.map((vendor, contactVendorIndex: any) => (
                        <AddContact
                            values={values.contactVendor}
                            index={contactVendorIndex}
                            handleAddContactGlobal={handleAddContactVendor}
                            handleRemoveContactGlobal={handleRemoveContactVendor}
                            handleSubmitContactGlobal={handleSubmitContactVendor}
                        />
                    ))}
                </Grid>
            </Card>
        </Box >
    );
};

export default AddVendor;