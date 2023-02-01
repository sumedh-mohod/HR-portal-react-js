import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid, Box, Card } from "@mui/material";

const AssetsList = ({ showColumns, rows }: { showColumns: any; rows: any }) => {
  const [finalClickInfo, setFinalClickInfo] = useState([]);

  const handleOnCellClick = (params:any) => {
    setFinalClickInfo(params);
  };
  const HandleQr = (rowData: any) => {
    console.log("row click values", rowData);
  };
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
            onRowClick={(rowData) => HandleQr(rowData.row)}
            onCellClick={handleOnCellClick}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default AssetsList;
