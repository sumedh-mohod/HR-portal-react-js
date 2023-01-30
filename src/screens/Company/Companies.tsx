import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import CompanyCard from "components/Company/CompanyCard";
import CompaniesList from "components/Company/CompanyList";
import Paginations from "components/HigherOrder/Paginations";
import CustomizationButtons from "components/HigherOrder/CustomizationButtons";
import Loader from "components/HigherOrder/Loader";
import Search from "components/HigherOrder/Search";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getCompanies } from "store/reducers/companies/companies";
import { globalStyles } from "styles/global";
import { styles } from "styles/screens/CompanyList";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr",
    minWidth: 50,
    width: 100,
    hide: false,
  },
  {
    field: "company_name",
    headerName: "Company Name",
    width: 300,
    minWidth: 200,
    maxWidth: 400,
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
  const [searchText, setSearchText] = useState("");
  const [currentData, setCurrentData] = useState<any>([]);
  const openDropDown = Boolean(anchorEl);

  const companyStore = useAppSelector((state) => state.companies);
  const { isLoadingRequest, companies } = companyStore;
  console.log("companie data from company.tsx", companies);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const DataSliced = companies?.content?.slice(firstPageIndex, lastPageIndex);
    setCurrentData(DataSliced);
  }, [currentPage, isLoadingRequest]);

  useEffect(() => {
    dispatch(getCompanies())
      .unwrap()
      .then((response: any) => {})
      .catch((error) => {});
  }, []);

  const handleCompanyAddClick = () => {
    navigate("/companies/add");
  };

  const handleCompanyEditClick = (company: any, index: any) => {
    // console.log("get company response",company)
    navigate("/companies/details", {
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

  const handleSearchChange = (event: any) => {
    const SearchText = event.target.value;
    setSearchText(SearchText);

    if (SearchText.length > 0) {
      const newFilter = companies.filter((value: any) =>
        value.company_name.toLowerCase().includes(SearchText.toLowerCase())
      );
      setCurrentData(newFilter);
    } else {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;

      const DataSliced = companies?.slice(firstPageIndex, lastPageIndex);
      setCurrentData(DataSliced);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Loader isLoading={isLoadingRequest} />
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

          <Search
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            placeholder={"Companies..."}
          />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        {designView === "list" ? (
          <CompaniesList
            showColumns={showColumns?.length >= 0 ? showColumns : []}
            rows={
              currentData !== undefined && currentData?.length >= 0
                ? currentData
                : []
            }
          />
        ) : (
          <CompanyCard
            companies={currentData}
            handleCompanyEditClick={handleCompanyEditClick}
            handleCompanyAddClick={handleCompanyAddClick}
          />
        )}
      </Box>
      {companies?.content?.length > 0 && (
        <Paginations handlePageChange={handlePageChange} />
      )}
    </Box>
  );
};

export default CompanyList;
