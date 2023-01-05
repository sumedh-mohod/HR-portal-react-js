import React from "react";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import { Grid, Box, Card, Typography, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styles } from "../../styles/screens/Employee";

const EmployeeList = ({
  showColumns,
  rows,
  handleEmployeeAddClick,
}: {
  showColumns: any;
  rows: any;
  handleEmployeeAddClick
  : any;
}) => {
  return (
    <Card sx={{ marginTop: "35px", p: 0 }}>
      <Grid item xs={12} xl={12} lg={12}>
        <Box
          sx={{
            minWidth: "90vw",
            maxWidth: "90vw",
            margin: 0,
          }}
        >
          <DataGrid
            sx={{
              borderRadius: "0",
              ".MuiDataGrid-columnSeparator": {
                display: "none",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: " #F4F5F6",
              },
            }}
            getRowId={(row) => row.id}
            autoHeight={true}
            rows={rows}
            columns={showColumns}
            hideFooterPagination={true}
            hideFooter={true}
          />
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              elevation={3}
              onClick={handleEmployeeAddClick}
              {...styles.addEmployeeCard}
            >
              <AddIcon fontSize="large" sx={{ pr: 2 }} />
              <Typography {...styles.addEmployeeIcon}>Add Employee</Typography>
            </Paper>
          </Grid>
        </Box>
      </Grid>
    </Card>
  );
};

export default EmployeeList;