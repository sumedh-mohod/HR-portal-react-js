import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DocumentsCard from "components/Employee/Tabs/DocumentsCompanyCard";
import { styles } from "styles/components/document(company)";
import SalaryAnexureCard from "components/Employee/Tabs/SalaryAnexureCard";

const DocumentsCompany = () => {
  return (
    <Box>
      <Grid container spacing={2} columnGap={3}>
        <Grid md={4} lg={3}>
          <Typography {...styles.TopTypography} variant="h6">
            Appointment Letter
          </Typography>
          <DocumentsCard pdfTitle={"Appointment Letter.PDF"} />
        </Grid>
        <Grid md={4} lg={3}>
          <Typography {...styles.TopTypography} variant="h6">
            Offer Letter
          </Typography>
          <DocumentsCard pdfTitle={"Offer Letter.PDF"} />
        </Grid>
        <Grid md={4} lg={3}>
          <Typography {...styles.TopTypography} variant="h6">
            Salary Annexure
          </Typography>
          <SalaryAnexureCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentsCompany;
