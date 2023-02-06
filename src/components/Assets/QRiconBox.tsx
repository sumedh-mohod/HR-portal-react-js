import React,{useState} from "react";
import { Box } from "@mui/material";
import { styles } from "styles/components/assets";
import QRicon from "components/Icons/QRicon";
import AssetsModel from "./AssetsModel";

const QRiconBox =  (data:any) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [qrData, setQrData] = useState<any>({});

  const handleEditClick = () => {
      console.log(" row index is",data.index);
      console.log(" row data is",data.data);
      setOpen(true);
      setQrData(data.index?data.index:data.data);   
  }

  return (
    <Box>
    <Box {...styles.QRiconBox} onClick={handleEditClick} >
      <QRicon />
    </Box>
     <AssetsModel
     open={open}
     handleClose={handleClose}
     newData={qrData?.assetsName}
   />
   </Box>
  );
};

export default QRiconBox;
