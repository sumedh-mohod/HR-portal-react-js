import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/components/partnersList";

const PartnersListCard = ({
  partners,
  handlePartnerEditClick,
}: {
  partners: any;
  handlePartnerEditClick: any;
}) => {
  return (
    <>
      {partners?.map((partner: any, index: number) => (
        <Grid item xs={12} md={3} lg={3}>
          <Paper
            elevation={3}
            onClick={() => handlePartnerEditClick(partner)}
            {...styles.partnerCard}
            key={index}
          >
            <OrangeBitsIcon width={40} />
            <Typography variant="h5" gutterBottom {...styles.partnerName}>
              {partner.company_name}
            </Typography>
            <Box {...styles.partnerDescriptionBox}>
              <Typography {...styles.partnerDescription}>
                {partner.description}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </>
  );
};

export default PartnersListCard;
