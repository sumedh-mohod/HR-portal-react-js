import React from "react";
import { Box, Grid, Typography, Card } from "@mui/material";
import { styles } from "../../styles/components/editCompany";
const CompanyDetailsCard = () => {
  const CompanyDetails = [
    {
      company: "Orangebits Software Technologies(India) Pvt. Ltd",
      abbr: "ORNG123",
      defaultCurrency: "Rupees",
      domain: "orange.com",
      dateofEstiblishment: "2 October, 2023",
      addressLine1: "Enter Line 1",
      addressLine2: "Enter Line 2",
      country: "India",
      state: "Maharshtra",
      city: "Nagpur",
    },
  ];
  return (
    <Box>
      <Card sx={{ mt: 3, mb: 3, p: 5 }}>
        <Grid container spacing={3}>
          {CompanyDetails.map((item) => {
            return (
              <Box {...styles.detailsParentBox} >
                <Grid item xs={12} md={2} lg={4}>
                  <Typography {...styles.detailsTypography1}>Company -</Typography>
                  <Typography {...styles.detailsTypography1}>Abbr -</Typography>
                  <Typography {...styles.detailsTypography1}>Default Currency -</Typography>
                  <Typography {...styles.detailsTypography1}>Domain -</Typography>
                  <Typography {...styles.detailsTypography1}>Date of Estiblishment -</Typography>
                  <Typography {...styles.detailsTypography1}>Address Line 1 -</Typography>
                  <Typography {...styles.detailsTypography1}>Address Line 2 -</Typography>
                  <Typography {...styles.detailsTypography1}>Country -</Typography>
                  <Typography {...styles.detailsTypography1}>State -</Typography>
                  <Typography {...styles.detailsTypography1}>City -</Typography>
                </Grid>
                <Grid item xs={12} md={10} lg={8}>
                  <Typography {...styles.detailsTypography2}>{item.company}</Typography>
                  <Typography {...styles.detailsTypography2}>{item.abbr}</Typography>
                  <Typography {...styles.detailsTypography2}>{item.defaultCurrency}</Typography>
                  <Typography {...styles.detailsTypography2}>{item.domain} </Typography>
                  <Typography {...styles.detailsTypography2}>{item.dateofEstiblishment}</Typography>
                  <Typography {...styles.detailsTypography2}> {item.addressLine1} </Typography>
                  <Typography {...styles.detailsTypography2}> {item.addressLine2} </Typography>
                  <Typography {...styles.detailsTypography2}> {item.country} </Typography>
                  <Typography {...styles.detailsTypography2}> {item.state} </Typography>
                  <Typography {...styles.detailsTypography2}> {item.city} </Typography>
                </Grid>
              </Box>
            );
          })}
        </Grid>
      </Card>
    </Box>
  );
};

export default CompanyDetailsCard;
