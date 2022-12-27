import * as React from "react";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { Grid, Box } from "@mui/material";

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
  return (
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
  );
};

export default Partners;
