import React, { useEffect, useState, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import { GridColDef } from "@mui/x-data-grid";
import { Container } from "@mui/system";

import { styles } from "../styles/screens/CompanyList";
import { globalStyles } from "../styles/global";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { companylist } from "../store/reducers/companies/companies";

import CompanyCard from "../components/GridView/CompanyCard";
import CompaniesList from "../components/ListView/CompanyList";
import Paginations from "../components/Paginations";
import CustomizationButtons from "../components/CustomizationButtons";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr",
    minWidth: 50,
    hide: false,
  },
  {
    field: "name",
    headerName: "Company Name",
    width: 200,
    minWidth: 150,
    maxWidth: 200,
    hide: false,
  },
  {
    field: "PAN",
    headerName: "PAN",
    width: 100,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "TAN",
    headerName: "TAN",
    width: 100,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "GST",
    headerName: "GST",
    width: 100,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },

  {
    field: "domain",
    headerName: "Domain",
    width: 100,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "defaultLetterHead",
    headerName: "Default Letter Head",
    width: 100,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "abbr",
    headerName: "Abbrivation",
    width: 100,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "taxID",
    headerName: "Tax Id",
    width: 100,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "dateofEstiblishment",
    headerName: "Date of Estiblishment",
    width: 100,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },

  { field: "country", headerName: "Country", minWidth: 150 },
  { field: "defaultCurrency", headerName: "Default Currency", minWidth: 150 },
];

let PageSize = 5;

const CompanyList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [designView, setDesignView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showColumns, setShowColumns] = useState(columns);
  const [currentPage, setCurrentPage] = useState(1);

  const openDropDown = Boolean(anchorEl);

  const companyStore = useAppSelector((state) => state.companies);
  const { isLoadingRequest, companies } = companyStore;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return companies?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, isLoadingRequest]);

  useEffect(() => {
    dispatch(companylist())
      .unwrap()
      .then((response: any) => {})
      .catch((error) => {});
  }, []);

  const handleCompanyAddClick = () => {
    navigate("/companies/add");
  };

  const handleCompanyEditClick = (company: any) => {
    navigate("/companies/edit", {
      state: { company },
    });
  };

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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
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
          <Button
            variant="contained"
            onClick={handleCompanyAddClick}
            startIcon={<AddIcon />}
            sx={{
              background: "#F58634",
              borderRadius: "5px",
              mr: "10px",
              cursor: "pointer",
              fontSize: "14px",
              textTransform: "inherit",
            }}
          >
            Add
          </Button>

          <CustomizationButtons
            setDesignView={setDesignView}
            handleClickDropDown={handleClickDropDown}
            handleCloseDropDown={handleCloseDropDown}
            handleAddColumn={handleAddColumn}
            handleRemoveColumn={handleRemoveColumn}
            designView={designView}
            openDropDown={openDropDown}
            anchorEl={anchorEl}
            showColumns={showColumns}
          />

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
          <CompaniesList showColumns={showColumns} rows={currentTableData} />
        ) : (
          <CompanyCard
            companies={currentTableData}
            handleCompanyEditClick={handleCompanyEditClick}
            handleCompanyAddClick={handleCompanyAddClick}
          />
        )}
      </Grid>
      <Paginations handlePageChange={handlePageChange} />
    </Container>
  );
};

export default CompanyList;
