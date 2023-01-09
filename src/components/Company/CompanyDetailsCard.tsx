import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { styles } from "../../styles/components/editCompany";
const CompanyDetailsCard = () => {
  const CompanyDetails = [
    {
      company: "Orangebits Software Technologies(India) Pvt. Ltd",
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
        <Grid container spacing={3}>
          {CompanyDetails.map((item) => {
            return (
              <Box {...styles.detailsParentBox} >
                <Grid item xs={12} md={2} lg={4}>
                  <Typography {...styles.detailsTypography1}>Company -</Typography>
                  <Typography {...styles.detailsTypography1}>Default Letter Head -</Typography>
                  <Typography {...styles.detailsTypography1}>Default Currency -</Typography>
                  <Typography {...styles.detailsTypography1}>Dmain -</Typography>
                  <Typography {...styles.detailsTypography1}>Abbr -</Typography>
                  <Typography {...styles.detailsTypography1}>Tax ID -</Typography>
                  <Typography {...styles.detailsTypography1}>Country -</Typography>
                  <Typography {...styles.detailsTypography1}>Date of Estiblishment -</Typography>
                </Grid>
                <Grid item xs={12} md={10} lg={8}>
                  <Typography {...styles.detailsTypography2}>{item.company}</Typography>
                  <Typography {...styles.detailsTypography2}>{item.defaultLetterHead}</Typography>
                  <Typography {...styles.detailsTypography2}>{item.defaultCurrency}</Typography>
                  <Typography {...styles.detailsTypography2}>{item.domain} </Typography>
                  <Typography {...styles.detailsTypography2}>{item.abbr}</Typography>
                  <Typography {...styles.detailsTypography2}> {item.taxID} </Typography>
                  <Typography {...styles.detailsTypography2}> {item.country} </Typography>
                  <Typography {...styles.detailsTypography2}>{item.dateofEstiblishment}</Typography>
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
