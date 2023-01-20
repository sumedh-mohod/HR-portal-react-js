import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Box, Grid, Typography, Card, Container, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCompany } from "../../store/reducers/companies/companies";
import { styles } from "../../styles/components/editCompany";
import Loader from "../HigherOrder/Loader";
import EditIcon from "@mui/icons-material/Edit";
interface CompanyDetailsCardInterface {
  data: any;
}
const CompanyDetailsCard = (props: CompanyDetailsCardInterface) => {
  const { data } = props;

  console.log("data in details card", data);

  const dispatch = useAppDispatch();
  const companyStore = useAppSelector((state) => state.companies);
  const { isLoadingRequest, companies } = companyStore;
  console.log("edit company", companies);

  // useEffect(() => {
  //   dispatch(getCompany())
  //     .unwrap()
  //     .then((response: any) => { })
  //     .catch((error) => { });
  // }, []);

  const CompanyDetails = [
    {
      company: "Orangebits Software Technologies(India) Pvt. Ltd",
      abbr: "ORNG123",
      defaultCurrency: "Rupees",
      domain: "orange.com",
      dateofEstiblishment: "2 October, 2023",
      addressLine1: "Enter Line 1",
      addressLine2: "Enter Line 2",
      country: "India",
      state: "Maharshtra",
      city: "Nagpur",
    },
  ];
  const [isEditing, setIsEditing] = useState(false);
  const [editBtn, setEditBtn] = useState(true);
  const [isHollidayEditing, setIsHollidayEditing] = useState(false);
  const [editHollidayBtn, setEditHollidayBtn] = useState(true);

  const navigate = useNavigate();
  const EditHandle = () => {
    setIsEditing(true);
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
                <Typography {...styles.detailsTypography1}>
                  Address Line 1 -
                </Typography>
                <Typography {...styles.detailsTypography1}>
                  Address Line 2 -
                </Typography>
                <Typography {...styles.detailsTypography1}>
                  Country -
                </Typography>
                <Typography {...styles.detailsTypography1}>State -</Typography>
                <Typography {...styles.detailsTypography1}>City -</Typography>
              </Grid>
              <Grid item xs={12} md={10} lg={8}>
                <Typography {...styles.detailsTypography2}>
                  {data.name}
                </Typography>
                <Typography {...styles.detailsTypography2}>
                  {data.abbreviation}
                </Typography>
                <Typography {...styles.detailsTypography2}>
                  {data.defaultCurrency}
                </Typography>
                <Typography {...styles.detailsTypography2}>
                  {data.domain}{" "}
                </Typography>
                <Typography {...styles.detailsTypography2}>
                  {data.dateOfIncorporation}
                </Typography>
                {data?.companyAddresses.map((info: any) => {
                  return (
                    <>
                      <Typography {...styles.detailsTypography2}>
                        {" "}
                        {info.line1}
                      </Typography>
                      <Typography {...styles.detailsTypography2}>
                        {" "}
                        {info.line2}{" "}
                      </Typography>
                      <Typography {...styles.detailsTypography2}>
                        {" "}
                        {info.country}{" "}
                      </Typography>
                      <Typography {...styles.detailsTypography2}>
                        {" "}
                        {info.state}{" "}
                      </Typography>
                      <Typography {...styles.detailsTypography2}>
                        {" "}
                        {info.city}{" "}
                      </Typography>
                    </>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
};

export default CompanyDetailsCard;
