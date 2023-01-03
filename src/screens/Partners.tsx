import React, { useEffect } from "react";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import {
  Grid,
  Box,
  Typography,
  Container,
  IconButton,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPartners } from "../store/reducers/partners/partners";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles/screens/Partners";

import SearchIcon from "@mui/icons-material/Search";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";

const columns: GridColDef[] = [
  { field: "company_name", headerName: "Company Name", minWidth: 150 },
  { field: "country", headerName: "Country", minWidth: 150 },
  { field: "employee_count", headerName: "Number of Employees", minWidth: 200 },
  { field: "project_count", headerName: "Number of Projects", minWidth: 150 },
  { field: "defaultCurrency", headerName: "Default Currency", minWidth: 150 },
];

const rows = [
  {
    company_name: "Google",
    project_count: 3,
    employee_count: 200,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "Microsoft",
    project_count: 4,
    employee_count: 220,
    defaultCurrency: "Riyal",
    country: "Saudi Arab",
  },
  {
    company_name: "Tesla",
    project_count: 2,
    employee_count: 150,
    defaultCurrency: "Dollar",
    country: "UK",
  },
  {
    company_name: "Twitter",
    project_count: 1,
    employee_count: 870,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "Orangebits",
    project_count: 3,
    employee_count: 250,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "E-Zest",
    project_count: 4,
    employee_count: 100,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "TCS",
    project_count: 2,
    employee_count: 900,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "Infosys",
    project_count: 3,
    employee_count: 400,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "Wipro",
    project_count: 5,
    employee_count: 100,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "Accenture",
    project_count: 3,
    employee_count: 500,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "Winjit",
    project_count: 5,
    employee_count: 250,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "Persistent",
    project_count: 3,
    employee_count: 200,
    defaultCurrency: "Rupees",
    country: "India",
  },
  {
    company_name: "BMC",
    project_count: 4,
    employee_count: 100,
    defaultCurrency: "Rupees",
    country: "India",
  },
];

const Partners = () => {
  const dispatch = useAppDispatch();
  const partnersStore = useAppSelector((state) => state.partners);
  const { isLoadingRequest, partners } = partnersStore;
  console.log("partners data is", partners);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPartners())
      .unwrap()
      .then((response: any) => {})
      .catch((error: any) => {});
  }, []);

  return (
    <Container>
      {/* box for search bar and company */}
      <Box {...styles.companyTitleBox}>
        <Typography variant="h5">Partners</Typography>
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

      <Grid container spacing={0} direction="row" style={{ minHeight: "50vh" }}>
        <Grid item xs={12} xl={12} lg={12}>
          <Box
            sx={{
              minWidth: "90vw",
              maxWidth: "90vw",
              mt: "50px",
            }}
          >
            <DataGrid
              getRowId={(row) => row.company_name}
              autoHeight={true}
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Partners;
