import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CompanyDetailsCard from "./CompanyDetailsCard";
import CompanyEditCard from "./CompanyEditCard";
import HolidayCard from "./HolidayCard";
import { styles } from "../styles/components/editCompany";
const EditCompany = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editBtn, setEditBtn] = useState(true);
  const EditHandle = () => {
    setIsEditing(true);
    setEditBtn(false);
  };
  return (
    <Container sx={{ p: 3 }}>
      {/* toggle card for details and edit form of company */}
      <Box {...styles.box}>
        <Typography variant="h5">Company 1</Typography>
        {editBtn && (
          <Button
            {...styles.parentBoxButtonEdit}
            variant="contained"
            type="submit"
            onClick={EditHandle}
          >
            <EditIcon {...styles.icon} /> Edit
          </Button>
        )}
      </Box>
      {isEditing ? <CompanyEditCard /> : <CompanyDetailsCard />}
      
      {/* holiday card start--------- */}
      <Box {...styles.box}>
        <Typography variant="h5">Holiday</Typography>
        <Button
          {...styles.parentBoxButtonSave}
          variant="contained"
          type="submit"
        >
          <SaveIcon {...styles.icon} /> Save
        </Button>
      </Box>
      <HolidayCard />
    </Container>
  );
};

export default EditCompany;
