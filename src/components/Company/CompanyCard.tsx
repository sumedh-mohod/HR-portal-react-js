import React from "react";
import { Grid, Typography, Box, Card } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/screens/CompanyList";

const CompanyCard = ({
  companies,
  handleCompanyEditClick,
}: {
  companies: any;
  handleCompanyEditClick: any;
  handleCompanyAddClick: any;
}) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {companies?.map((company: any, index: number) => (
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Card
              elevation={3}
              onClick={() => handleCompanyEditClick(company)}
              {...styles.companyCard}
              key={index}
            >
              <OrangeBitsIcon width={40} />
              <Typography variant="h5" gutterBottom {...styles.companyName}>
                {company.name}
              </Typography>
              <Box {...styles.companyDescriptionBox}>
                <>
                  <Typography {...styles.companyDescription}>
                    PAN - {company.PAN}{" "}
                  </Typography>
                  <Typography {...styles.companyDescription}>
                    TAN - {company.TAN}{" "}
                  </Typography>
                  <Typography {...styles.companyDescription}>
                    GST - {company.GST}{" "}
                  </Typography>
                </>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyCard;
