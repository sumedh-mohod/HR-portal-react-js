import React, { useEffect } from "react";
import { Grid, Typography, Paper, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/CompanyList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { companylist } from "../store/reducers/companies/companies";
import CompanyListCard from "../components/CompanyListCard";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";
import IconButton from "@mui/material/IconButton";

const CompanyList = () => {
  const dispatch = useAppDispatch();
  const companyStore = useAppSelector((state) => state.companies);
  const { isLoadingRequest, companies } = companyStore;
  const navigate = useNavigate();

  const handleCompanyClick = () => {
    navigate("/companies/add");
  };

  const handleCompanyEditClick = (company: any) => {
    navigate("/companies/edit", {
      state: { company },
    });
  };

  useEffect(() => {
    dispatch(companylist())
      .unwrap()
      .then((response: any) => {
        // navigate("/companies");
      })
      .catch((error) => {});
  }, []);

  return (
    <Container>
      {/* box for search bar and company */}
      <Box {...styles.companyTitleBox}>
        <Typography variant="h5">Company</Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconButton
            sx={{
              padding: "5px",
              borderRadius: "5px",
              border: "solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "grey",
              borderWidth: "thin",
              mr: "10px",
              cursor: "pointer",
            }}
            // disabled
            onClick={() => {}}
          >
            <GridViewOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              padding: "5px",
              borderRadius: "5px",
              border: "solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "grey",
              borderWidth: "thin",
              mr: "10px",
              cursor: "pointer",
            }}
            // disabled
            onClick={() => {}}
          >
            <FormatListBulletedOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              padding: "5px",
              borderRadius: "5px",
              border: "solid",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "grey",
              borderWidth: "thin",
              cursor: "pointer",
            }}
            // disabled
            onClick={() => {}}
          >
            <ViewColumnOutlinedIcon />
          </IconButton>
          <TextField
            sx={{ ml: 2 }}
            size="small"
            id="standard-bare"
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <CompanyListCard
          companies={companies}
          handleCompanyEditClick={handleCompanyEditClick}
        />
        <Grid item xs={12} md={3} lg={3}>
          {/* Card for add company */}
          <Paper
            elevation={3}
            onClick={handleCompanyClick}
            {...styles.addCompanyCard}
          >
            <AddIcon fontSize="large" sx={{ pr: 2 }} />
            <Typography {...styles.addCompanyIcon}>Add Company</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompanyList;
