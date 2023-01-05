import React from "react";
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/screens/CompanyList";
import { globalStyles } from "../../styles/global";
import AddIcon from "@mui/icons-material/Add";

const CompanyCard = ({
  companies,
  handleCompanyEditClick,
}: {
  companies: any;
  handleCompanyEditClick: any;
  handleCompanyAddClick: any;
}) => {
  return (
    <><Grid container spacing={2} sx={{ mt: 1 }}>
      {companies?.map((company: any, index: number) => (
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
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
              {company?.description?.map((des: any) => (
                <>
                  <Typography {...styles.companyDescription}>
                    {des.PAN}{" "}
                  </Typography>
                  <Typography {...styles.companyDescription}>
                    {des.TAN}{" "}
                  </Typography>
                  <Typography {...styles.companyDescription}>
                    {des.GST}{" "}
                  </Typography>
                </>
              ))}
            </Box>
          </Card>
        </Grid>
      ))}
      {/* <Grid item xs={12} md={3} lg={3}>
        <Paper
          elevation={3}
          onClick={handleCompanyAddClick}
          {...styles.addCompanyCard}
        >
          <AddIcon fontSize="large" sx={{ pr: 2 }} />
          <Typography {...globalStyles.moduleTitle} {...styles.addCompanyIcon}>
            Add Company
          </Typography>
        </Paper>
      </Grid> */}
    </Grid>
    </>
  );
};

export default CompanyCard;
