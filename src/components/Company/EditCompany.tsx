import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CompanyDetailsCard from "./CompanyDetailsCard";
import CompanyEditCard from "./CompanyEditCard";
import { styles } from "../../styles/components/editCompany";

const EditCompany = () => {
  let { params } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editBtn, setEditBtn] = useState(true);
  const [isHollidayEditing, setIsHollidayEditing] = useState(false);
  const [editHollidayBtn, setEditHollidayBtn] = useState(true);

  const navigate = useNavigate();
  const EditHandle = () => {
    setIsEditing(true);
    setEditBtn(false);
  };
  const EditHollidayHandle = () => {
    setIsHollidayEditing(true);
    setEditHollidayBtn(false);
  };
  const handleCancleEdit = () => {
    navigate(-1);
  }
  return (
    <Container sx={{ width: 1 }} >
      {/* toggle card for details and edit form of company */}
      <Box {...styles.box}>
        <Typography variant="h5">Company 1</Typography>
        <Box>
          {/* <Button
            {...styles.parentBoxCancelButton}
            variant="contained"
            onClick={handleCancleEdit}
          >
            Cancle
          </Button> */}
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
      </Box>
      {isEditing ? <CompanyEditCard /> : <CompanyDetailsCard />}
    </Container>
  );
};

export default EditCompany;
