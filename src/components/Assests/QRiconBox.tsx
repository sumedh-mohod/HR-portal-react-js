import React from "react";
import { Box } from "@mui/material";
import { styles } from "styles/components/assests";
import QRicon from "components/Icons/QRicon";

const QRiconBox = () => {
  return (
    <Box {...styles.QRiconBox}>
      <QRicon />
    </Box>
  );
};

export default QRiconBox;
