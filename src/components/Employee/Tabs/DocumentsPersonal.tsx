import React from "react";
import { Box, Typography, Card, Grid, Divider } from "@mui/material";
import DocumentsPersonalCard from "components/Employee/Tabs/DocumentsPersonalCard";
import { styles } from "styles/components/employeeDocumentPersonalCard";
const DocumentsPersonal = () => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Typography {...styles.TopTypography} variant="h6">
            Resume
          </Typography>
          <DocumentsPersonalCard pdfTitle="Resume.PDF" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Typography {...styles.TopTypography} variant="h6">
            Passport
          </Typography>
          <DocumentsPersonalCard pdfTitle="Passport.PDF" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Typography {...styles.TopTypography} variant="h6">
            Aadhar Card
          </Typography>
          <DocumentsPersonalCard pdfTitle="Aadhar Card.PDF" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Typography {...styles.TopTypography} variant="h6">
            PAN Card
          </Typography>
          <DocumentsPersonalCard pdfTitle="PAN Card.PDF" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentsPersonal;
