import React from "react";
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import OrangeBitsIcon from "components/Icons/OrangeBitsIcon";
import { styles } from "styles/components/vendorList";

const VendorCard = ({
  vendors,
  handleVendorEditClick,
}: {
  vendors: any;
  handleVendorEditClick: any;
  handleVendorAddClick: any;
}) => {
  return (
    <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {vendors?.map((vendor: any, index: number) => (
          <Grid item xs={12} md={3} lg={3}>
            <Card
              elevation={3}
              onClick={() => handleVendorEditClick(vendor)}
              {...styles.vendorCard}
              key={index}
            >
              <OrangeBitsIcon width={40} />
              <Typography variant="h5" gutterBottom {...styles.vendorName}>
                {vendor.vendor_name}
              </Typography>
              <Box {...styles.vendorDescriptionBox}>
                <Typography {...styles.vendorDescription}>
                  {vendor.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VendorCard;
