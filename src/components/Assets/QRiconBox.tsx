import React from "react";
import { Box } from "@mui/material";
import { styles } from "styles/components/assets";
import QRicon from "components/Icons/QRicon";

const QRiconBox = (props:any) => {
  return (
    <Box {...styles.QRiconBox}>
      <QRicon />
    </Box>
  );
};

export default QRiconBox;
