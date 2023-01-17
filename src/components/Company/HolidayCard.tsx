import React from "react";
import { Box, Button, Grid, FormControl, FormLabel, TextField, Typography, Card, } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { styles } from "../../styles/components/editCompany";
const HolidayCard = () => {
  return (
    <Box>
      <Card sx={{ mt: 3, mb: 3, p: 5 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="holidayname">Holiday Name</FormLabel>
                <TextField
                  name="holidayname"
                  variant="filled"
                  size="small"
                // value={values.holidayname}
                // onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="selectDate">Select Date*</FormLabel>
                <TextField
                  type="date"
                  name="selectDate"
                  variant="filled"
                  size="small"
                // value={values.selectDate}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // error={touched.selectDate && errors.selectDate ? true : false}
                // helperText={touched.selectDate && errors.selectDate}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={6} {...styles.gridItem}>
              <Button
                variant="contained"
                type="submit"
                {...styles.gridItemSaveButton}
              >
                <SaveIcon {...styles.icon} />
                Save
              </Button>
              <Button variant="contained" {...styles.gridItemRemoveButton}>
                <HighlightOffIcon sx={{ pr: 1, fontSize: "inheit" }} />
                Remove
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="holidayname">Holiday Name</FormLabel>
                <TextField
                  name="holidayname"
                  variant="filled"
                  size="small"
                // value={values.holidayname}
                // onChange={handleChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <FormControl fullWidth>
                <FormLabel id="selectDate">Select Date*</FormLabel>
                <TextField
                  type="date"
                  name="selectDate"
                  variant="filled"
                  size="small"
                // value={values.selectDate}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // error={touched.selectDate && errors.selectDate ? true : false}
                // helperText={touched.selectDate && errors.selectDate}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6} lg={6} {...styles.gridItem}>
              <Button
                variant="contained"
                type="submit"
                {...styles.gridItemSaveButton1}
              >
                <SaveIcon sx={{ pr: 1, fontSize: "inheit" }} />
                Save
              </Button>
              <Button
                variant="contained"
                type="submit"
                {...styles.gridItemRemoveButton}
              >
                <HighlightOffIcon sx={{ pr: 1, fontSize: "inheit" }} />
                Remove
              </Button>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Button variant="contained" type="submit" {...styles.addButton}>
                <AddCircleOutlineIcon {...styles.icon} />
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default HolidayCard;
