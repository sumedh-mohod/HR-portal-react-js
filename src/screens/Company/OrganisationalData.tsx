import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
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
import { Stack } from "@mui/system";

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

const OrganizationlData = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [designView, setDesignView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showColumns, setShowColumns] = useState(columns);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [currentData, setCurrentData] = useState<any>([]);
  const openDropDown = Boolean(anchorEl);

  // const companyStore = useAppSelector((state) => state.companies);
  // const { isLoadingRequest, companies } = companyStore;

  // useEffect(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;

  //   const DataSliced = companies?.slice(firstPageIndex, lastPageIndex);
  //   setCurrentData(DataSliced);
  // }, [currentPage, isLoadingRequest]);

  // useEffect(() => {
  //   dispatch(getCompanies())
  //      .unwrap()
  //     .then((response: any) => {})
  //     .catch((error) => {});
  // }, []);

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

  // const handleSearchChange = (event: any) => {
  //   const SearchText = event.target.value;
  //   setSearchText(SearchText);

  //   if (SearchText.length > 0) {
  //     const newFilter = companies.filter((value: any) =>
  //       value.company_name.toLowerCase().includes(SearchText.toLowerCase())
  //     );
  //     setCurrentData(newFilter);
  //   } else {
  //     const firstPageIndex = (currentPage - 1) * PageSize;
  //     const lastPageIndex = firstPageIndex + PageSize;

  //     const DataSliced = companies?.slice(firstPageIndex, lastPageIndex);
  //     setCurrentData(DataSliced);
  //   }
  // };

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
            value={searchText}
            // onChange={handleSearchChange}
            placeholder="Search Companies..."
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </Box>
      </Box>

      {/* <Box sx={{ flexGrow: 1, display: "flex", borderBottom: "1px solid #C5C7CD" ,mt:2}}>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "22px",
            letterSpacing: "0.2px",
            color: "#515151",
            
           marginX:"25px",
           marginLeft:"0",
            borderBottom:"2px solid red",
            pb:1
          

          }}
        >
          Certificates
        </Typography>
        <Typography sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "22px",
            letterSpacing: "0.2px",
            color: "#515151",
            paddingRight:"25px"

          }}>Information Security</Typography>
        <Typography sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "22px",
            letterSpacing: "0.2px",
            color: "#515151",
            paddingRight:"25px"

          }}>Security Policies</Typography>
        <Typography sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "22px",
            letterSpacing: "0.2px",
            color: "#515151",
            paddingRight:"25px"

          }}>Processes</Typography>
        <Typography sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "22px",
            letterSpacing: "0.2px",
            color: "#515151",
            paddingRight:"25px",

          }}>Do’s & Don’t</Typography>
      </Box> */}
    <List sx={{ display: "flex", borderBottom: "1px solid #C5C7CD",p:0 ,mt:2}}>
            <ListItem sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0.2px",
            color: "#515151",
            borderBottom:"2px solid red",
            px:0,
            pb:1,
            width:"max-content",
            textAlign:"start",
            mr:4,
            
          }}>Certificates</ListItem>
            
            <ListItem sx={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0.2px",
            color: "#515151",
            borderBottom:"2px solid red",
            pl:0,
            pb:1,
            width:"max-content",
            mr:4,
            textAlign:"start"
            
          }}>Certificates</ListItem>
            
        </List>
      <Paginations handlePageChange={handlePageChange} />
    </Box>
  );
};

export default OrganizationlData;
