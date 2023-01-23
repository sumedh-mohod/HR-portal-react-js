import React from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
import { styles } from "../../styles/components/editCompany";

interface CompanyAddressDetailsCardInterface {
  info: any;
}
const CompanyAddressDetailsCard = (
  props: CompanyAddressDetailsCardInterface
) => {
  const { info } = props;
  console.log("info", info);
  return (
    <Box>
      <Typography variant="h5">Address 1</Typography>
      <Card sx={{ mt: 3, mb: 3, p: 5 }}>
        <Grid container spacing={3}>
          <Box {...styles.detailsParentBox}>
            <Grid item xs={12} md={12} lg={14}>
              <Box {...styles.typographyBox}>
                <Typography {...styles.detailsTypography1}>
                  Address Line 1 -
                </Typography>
                <Typography {...styles.detailsTypography2}>
                  {info.line1}
                </Typography>
              </Box>
              <Box {...styles.typographyBox}>
                <Typography {...styles.detailsTypography1}>
                  Address Line 2 -
                </Typography>
                <Typography {...styles.detailsTypography2}>
                  {info.line2}
                </Typography>
              </Box>
              <Box {...styles.typographyBox}>
                <Typography {...styles.detailsTypography1}>
                  Country -
                </Typography>
                <Typography {...styles.detailsTypography2}>
                  {info.country}
                </Typography>
              </Box>
              <Box {...styles.typographyBox}>
                <Typography {...styles.detailsTypography1}>State -</Typography>
                <Typography {...styles.detailsTypography2}>
                  {info.state}
                </Typography>
              </Box>
              <Box {...styles.typographyBox}>
                <Typography {...styles.detailsTypography1}>City -</Typography>
                <Typography {...styles.detailsTypography2}>
                  {info.city}
                </Typography>
              </Box>
              <Box {...styles.typographyBox}>
                <Typography {...styles.detailsTypography1}>
                  Postal Code -
                </Typography>
                <Typography {...styles.detailsTypography2}>
                  {info.postalCode}
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Card>
    </Box>
  );
};

export default CompanyAddressDetailsCard;
