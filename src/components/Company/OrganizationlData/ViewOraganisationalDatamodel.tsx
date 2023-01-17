import { Modal, Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PdfIcon from "../../Icons/PdfIcon";
import { globalStyles } from "../../../styles/global";
import { styles } from "../../../styles/components/organizationData";

const ViewOraganisationalDatamodel = ({
  handleViewClose,
  viewOpen,
  newCardData,
}: {
  handleViewClose: any;
  viewOpen: any;
  newCardData: any;
}) => {
  console.log("new card data from view", newCardData);
  return (
    <Box>
      <Modal
        open={viewOpen}
        onClose={handleViewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box {...styles.modalBox}>
          <Box
            sx={{
              p: 2,
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
              {newCardData?.subIcon}
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                {...styles.textField}
              >
                {newCardData?.File_name}
              </Typography>
            </Box>
            <CloseIcon  sx={{cursor:"pointer"} }onClick={handleViewClose} />
          </Box>

          <Divider />
          <Box
            sx={{
              p: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {newCardData?.mainIcon}
            <Typography
              variant="h6"
              component="h2"
              sx={{
                mt: 2,
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "12px",
                letterSpacing: "0.2px",
                color: "#000000",
                pb: 5,  
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
