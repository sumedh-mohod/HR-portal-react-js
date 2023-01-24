import React, { useRef } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import { globalStyles } from "../../../styles/global";
import { styles } from "../../../styles/components/EmployeeEmploymentHistory";
import DeleteIcon from "../../Icons/DeleteIcon";
const EmploymentHistory = () => {
  const navigate = useNavigate();
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
      employmentHistory: [
        {
          employerName: "",
          startDate: "",
          endDate: "",
          designation: "",
        },
      ],
    },
    // validationSchema: addEmployeeValidator,
    onSubmit: (values) => {
      console.log("values of employment History", values);
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
  const handleEmploymentHistoryAdd = () => {
    console.log("add");
    const newemploymentHistory = [
      ...values.employmentHistory,
      {
        employerName: "",
        startDate: "",
        endDate: "",
        designation: "",
      },
    ];
    setFieldValue("employmentHistory", newemploymentHistory);
  };

  const handleRemoveEmploymentHistory = (index: number) => {
    const newemploymentHistory = [...values.employmentHistory];
    newemploymentHistory.splice(index, 1);
    setFieldValue("employmentHistory", newemploymentHistory);
  };

  const handleChangeEmployerName = (event: any, index: number) => {
    setFieldValue(
      `employmentHistory.${index}.employerName`,
      event.target.value
    );
  };
  const handleChangeStartDate = (event: any, index: number) => {
    setFieldValue(`employmentHistory.${index}.startDate`, event.target.value);
  };
  const handleChangeEndDate = (event: any, index: number) => {
    setFieldValue(`employmentHistory.${index}.endDate`, event.target.value);
  };
  const handleChangeDesignation = (event: any, index: number) => {
    setFieldValue(`employmentHistory.${index}.designation`, event.target.value);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        {/* header Box */}
        <Box {...styles.parentBox}>
          <Typography variant="h5" {...styles.moduleTitle}>
            Employee History
          </Typography>
          <Box>
            <Button
              {...styles.parentBoxEditButton}
              variant="contained"
              type="submit"
              // onClick={EditHandle}
            >
              <EditIcon {...styles.icon} /> Edit
            </Button>
          </Box>
        </Box>
        {/* form fields started */}
        {values.employmentHistory.map((employmentHistory, index) => (
          <>
            <Card sx={{ mt: 3, mb: 3, p: 5 }}>
              <Grid container columnSpacing={3} rowGap={3}>
                {/* Employer Name */}
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel id="employerName" {...styles.textFieldLabel}>
                      Employer Name
                    </FormLabel>
                    <TextField
                      type={"text"}
                      variant="filled"
                      size="small"
                      name="employerName "
                      value={
                        (values.employmentHistory &&
                          values.employmentHistory[index].employerName) ||
                        ""
                      }
                      onChange={(event) => {
                        handleChangeEmployerName(event, index);
                      }}
                      onBlur={handleBlur}
                      // error={
                      //   touched.EmployerName && errors.EmployerName ? true : false
                      // }
                      // helperText={touched.EmployerName && errors.EmployerName}
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                      sx={{
                        "&.MuiInputBase-input": {
                          paddingTop: "7px",
                          border: "1px solid red",
                        },
                      }}
                    />
                  </FormControl>
                </Grid>
                {/* start date */}
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel id="startDate">Start Date</FormLabel>
                    <TextField
                      variant="filled"
                      size="small"
                      type="date"
                      name="startDate"
                      value={
                        (values.employmentHistory &&
                          values.employmentHistory[index].startDate) ||
                        ""
                      }
                      onChange={(event) => {
                        handleChangeStartDate(event, index);
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                    />
                  </FormControl>
                </Grid>
                {/* end date*/}
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel id="endDate">End Date</FormLabel>
                    <TextField
                      variant="filled"
                      size="small"
                      type="date"
                      name="endDate"
                      value={
                        (values.employmentHistory &&
                          values.employmentHistory[index].endDate) ||
                        ""
                      }
                      onChange={(event) => {
                        handleChangeEndDate(event, index);
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                    />
                  </FormControl>
                </Grid>

                {/* designation */}
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel id="designation" {...styles.textFieldLabel}>
                      Designation
                    </FormLabel>
                    <TextField
                      type={"text"}
                      variant="filled"
                      size="small"
                      name="designation"
                      value={
                        (values.employmentHistory &&
                          values.employmentHistory[index].designation) ||
                        ""
                      }
                      onChange={(event) => {
                        handleChangeDesignation(event, index);
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      {...styles.deleteIconBox}
                      onClick={() => {
                        handleRemoveEmploymentHistory(index);
                      }}
                    >
                      <DeleteIcon fill={"#fff"} />
                    </Box>
                    <Box>
                      {values.employmentHistory.length - 1 === index ? (
                        <Button
                          {...styles.addButton}
                          onClick={handleEmploymentHistoryAdd}
                        >
                          <AddIcon fontSize="small" {...styles.addIcon} />
                          <Typography sx={{ fontSize: "small" }}>
                            Add
                          </Typography>
                        </Button>
                      ) : null}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </>
        ))}
      </form>
    </Box>
  );
};

export default EmploymentHistory;
