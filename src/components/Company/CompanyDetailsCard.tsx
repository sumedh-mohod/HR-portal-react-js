import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, Grid, Typography, Card, Container, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCompany } from "../../store/reducers/companies/companies";
import { styles } from "../../styles/components/editCompany";
import Loader from "../HigherOrder/Loader";
import EditIcon from "@mui/icons-material/Edit";
import CompanyAddressDetailsCard from "./CompanyAddressDetailsCard";
interface CompanyDetailsCardInterface {
  data: any;
}
const CompanyDetailsCard = (props: CompanyDetailsCardInterface) => {
  const { data } = props;

  const dispatch = useAppDispatch();
  const companyStore = useAppSelector((state) => state.companies);

  const { isLoadingRequest, companies } = companyStore;
  console.log("company data from companyDetailsCard.tsx", companies)

useEffect(() => {
  dispatch(getCompany(data))
    .unwrap()
    .then((response: any) => {
      console.log("useeffect response from companyDetailsCard.tsx",response.data);
     })
    .catch((error) => { });
}, []);

  // const [isEditing, setIsEditing] = useState(false);
  const [editBtn, setEditBtn] = useState(true);

  const navigate = useNavigate();
  const EditHandle = () => {
    // setIsEditing(true);
    setEditBtn(false);
    navigate("/companies/edit");
  };
  
  return (
    <Container sx={{ width: 1 }}>
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

      <Box>
        <Loader isLoading={isLoadingRequest} />
        <Card sx={{ mt: 3, mb: 3, p: 5 }}>
          <Grid container spacing={3}>
            <Box {...styles.detailsParentBox}>
              <Grid item xs={12} md={2} lg={4}>
                <Typography {...styles.detailsTypography1}>
                  Company -
                </Typography>
                <Typography {...styles.detailsTypography1}>Abbr -</Typography>
                <Typography {...styles.detailsTypography1}>
                  Default Currency -
                </Typography>
                <Typography {...styles.detailsTypography1}>Domain -</Typography>
                <Typography {...styles.detailsTypography1}>
                  Date of Estiblishment -
                </Typography>
              </Grid>
              <Grid item xs={12} md={10} lg={8}>
                <Typography {...styles.detailsTypography2}>{companies?.name === null ? "-":companies?.name}</Typography>
                <Typography {...styles.detailsTypography2}>{companies?.abbreviation=== null ? "-":companies?.abbreviation}</Typography>
                <Typography {...styles.detailsTypography2}>{companies?.defaultCurrency === null ? "-":companies?.defaultCurrency}</Typography>
                <Typography {...styles.detailsTypography2}>{companies?.domain === null ?  "-":companies?.domain} </Typography>
                <Typography {...styles.detailsTypography2}>{companies?.dateOfIncorporation === null ? "-":companies?.dateOfIncorporation}</Typography>
              </Grid>
            </Box>
          </Grid>
        </Card>

        {companies?.companyAddresses?.map((info: any) => <CompanyAddressDetailsCard info={info} />)}
      </Box>
    </Container>
  );
};

export default CompanyDetailsCard;
