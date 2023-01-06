import { DataGrid } from "@mui/x-data-grid";
import { Grid, Box, Card } from "@mui/material";
import Paginations from "./Paginations";

const EmployeeList = ({ columns, rows }: { columns: any; rows: any }) => {
  return (
    <Card sx={{ marginTop: "35px", p: 0, width: "85vw" }}>
      <Grid item sm={12} xs={12} md={12} xl={12} lg={12}>
        <Box
          sx={{
            margin: 0,
            height: 400,
          }}
        >
          <DataGrid
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{
              Pagination: Paginations,
            }}
            rows={rows}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      </Grid>
    </Card>
  );
};

export default EmployeeList;
