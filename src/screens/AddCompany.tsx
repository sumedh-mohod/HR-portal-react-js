import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";

const AddCompany = () => {
  return (
    <Container sx={{ p: 5 }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 80px",
          justifyItems: "center",
          alignContent: "flex-start",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            fontSize: "20px",
            letterSpacing: "0.3px",
            color: "#252733",
          }}
        >
          New Company
        </h2>
        <Button
          variant="contained"
          sx={{
            width: "90px",
            height: "32px",
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
            <FormLabel id="company">Company</FormLabel>
            <TextField name="company" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="defaultLetterHead">Default Letter Head</FormLabel>
            <TextField variant="filled" name="defaultLetterHead" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="abbr">Abbr</FormLabel>
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
            <FormLabel id="defaultCurrency">Default Currency</FormLabel>
            <TextField variant="filled" name="defaultCurrency" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="domain">Domain</FormLabel>
            <TextField variant="filled" name="Domain" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="country">Country</FormLabel>
            <TextField variant="filled" name="country" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="dateOfEstablishment">
              Date of Establishment
            </FormLabel>
            <TextField
              variant="filled"
              name="dateOfEstablishment"
              size="small"
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
            <TextField variant="filled" name="parentsCompany" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={6}>
          <FormControl fullWidth>
            <FormLabel id="defaultHollidayList">
              Default Holliday List
            </FormLabel>
            <TextField
              variant="filled"
              name="defaultHollidayList"
              size="small"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddCompany;
