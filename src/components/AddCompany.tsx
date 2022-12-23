import React from "react";
import {
  Box,
  Container,
  Button,
  Grid,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

const AddCompany = () => {
  return (
    <Container sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 80px",
          // justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">New Company</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F58634",
            borderRadius: "5px",
          }}
        >
          Save
        </Button>
      </Box>

      {/* form fields started */}
      <Grid container spacing={5} sx={{ padding: "10px 80px" }}>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="company">Company*</FormLabel>
            <TextField name="company" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
            <TextField name="defaultLetterHead" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="abbr">Abbr*</FormLabel>
            <TextField name="abbr" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="taxID">Tax ID</FormLabel>
            <TextField name="taxID" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="defaultCurrency">Default Currency*</FormLabel>
            <TextField name="defaultCurrency" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="domain">Domain</FormLabel>
            <TextField name="domain" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="country">Country*</FormLabel>
            <Select
              variant="filled"
              size="small"
              labelId="country"
              id="country"
              defaultValue="India"
            >
              <MenuItem value="India">India</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="dateOfEstablishment">
              Date of Establishment
            </FormLabel>
            <TextField
              name="dateOfEstablishment"
              variant="filled"
              size="small"
              type="date"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Is Group"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="parentsCompany">Parents Company</FormLabel>
            <TextField name="parentsCompany" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="defaultHollidayList">
              Default Holliday List
            </FormLabel>
            <TextField
              name="defaultHollidayList"
              variant="filled"
              size="small"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddCompany;
