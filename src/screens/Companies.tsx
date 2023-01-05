import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper, Box, TextField, Card, MenuItem, ListItemIcon, ListItemText, Menu, Button } from "@mui/material";
import { DataGrid, GridToolbar, GridColDef } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/CompanyList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { companylist } from "../store/reducers/companies/companies";
import CompanyCard from "../components/GridView/CompanyCard";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";
import IconButton from "@mui/material/IconButton";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { globalStyles } from "../styles/global";
import CompaniesList from "../components/ListView/CompaniesList";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr",
    minWidth: 50,
    hide: false,
  },
  {
    field: "company_name",
    headerName: "Company Name",
    width: 200,
    minWidth: 150,
    maxWidth: 200,
    hide: false,
  },
  {
    field: "description",
    headerName: "PAN/TAN/GST",
    width: 400,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
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
      "PAN - AYAPN7894N TAN - AYAPN7894N GST - AYAPN7894N",
  },
  {
    id: 2,
    company_name: "Google",
    description:
      "PAN - AYAPN7894N TAN - AYAPN7894N GST - AYAPN7894N",
  },
  {
    id: 3,
    company_name: "Google",
    description:
      "PAN - AYAPN7894N TAN - AYAPN7894N GST - AYAPN7894N",
  },
  {
    id: 4,
    company_name: "Google",
    description:
      "PAN - AYAPN7894N TAN - AYAPN7894N GST - AYAPN7894N",
  },
  {
    id: 5,
    company_name: "Google",
    description:
      "PAN - AYAPN7894N TAN - AYAPN7894N GST - AYAPN7894N",
  },
];

const CompanyList = () => {
  const dispatch = useAppDispatch();
  const companyStore = useAppSelector((state) => state.companies);
  const { isLoadingRequest, companies } = companyStore;
  const navigate = useNavigate();

  const [designView, setDesignView] = useState("list");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropDown = Boolean(anchorEl);
  const [showColumns, setShowColumns] = useState(columns);

  const handleCompanyAddClick = () => {
    navigate("/companies/add");
  };

  const handleCompanyEditClick = (company: any) => {
    navigate("/companies/edit", {
      state: { company },
    });
  };

  useEffect(() => {
    dispatch(companylist())
      .unwrap()
      .then((response: any) => { })
      .catch((error) => { });
  }, []);

  const handleClickDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropDown = () => {
    setAnchorEl(null);
  };

  const handleAddColumn = (item: any) => {
    setShowColumns((prevEl) => {
      let ind = prevEl.findIndex((value) => value.field === item.field);
      showColumns[ind].hide = false;
      return [...prevEl];
    });
  };

  const handleRemoveColumn = (item: any) => {
    setShowColumns((prevEl) => {
      let ind = prevEl.findIndex((value) => value.field === item.field);
      showColumns[ind].hide = true;
      return [...prevEl];
    });
  };

  return (
    <Container>
      {/* box for search bar and company */}
      <Box {...styles.companyTitleBox}>
        <Typography variant="h5" {...globalStyles.moduleTitle}>
          Company
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button variant="contained"
            onClick={handleCompanyAddClick}
            startIcon={<AddIcon />}
            sx={{
              background: "#F58634",
              borderRadius: "5px",
              mr: "10px",
              cursor: "pointer",
              fontSize: "14px",
              textTransform: "inherit"
            }}
          > Add</Button>
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
            id="basic-button"
            aria-controls={openDropDown ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openDropDown ? "true" : undefined}
            onClick={handleClickDropDown}
            disabled={designView === "grid" ? true : false}
          >
            <ViewColumnOutlinedIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openDropDown}
            onClose={handleCloseDropDown}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{
              "& 	.MuiMenu-paper": {
                width: "22vw",
                padding: "10px",
              },
            }}
          >
            {showColumns.map((item) => (
              <MenuItem
                sx={{
                  "&:hover": {
                    cursor: "default",
                  },
                  padding: "5px",
                  border: "solid",
                  borderWidth: 1,
                  borderRadius: "5px",
                  marginTop: "15px",
                  borderColor: "#DFDFDF",
                  backgroundColor: !item.hide ? "#EDEDED" : "white",
                }}
              >
                <ListItemIcon>
                  <DragIndicatorIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    textAlign: "start",
                  }}
                >
                  {item.headerName}
                </ListItemText>
                <ListItemIcon
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  {item.hide ? (
                    <AddIcon
                      onClick={() => {
                        handleAddColumn(item);
                      }}
                    />
                  ) : (
                    <CloseIcon
                      onClick={() => {
                        handleRemoveColumn(item);
                      }}
                    />
                  )}
                </ListItemIcon>
              </MenuItem>
            ))}
          </Menu>
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
          <CompaniesList
            handleCompanyAddClick={handleCompanyAddClick}
            showColumns={showColumns}
            rows={rows}
          />
        ) : (
          <CompanyCard
            companies={companies}
            handleCompanyEditClick={handleCompanyEditClick}
            handleCompanyAddClick={handleCompanyAddClick}
          />
        )}
      </Grid>
    </Container>
  );
};

export default CompanyList;
