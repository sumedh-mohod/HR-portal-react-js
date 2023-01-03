import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import OrangeBitsIcon from "../components/Icons/OrangeBitsIcon";
import { styles } from "../styles/screens/CompanyList";

const CompanyListCard = ({
  companies,
  handleCompanyEditClick,
}: {
  companies: any;
  handleCompanyEditClick: any;
}) => {
  return (
    <>
      {companies?.map((company: any, index: number) => (
        <Grid item xs={12} md={3} lg={3}>
          <Paper
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
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default CompanyListCard;
