import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { styles } from "../styles/components/editCompany";
const CompanyDetailsCard = () => {
  const CompanyDetails = [
    {
      company: "Company 1",
      defaultLetterHead: "ORNG123",
      defaultCurrency: "Rupees",
      domain: "orange.com",
      abbr: "ORNG123",
      taxID: "TAX123",
      country: "india",
      dateofEstiblishment: "2 October, 2023",
    },
    {
      company: "Company 1",
      defaultLetterHead: "ORNG123",
      defaultCurrency: "Rupees",
      domain: "orange.com",
      abbr: "ORNG123",
      taxID: "TAX123",
      country: "india",
      dateofEstiblishment: "2 October, 2023",
    },
    {
      company: "Company 1",
      defaultLetterHead: "ORNG123",
      defaultCurrency: "Rupees",
      domain: "orange.com",
      abbr: "ORNG123",
      taxID: "TAX123",
      country: "india",
      dateofEstiblishment: "2 October, 2023",
    },
  ];
  return (
    <Box>
      <Card sx={{ mt: 3, mb: 3, p: 5 }}>
        <Grid container spacing={2}>
          {CompanyDetails.map((item) => {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <Box {...styles.detailsParentBox} >
                  <Box {...styles.detailsParentSubBox}>
                    <Typography {...styles.detailsTypography1}>Company -</Typography>
                    <Typography {...styles.detailsTypography1}>Default Letter Head -</Typography>
                    <Typography {...styles.detailsTypography1}>Default Currency -</Typography>
                    <Typography {...styles.detailsTypography1}>Dmain -</Typography>
                    <Typography {...styles.detailsTypography1}>Abbr -</Typography>
                    <Typography {...styles.detailsTypography1}>Tax ID -</Typography>
                    <Typography {...styles.detailsTypography1}>Country -</Typography>
                    <Typography {...styles.detailsTypography1}>Date of Estiblishment -</Typography>
                  </Box>
                  <Box {...styles.detailsParentSubBox}>
                    <Typography {...styles.detailsTypography2}>{item.company}</Typography>
                    <Typography {...styles.detailsTypography2}>{item.defaultLetterHead}</Typography>
                    <Typography {...styles.detailsTypography2}>{item.defaultCurrency}</Typography>
                    <Typography {...styles.detailsTypography2}>{item.domain} </Typography>
                    <Typography {...styles.detailsTypography2}>{item.abbr}</Typography>
                    <Typography {...styles.detailsTypography2}> {item.taxID} </Typography>
                    <Typography {...styles.detailsTypography2}> {item.country} </Typography>
                    <Typography {...styles.detailsTypography2}>{item.dateofEstiblishment}</Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </Box>
  );
};

export default CompanyDetailsCard;
