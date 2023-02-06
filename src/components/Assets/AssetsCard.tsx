import React from "react";
import { Grid, Typography, Paper, Box, Card } from "@mui/material";
import { styles } from "styles/components/assets";
import { useNavigate } from "react-router-dom";
import QRiconBox from "./QRiconBox";

const AssetsCard = ({
  Assets,
  handleAssetsDetailsClick,
  handleAssetsAddClick,
}: {
  Assets: any;
  handleAssetsDetailsClick: any;
  handleAssetsAddClick: any;

}) => {
  const navigate = useNavigate();
  return (
    <Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {Assets?.map((asset: any, index: number) => (
          <Grid item xs={12} md={3} lg={3}>
            <Card
              elevation={3}
              {...styles.assetsCard}
              key={index}
            >
              <Box onClick={() => handleAssetsDetailsClick(asset)}>
                <Typography variant="h5" gutterBottom {...styles.assetsName}>
                  {asset.assetsName}
                </Typography>
                <Box {...styles.assetsDescriptionBox}>
                  <Typography {...styles.assetsDescription}>
                    Category:
                    <Typography {...styles.assetsDescriptionValue}>
                      {asset.assetsName}
                    </Typography>
                  </Typography>
                  <Typography {...styles.assetsDescription}>
                    Sub-Category:
                    <Typography {...styles.assetsDescriptionValue}>
                      {asset.subCategory}
                    </Typography>
                  </Typography>
                  <Typography {...styles.assetsDescription}>
                    Description:{" "}
                    <Typography {...styles.assetsDescriptionValue}>
                      {asset.description}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box {...styles.assetsDescriptionBox2}>
                <Typography {...styles.assetsDescription}>
                  Print Barcode/QR Code
                </Typography>
                <Box>
              <QRiconBox  index={asset}/>
              </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AssetsCard;
