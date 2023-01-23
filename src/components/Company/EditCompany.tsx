import React, { useState, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, Container, Typography, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CompanyDetailsCard from "./CompanyDetailsCard";
import CompanyEditCard from "./CompanyEditCard";
import { styles } from "../../styles/components/editCompany";

interface EditCompanyInterface {
  data: any;
}

const EditCompany = (props: EditCompanyInterface) => {
  const {
    data
  } = props;

  console.log("data in edit company.tsx", data);
  
  let { params } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editBtn, setEditBtn] = useState(true);
  const [isHollidayEditing, setIsHollidayEditing] = useState(false);
  const [editHollidayBtn, setEditHollidayBtn] = useState(true);

  const submitRef:any = useRef();

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
          <Button
            {...styles.parentBoxCancelButton}
            variant="contained"
            onClick={handleCancleEdit}
          >
            Cancle
          </Button>

          <Button
            {...styles.parentBoxButtonEdit}
            variant="contained"
            type="submit"
            onClick={() => submitRef.current.click()}
          >
            Save
          </Button>

        </Box>
      </Box>
      <CompanyEditCard data={data} submitRef={submitRef} />


    </Container>
  );
};

export default EditCompany;
