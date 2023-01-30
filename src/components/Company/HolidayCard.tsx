import React from "react";
import { useFormik } from "formik";
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
import SaveTickIcon from "components/Icons/SaveTickIcon";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "components/Icons/DeleteIcon";
import { addHolidayValidator } from "utils/validations/auth";
import { styles } from "styles/components/companyHolidayCard";
import { globalStyles } from "styles/global";

let PageSize = 5;

const HolidayCard = () => {
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
      holiday: [
        {
          holidayName: "",
          selectDate: "",
        },
      ],
      id: "",
    },
    validationSchema: addHolidayValidator,
    onSubmit: (values) => {
      console.log("value", values);
    },
  });

  const handleAddHoliday = () => {
    const newHoliday = [
      ...values.holiday,
      {
        holidayname: "",
        selectDate: "",
      },
    ];
    setFieldValue("holiday", newHoliday);
  };

  const handleRemoveHoliday = (index: number) => {
    const newHoliday = [...values.holiday];
    newHoliday.splice(index, 1);
    setFieldValue("holiday", newHoliday);
  };

  const handleSubmitHoliday = (index: number) => {};

  return (
    <Box>
      <Card sx={{ mt: 3, mb: 3, p: 5 }}>
        <form>
          <Grid container columnSpacing={3} rowGap={3}>
            {values.holiday.map((holiday, index) => (
              <>
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel
                      id="holidayname"
                      {...globalStyles.textFieldLabel}
                    >
                      Holiday Name
                    </FormLabel>
                    <TextField
                      name="holidayname"
                      variant="filled"
                      size="small"
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel id="selectDate" {...globalStyles.textFieldLabel}>
                      Select Date*
                    </FormLabel>
                    <TextField
                      type="date"
                      name="selectDate"
                      variant="filled"
                      size="small"
                      // value={values.holiday.selectDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      InputProps={{
                        disableUnderline: true,
                        style: { ...globalStyles.textField },
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={6} {...styles.gridItem}>
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "5px",
                      backgroundColor: "#0FBD35",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mr: 3,
                      cursor: "pointer",
                    }}
                  >
                    <SaveTickIcon />
                  </Box>
                  <Box
                    sx={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "5px",
                      backgroundColor: "#D82A2A",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      handleRemoveHoliday(index);
                    }}
                  >
                    <DeleteIcon fill={"white"} />
                  </Box>
                  <Box>
                    {values.holiday.length - 1 === index ? (
                      <Button {...styles.addButton} onClick={handleAddHoliday}>
                        <AddIcon fontSize="small" {...styles.addIcon} />
                        <Typography sx={{ fontSize: "small" }}>Add</Typography>
                      </Button>
                    ) : null}
                  </Box>
                </Grid>
              </>
            ))}
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default HolidayCard;
