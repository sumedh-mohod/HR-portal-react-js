import React, { useState } from "react";
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
  const [holidays, setHolidays] = useState([
    {
      holidayName: "",
      selectDate: "",
    },
  ],);

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
    // validationSchema: addHolidayValidator,
    onSubmit: (values) => {
      console.log("value", values);
    },
  });

  const handleAddHoliday = () => {
    const newHoliday = [
      ...holidays,
      {
        holidayName: "",
        selectDate: "",
      },
    ];
    setHolidays(newHoliday);
  };

  const handleRemoveHoliday = (index: number) => {
    const newHoliday = [...holidays];
    newHoliday.splice(index, 1);
    setHolidays(newHoliday);
  };

  const handleChangeHolidayName = (event: any, index: number) => {
    let changedName = event.target.value;
    let newHoliday = [...holidays];
    newHoliday[index].holidayName = changedName;
    setHolidays(newHoliday);
  };

  const handleChangeSelectDate = (event: any, index: number) => {
    let changedDate = event.target.value;
    let newHoliday = [...holidays];
    newHoliday[index].selectDate = changedDate;
    setHolidays(newHoliday);
  };

  const handleSubmitHoliday = (index: number) => {
    console.log("holidays data", holidays);
  };

  return (
    <Box>
      <Card sx={{ mt: 3, mb: 3, p: 5 }}>
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={3} rowGap={3}>
            {holidays.map((holiday, index: any) => (
              <>
                <Grid item xs={12} md={6} lg={3}>
                  <FormControl fullWidth>
                    <FormLabel
                      id="holidayName"
                      {...globalStyles.textFieldLabel}
                    >
                      Holiday Name
                    </FormLabel>
                    <TextField
                      name="holidayName"
                      variant="filled"
                      size="small"
                      value={(holidays && holidays[index].holidayName) || ""}
                      onChange={(event) => {
                        handleChangeHolidayName(event, index);
                      }}
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
                      value={(holidays && holidays[index].selectDate) || ""}
                      onChange={(event) => {
                        handleChangeSelectDate(event, index);
                      }}
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
                    <Button
                      sx={{ width: "100%", height: "100%" }}
                      type="submit"
                    >
                      <SaveTickIcon />
                    </Button>
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
                    {holidays.length - 1 === index ? (
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
