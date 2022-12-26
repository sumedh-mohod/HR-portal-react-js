import React from "react";
import { Grid, Typography, Paper, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import OrangeBitsIcon from "../components/Icons/OrangeBitsIcon";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/CompanyList";

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
        {...styles.companyTitleBox}
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
              {...styles.companyCard}
            >
              <OrangeBitsIcon width={40} />
              <Typography
                variant="h5"
                gutterBottom
                {...styles.companyName}
              >
                {company.name}
              </Typography>
              <Typography
                {...styles.companyDescription}
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
            {...styles.addCompanyCard}
          >
            <AddIcon fontSize="large" sx={{ pr: 2 }} />
            <Typography
              {...styles.addCompanyIcon}
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
