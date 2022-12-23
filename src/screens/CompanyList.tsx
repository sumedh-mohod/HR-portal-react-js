import React from "react";
import { Grid, Typography, Paper, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import OrangeBitsIcon from "../components/Icons/OrangeBitsIcon";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";

const companies = [
  {
    name: "E-zest Solutions",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,dolore expedita exercitationem, excepturi, eligendi ullam mollitia maiores deleniti nisi itaque dignissimos alias dicta id autem necessitatibus distinctio. Voluptatibus, inventore sed!",
  },
  {
    name: "Orangebits Technologies",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,dolore expedita exercitationem, excepturi, eligendi ullam mollitia maiores deleniti nisi itaque dignissimos alias dicta id autem necessitatibus distinctio. Voluptatibus, inventore sed!",
  },
];

const CompanyList = () => {
  const navigate = useNavigate();

  const handleCompanyClick = () => {
    navigate("/companies/add");
  };

  const handleCompanyEditClick = () => {
    navigate("/companies/edit");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          alignContent: "flex-start",
          mt: 2,
        }}
      >
        <Typography variant="h5">Company</Typography>
        <Box>
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
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {companies.map((company) => (
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              elevation={3}
              onClick={handleCompanyEditClick}
              sx={{
                p: 3,
                fontSize: "16px",
                height: "auto",
                cursor: "pointer",
              }}
            >
              <OrangeBitsIcon width={40} />
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                  mt: 2,
                }}
              >
                {company.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  fontFamily: "Montserrat",
                  color: "#9FA2B4",
                }}
              >
                {company.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            elevation={3}
            onClick={handleCompanyClick}
            sx={{
              p: 3,
              fontSize: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "210px",
              maxHeight: "210px",
              outline: "2px dashed #9FA2B4",
              cursor: "pointer",
            }}
          >
            <AddIcon fontSize="large" sx={{ pr: 2 }} />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "Montserrat",
              }}
            >
              Add Company
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CompanyList;
