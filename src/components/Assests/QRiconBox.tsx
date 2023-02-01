import React from 'react'
import { Box, } from "@mui/material";
import { styles } from "styles/components/assests";
import QRicon from 'components/Icons/QRicon';

const QRiconBox = (props:any) => {
  return (
    <Box {...styles.QRiconBox} onClick={props.onClick}>
    <QRicon />
   </Box>
  )
}

export default QRiconBox
