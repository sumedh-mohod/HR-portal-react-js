import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CompanyDetailsCard from "./CompanyDetailsCard";
import CompanyEditCard from "./CompanyEditCard";
import HolidayCard from "./HolidayCard";
import { styles } from "../../styles/components/editCompany";
import { useNavigate, useParams } from "react-router-dom";
import { parse } from "path";
import HollidayDetailsCard from "../Partner/HollidayCard";

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
