import { Modal, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#ffff",
  backgroundColor:"#ffff",
  p:2,
  border: "1px solid #DFDFDF",
  boxshadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "5px",
};
const ViewOraganisationalDatamodel = ({
  handleViewClose,
  viewOpen,
  
}: {
  handleViewClose: any;
  viewOpen: any;

}) => {
  
  return (
    <Box>
      <Modal
        open={viewOpen}
        onClose={handleViewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <PictureAsPdfIcon
                fontSize="small"
                sx={{ color: "#F24A4A", mr: 2 }}
              />
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  ms: 2,
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0.2px",
                  color: "#000000",
                }}
              >
                Upload Leave Policy
              </Typography>
            </Box>
            <CloseIcon onClick={handleViewClose} />
          </Box>

          <Divider sx={{p:1}}/>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PictureAsPdfIcon
              sx={{ color: "#F24A4A", fontSize: "45px", mt: 3 }}
            />
            <Typography
              variant="h6"
              component="h2"
              sx={{
                mt: 2,
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.2px",
                color: "#000000",
              }}
            >
              Preview will show here
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ViewOraganisationalDatamodel;
