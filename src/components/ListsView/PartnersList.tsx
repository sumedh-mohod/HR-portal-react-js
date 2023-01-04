import React from "react";
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/components/partnersList";
import { globalStyles } from "../../styles/global";
import AddIcon from "@mui/icons-material/Add";
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
    <><Grid container spacing={2} sx={{ mt: 1 }}>
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
     
      <Grid item xs={12} md={3} lg={3}>
        <Paper
          elevation={3}
          onClick={handlePartnerAddClick}
          {...styles.addPartnerCard}
        >
          <AddIcon fontSize="large" sx={{ pr: 2 }} />
          <Typography {...globalStyles.moduleTitle} {...styles.addPartnerIcon}>
            Add Partner
          </Typography>
        </Paper>
      </Grid>
      </Grid>
    </>
  );
};

export default PartnersListCard;
