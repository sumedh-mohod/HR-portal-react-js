import React from "react";
import { Grid, Typography, Paper, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import OrangeBitsIcon from "../components/Icons/OrangeBitsIcon";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/CompanyList";
import { Interface } from "readline";

interface Company {
  name: string;
  description: any;
  company: string;
  defaultLetterHead: string;
  defaultCurrency: string;
  domain: string;
  abbr: string;
  taxID: string;
  country: string;
  dateofEstiblishment: string;
}
// array of objects of companies
const companies: Company[] = [
  {
    name: "Orangebits Software Technologies(India) Pvt. Ltd",
    description: [
      { PAN: "PAN - AYAPN7894N" },
      { TAN: "TAN - AYAPN7894N" },
      { GST: "GST - AYAPN7894N" },
    ],
    company: "Company 1",
    defaultLetterHead: "ORNG123",
    defaultCurrency: "Rupees",
    domain: "orange.com",
    abbr: "ORNG123",
    taxID: "TAX123",
    country: "india",
    dateofEstiblishment: "2 October, 2023",
  },
  {
    name: "Orangebits Software Technologies(India) Pvt. Ltd",
    description: [
      { PAN: "PAN - AYAPN7894N" },
      { TAN: "TAN - AYAPN7894N" },
      { GST: "GST - AYAPN7894N" },
    ],
    company: "Company 1",
    defaultLetterHead: "ORNG123",
    defaultCurrency: "Rupees",
    domain: "orange.com",
    abbr: "ORNG123",
    taxID: "TAX123",
    country: "india",
    dateofEstiblishment: "2 October, 2023",
  },
  {
    name: "Orangebits Software Technologies(India) Pvt. Ltd",
    description: [
      { PAN: "PAN - AYAPN7894N" },
      { TAN: "TAN - AYAPN7894N" },
      { GST: "GST - AYAPN7894N" },
    ],
    company: "Company 1",
    defaultLetterHead: "ORNG123",
    defaultCurrency: "Rupees",
    domain: "orange.com",
    abbr: "ORNG123",
    taxID: "TAX123",
    country: "india",
    dateofEstiblishment: "2 October, 2023",
  },
];

const CompanyList = () => {
  const navigate = useNavigate();
  const handleCompanyClick = () => {
    navigate("/companies/add");
  };
  const handleCompanyEditClick = (company: Company) => {
    navigate("/companies/edit", {
      state: { company },
    });
  };

  return (
    <Container>
      <Box {...styles.companyTitleBox}>
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
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {companies.map((company) => (
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              elevation={3}
              onClick={() => handleCompanyEditClick(company)}
              {...styles.companyCard}
            >
              <OrangeBitsIcon width={40} />
              <Typography variant="h5" gutterBottom {...styles.companyName}>
                {company.name}
              </Typography>
              <Box {...styles.companyDescriptionBox}>
                {company.description.map((des: any) => (
                  <>
                    <Typography {...styles.companyDescription}>
                      {des.PAN}{" "}
                    </Typography>
                    <Typography {...styles.companyDescription}>
                      {des.TAN}{" "}
                    </Typography>
                    <Typography {...styles.companyDescription}>
                      {des.GST}{" "}
                    </Typography>
                  </>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} md={3} lg={3}>
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
