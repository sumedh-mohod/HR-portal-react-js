import React, { useEffect, useState, useMemo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Menu,
  MenuItem,
  ListItem,
  List,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { GridColDef } from "@mui/x-data-grid";
import { globalStyles } from "../../styles/global";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { styles } from "../../styles/screens/CompanyList";
import Paginations from "../../components/HigherOrder/Paginations";
import CustomizationButtons from "../../components/HigherOrder/CustomizationButtons";
import Loader from "../../components/HigherOrder/Loader";
import OrganizationList from "../../components/OrganizationlData/OrganizationList";
import OrganizationalCard from "../../components/OrganizationlData/OrganizationalCard";
import CollectionsIcon from "@mui/icons-material/Collections";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ViewOraganisationalDatamodel from "../../components/OrganizationlData/ViewOraganisationalDatamodel";
import AddOrganisationData from "../../components/OrganizationlData/AddOrganisationData";
const Data = [
  {
    mainIcon: <PictureAsPdfIcon sx={{ color: "#F24A4A", fontSize: "45px", mt: 3 }} />,
    subIcon: <PictureAsPdfIcon fontSize="small" sx={{ color: "#F24A4A" }} />,
    File_name: "Certificate 01.PDF",
  },
  {
    mainIcon: <CollectionsIcon sx={{ color: "#A9A9A9", fontSize: "45px", mt: 3 }} />,
    subIcon: <CollectionsIcon fontSize="small" sx={{ color: "#A9A9A9" }} />,
    File_name: "Certificate 02.PDF",
  },
  {
    mainIcon: <PictureAsPdfIcon sx={{ color: "#F24A4A", fontSize: "45px", mt: 3 }} />,
    subIcon: <PictureAsPdfIcon fontSize="small" sx={{ color: "#F24A4A" }} />,
    File_name: "Certificate 01.PDF",
  },
  {
    mainIcon: <CollectionsIcon sx={{ color: "#A9A9A9", fontSize: "45px", mt: 3 }} />,
    subIcon: <CollectionsIcon fontSize="small" sx={{ color: "#A9A9A9" }} />,
    File_name: "Certificate 02.PDF",
  },
];


let PageSize = 5;

const OrganizationlData = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [designView, setDesignView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showColumns, setShowColumns] = useState(Data);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [currentData, setCurrentData] = useState<any>([]);
  const openDropDown = Boolean(anchorEl);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [addOpen, setAddOpen] = React.useState(false);
  const handleViewOpen = () => setViewOpen(true);
  const handleViewClose = () => setViewOpen(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);

  // const companyStore = useAppSelector((state) => state.companies);
  // const { isLoadingRequest, companies } = companyStore;

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const DataSliced = Data?.slice(firstPageIndex, lastPageIndex);
    setCurrentData(DataSliced);
  }, [currentPage]);

  // useEffect(() => {
  //   dispatch(getCompanies())
  //      .unwrap()
  //     .then((response: any) => {})
  //     .catch((error) => {});
  // }, []);
  
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
      const newFilter = Data.filter((value: any) =>
        value.file_name.toLowerCase().includes(SearchText.toLowerCase())
      );
      setCurrentData(newFilter);
    } else {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;

      const DataSliced = Data?.slice(firstPageIndex, lastPageIndex);
      setCurrentData(DataSliced);
    }
  };
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* <Loader isLoading={isLoadingRequest} /> */}
      {/* box for search bar and company */}
      <Box {...styles.companyTitleBox}>
        <Typography variant="h5" {...globalStyles.moduleTitle}>
          Organizationl Data
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            onClick={handleAddOpen}
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
          <TextField
            sx={{ ml: 2 }}
            size="small"
            id="standard-bare"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search Organisational Data..."
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Box>
      </Box>

      {/* list */}
    <OrganizationList/>

    <OrganizationalCard  organasationlData={currentData} handleViewOpen={handleViewOpen}/>
    <ViewOraganisationalDatamodel viewOpen={viewOpen} handleViewClose={handleViewClose}/>
    <AddOrganisationData addOpen={addOpen} handleAddClose={handleAddClose}/>
      <Paginations handlePageChange={handlePageChange} />
    </Box>
  );
};

export default OrganizationlData;
