import React from "react";
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/components/partnersList";

const PartnersListCard = ({
  partners,
  handlePartnerEditClick,
  handlePartnerAddClick,
}: {
  partners: any;
  handlePartnerEditClick: any;
  handlePartnerAddClick: any;
}) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {partners?.map((partner: any, index: number) => (
          <Grid item xs={12} md={3} lg={3}>
            <Card
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PartnersListCard;
