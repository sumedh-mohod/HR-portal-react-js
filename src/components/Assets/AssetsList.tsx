import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Box, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AssetsList = ({ showColumns, rows}: { showColumns: any; rows: any }) => {
  const navigate = useNavigate();
  const [rowData, setRowData] = useState(null);
  const handleOnRowClick = (params:any) => {
    setRowData(params);
    console.log("params",params.row)
    navigate("/assets/details", {
      state: {params},
    });
  };
  console.log(
    "rowData",rowData  
  )

  return (
    <Card sx={{ marginTop: "35px", p: 0 }}>
      <Grid container width="1">
        <Grid item xs={12} xl={12} lg={12}>
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
            disableColumnMenu={true}
            disableColumnFilter={true}
            disableColumnSelector={true}
            // onCellClick={handleOnCellClick}
            onRowClick={handleOnRowClick}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default AssetsList;
