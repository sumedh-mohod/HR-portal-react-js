import React, { useRef } from "react";
import { useFormik } from "formik";
import { addEmployeeValidator } from "../utils/validations/auth";
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
import { styles } from "../styles/components/addEmployee";
// import { useAppDispatch} from "../store/hooks";
const AddEmployee = () => {
    //   const dispatch = useAppDispatch();
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
            DisplayName: "",
            firstName: "",
            lastName: "",
            employeeId: "",
            designation: "",
            emailId: "",
        },
        validationSchema: addEmployeeValidator,
        onSubmit: (values) => {
            console.log("values of add project", values);
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

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                {/* header Box */}
                <Box {...styles.parentBox}>
                    <Typography variant="h5">Add Employee</Typography>
                    <Box>
                        <Button {...styles.parentBoxCancleButton} variant="contained">
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
                <Card {...styles.card}>
                    <Grid container spacing={2}>
                        {/* uplaod Logo */}
                        <Grid item xs={12} md={6} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel id="logo">Upload Logo*</FormLabel>
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
                                    // inputProps={{ maxLength: 12 }}
                                    // sx={{"textOverflow":"ellipsis"}}
                                    {...styles.logoTextfield}

                                    InputProps={{

                                        endAdornment: (
                                            <Button
                                                onClick={handleClick}
                                                size="small"
                                                {...styles.selectFileButton}
                                            >
                                                {" "}
                                                Select File
                                            </Button>
                                        ),
                                    }}
                                ></TextField>
                            </FormControl>
                        </Grid>
                        {/* Display name */}
                        <Grid item xs={12} md={6} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel id="displayName">Display Name*</FormLabel>
                                <TextField
                                    type={"text"}
                                    variant="filled"
                                    size="small"
                                    name="DisplayName"
                                    value={values.DisplayName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.DisplayName && errors.DisplayName ? true : false}
                                    helperText={touched.DisplayName && errors.DisplayName}
                                />
                            </FormControl>
                        </Grid>
                        {/* First name */}
                        <Grid item xs={12} md={6} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel id="firstName">First Name</FormLabel>
                                <TextField
                                    type={"text"}
                                    variant="filled"
                                    size="small"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        {/* last name*/}
                        <Grid item xs={12} md={6} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel id="lastName">Last Name</FormLabel>
                                <TextField
                                    type={"text"}
                                    variant="filled"
                                    size="small"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        {/* employee id  */}
                        <Grid item xs={12} md={6} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel id="employeeId">Employee Id</FormLabel>
                                <TextField
                                    type={"text"}
                                    variant="filled"
                                    size="small"
                                    name="employeeId"
                                    value={values.employeeId}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        {/* designation */}
                        <Grid item xs={12} md={6} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel id="designation">Designation</FormLabel>
                                <TextField
                                    type={"text"}
                                    variant="filled"
                                    size="small"
                                    name="designation"
                                    value={values.designation}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                        {/* email id */}
                        <Grid item xs={12} md={6} lg={3}>
                            <FormControl fullWidth>
                                <FormLabel id="emailId">Email id</FormLabel>
                                <TextField
                                    type={"text"}
                                    variant="filled"
                                    size="small"
                                    name="emailId"
                                    value={values.emailId}
                                    onChange={handleChange}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Card>
            </form>
        </Box>
    );
};

export default AddEmployee;
