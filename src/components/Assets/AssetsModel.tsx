import React from "react";
import { Modal, Box,Typography, Button } from "@mui/material";
import { styles } from "styles/components/assets";
import QRCode from "react-qr-code";
// import useSWR from "swr";
const AssetsModel = ({
  handleClose,
  open,
  newData,
}: {
  handleClose: any;
  open: any;
  newData: any;
}) => {
  // const { data, error } = useSWR("/api/user", fetch);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box {...styles.modalBox}>
          <Box {...styles.subModelBox}>
            <Box {...styles.modelTypographyBox}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              {...styles.textField}
            >
              Print Barcode/QR Code
            </Typography>
            <QRCode
              value={newData}
              size={120}
              style={{ margin:"60px" }}
            />
            </Box>
            <Box {...styles.modelButtonBox}>
              <Button onClick={handleClose} {...styles.CancleButton}>Cancle</Button>
              <Button variant="contained" {...styles.PrintButton}>Print</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AssetsModel;
