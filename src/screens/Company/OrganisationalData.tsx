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
import OrganizationList from "../../components/Company/OrganizationlData/OrganizationList";
import OrganizationalCard from "../../components/Company/OrganizationlData/OrganizationalCard";
import CollectionsIcon from "@mui/icons-material/Collections";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ViewOraganisationalDatamodel from "../../components/Company/OrganizationlData/ViewOraganisationalDatamodel";
import AddOrganisationData from "../../components/Company/OrganizationlData/AddOrganisationData";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InformationSecurity from "../../components/Company/OrganizationlData/InformationSecurity";
import SecurityPolicies from "../../components/Company/OrganizationlData/SecurityPolicies";
import Processes from "../../components/Company/OrganizationlData/Processes";
import DosAndDont from "../../components/Company/OrganizationlData/DosAndDont";
import { stylesss} from "../../styles/components/organizationList";

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
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
    
    <Box sx={{ width: '100%' }}>
      <Box >
        <Tabs {...stylesss.List} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab        {...stylesss.ListItem} label="Certificates" {...a11yProps(0)} />
          <Tab   {...stylesss.ListItem}label="Information Security" {...a11yProps(1)} />
          <Tab   {...stylesss.ListItem}label="Security Policies" {...a11yProps(2)} />
          <Tab   {...stylesss.ListItem}label="Processes" {...a11yProps(3)} />
          <Tab   {...stylesss.ListItem}label="Do’s & Don’t" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <OrganizationalCard  organasationlData={currentData} handleViewOpen={handleViewOpen}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <InformationSecurity/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SecurityPolicies/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Processes/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <DosAndDont/>
      </TabPanel>
    </Box>

   
    <ViewOraganisationalDatamodel viewOpen={viewOpen} handleViewClose={handleViewClose}/>
    <AddOrganisationData addOpen={addOpen} handleAddClose={handleAddClose}/>
      <Paginations handlePageChange={handlePageChange} />
    </Box>
  );
};

export default OrganizationlData;
