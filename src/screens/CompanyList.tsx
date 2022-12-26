import React from "react";
import { Grid, Typography, Paper, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import OrangeBitsIcon from "../components/Icons/OrangeBitsIcon";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/CompanyList";

// array of objects of companies

const companies = [
  {
    name: "Orangebits Software Technologies(India) Pvt. Ltd",
    description:
      [
        { PAN: "PAN - AYAPN7894N" },
        { TAN: "TAN - AYAPN7894N" },
        { GST: "GST - AYAPN7894N" }
      ]

  },
  {
    name: "Orangebits Software Technologies(India) Pvt. Ltd",
    description:
      [
        { PAN: "PAN - AYAPN7894N" },
        { TAN: "TAN - AYAPN7894N" },
        { GST: "GST - AYAPN7894N" }
      ]
  },
  {
    name: "Orangebits Software Technologies(India) Pvt. Ltd",
    description:
      [
        { PAN: "PAN - AYAPN7894N" },
        { TAN: "TAN - AYAPN7894N" },
        { GST: "GST - AYAPN7894N" }
      ]
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

      {/* box for search bar and company */}

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

      {/* Grid container for companies */}

      <Grid container spacing={2} sx={{ mt: 1 }}>

        {companies.map((company) => (
          <Grid item xs={12} md={3} lg={3}>

            {/* Card component for each company */}

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

              {/* Box for description with map */}

              <Box {...styles.companyDescriptionBox}>
                {company.description.map((des => (
                  <>
                    <Typography
                      {...styles.companyDescription}
                    >
                      {des.PAN} </Typography>
                    <Typography
                      {...styles.companyDescription}
                    >
                      {des.TAN} </Typography>
                    <Typography
                      {...styles.companyDescription}
                    >
                      {des.GST} </Typography>
                  </>
                )))}
              </Box>
            </Paper>
          </Grid>
        ))}

        {/* Grid for add company */}

        <Grid item xs={12} md={3} lg={3}>

          {/* Card for add company */}

          <Paper
            elevation={3}
            onClick={handleCompanyClick}
            {...styles.addCompanyCard}
          >
            {/* Add icon */}

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
