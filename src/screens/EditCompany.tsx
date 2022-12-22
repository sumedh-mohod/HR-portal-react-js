import React from "react";
import {
  Box,
  Container,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
const EditCompany = () => {
  return (
    <Container sx={{ p: 3 }}>
      {/* ----------company1 start------------- */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          alignContent: "flex-start",
          mt: 2,
        }}
      >
        <Typography variant="h5">Company 1</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#F58634",
            borderRadius: "5px",
            textTransform: "inherit",
          }}
        >
          <CreateIcon sx={{ pr: 1, fontSize: "medium" }} />
          Edit
        </Button>
      </Box>
      {/* form fielsds started */}
      <Grid
        container
        spacing={2}
        sx={{ p: 5, mt: 5, border: "1px solid #DFDFDF" }}
      >
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="company">Company*</FormLabel>
            <TextField name="company" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
            <TextField name="defaultLetterHead" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="abbr">Abbr*</FormLabel>
            <TextField name="abbr" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="taxID">Tax ID</FormLabel>
            <TextField name="taxID" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="defaultCurrency">Default Currency*</FormLabel>
            <TextField name="defaultCurrency" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="domain">Domain</FormLabel>
            <TextField name="domain" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
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
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="dateOfEstablishment">
              Date of Establishment
            </FormLabel>
            <TextField
              name="dateOfEstablishment"
              variant="filled"
              size="small"
            />
          </FormControl>
        </Grid>
      </Grid>

      {/* ------------Holiday start ------------------*/}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Holiday</Typography>
      </Box>
      {/* holiday form field start */}
      <Grid
        container
        spacing={2}
        sx={{ p: 5, mt: 5, border: "1px solid #DFDFDF" }}
      >
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="company">Company*</FormLabel>
            <TextField name="company" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
            <TextField name="defaultLetterHead" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="abbr">Abbr*</FormLabel>
            <TextField name="abbr" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="taxID">Tax ID</FormLabel>
            <TextField name="taxID" variant="filled" size="small" />
          </FormControl>
        </Grid>
      </Grid>

      {/*-------------------- Designation start -----------*/}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5">Designation</Typography>
      </Box>
      {/* Designation form field start */}
      <Grid
        container
        spacing={2}
        sx={{ p: 5, mt: 5, border: "1px solid #DFDFDF" }}
      >
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="company">Company*</FormLabel>
            <TextField name="company" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="defaultLetterHead">Default Letter Head*</FormLabel>
            <TextField name="defaultLetterHead" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="abbr">Abbr*</FormLabel>
            <TextField name="abbr" variant="filled" size="small" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <FormControl fullWidth>
            <FormLabel id="taxID">Tax ID</FormLabel>
            <TextField name="taxID" variant="filled" size="small" />
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditCompany;
