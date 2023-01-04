import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import {
  Grid,
  Box,
  Card,
  Typography,
  Container,
  IconButton,
  TextField,
  Paper,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPartners } from "../store/reducers/partners/partners";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/Partners";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";
import PartnersListCard from "../components/ListsView/PartnersList";
import { globalStyles } from "../styles/global";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "#",
    minWidth: 50,
  },
  {
    field: "company_name",
    headerName: "Name",
    width: 200,
    minWidth: 150,
    maxWidth: 200,
  },
  {
    field: "description",
    headerName: "PAN/TAN/GST",
    width: 400,
    minWidth: 150,
    maxWidth: 400,
  },
  // { field: "company_name", headerName: "Company Name", minWidth: 150 },
  // { field: "country", headerName: "Country", minWidth: 150 },
  // { field: "employee_count", headerName: "Number of Employees", minWidth: 200 },
  // { field: "project_count", headerName: "Number of Projects", minWidth: 150 },
  // { field: "defaultCurrency", headerName: "Default Currency", minWidth: 150 },
];

const rows = [
  {
    id: 1,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
  {
    id: 2,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
  {
    id: 3,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
  {
    id: 4,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
  {
    id: 5,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
];

const Partners = () => {
  const dispatch = useAppDispatch();
  const partnersStore = useAppSelector((state) => state.partners);
  const [designView, setDesignView] = useState("list");
  const { isLoadingRequest, partners } = partnersStore;
  console.log("partners data is", partners);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPartners())
      .unwrap()
      .then((response: any) => {})
      .catch((error: any) => {});
  }, []);

  const handlePartnerEditClick = () => {
    navigate("/partners/edit");
  };
  const handlePartnerAddClick = () => {
    navigate("/partners/add");
  };
  return (
    <Container>
      {/* box for search bar and company */}
      <Box {...styles.companyTitleBox}>
        <Typography variant="h5" {...globalStyles.moduleTitle}>
          Partners
        </Typography>
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
            disabled={designView === "grid" ? true : false}
            onClick={() => {
              setDesignView("grid");
            }}
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
            disabled={designView === "list" ? true : false}
            onClick={() => {
              setDesignView("list");
            }}
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
            disabled={designView === "grid" ? true : false}
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
        {designView === "list" ? (
          <Card sx={{ marginTop: "35px", p: 0 }}>
            <Grid item xs={12} xl={12} lg={12}>
              <Box
                sx={{
                  minWidth: "90vw",
                  maxWidth: "90vw",
                  // mt: "50px",
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
                  getRowId={(row) => row.company_name}
                  autoHeight={true}
                  rows={rows}
                  columns={columns}
                  hideFooterPagination={true}
                  hideFooter={true}
                  // pageSize={5}
                  // rowsPerPageOptions={[5]}
                  // checkboxSelection
                  // components={{ Toolbar: GridToolbar }}
                />
                <Grid item xs={12} md={12} lg={12}>
                  <Paper
                    elevation={3}
                    onClick={handlePartnerAddClick}
                    {...styles.addPartnerCard}
                  >
                    <AddIcon fontSize="large" sx={{ pr: 2 }} />
                    <Typography {...styles.addPartnerIcon}>
                      Add Partner
                    </Typography>
                  </Paper>
                </Grid>
              </Box>
            </Grid>
          </Card>
        ) : (
          <PartnersListCard
            partners={rows}
            handlePartnerEditClick={handlePartnerEditClick}
            handlePartnerAddClick={handlePartnerAddClick}
          />
        )}
      </Grid>
    </Container>
  );
};

export default Partners;
