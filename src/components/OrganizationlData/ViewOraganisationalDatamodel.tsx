import { Modal, Box } from "@mui/material";
import React from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
          <h1> hiii</h1>
        </Box>
      </Modal>
    </Box>
  );
};

export default ViewOraganisationalDatamodel;
