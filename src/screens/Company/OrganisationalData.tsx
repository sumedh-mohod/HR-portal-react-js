import React, { useEffect, useState, useMemo } from "react";
import { Typography, Box, Button, Tab, Tabs } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { globalStyles } from "styles/global";
import { styles } from "styles/components/organizationData";
import Paginations from "components/HigherOrder/Paginations";
import Search from "components/HigherOrder/Search";
import PdfIcon from "components/Icons/PdfIcon";
import WordIcon from "components/Icons/WordIcon";
import OrganizationalCard from "components/Company/OrganizationlData/OrganizationalCard";
import ViewOraganisationalDatamodel from "components/Company/OrganizationlData/ViewOraganisationalDatamodel";
import AddOrganisationData from "components/Company/OrganizationlData/AddOrganisationData";
import InformationSecurity from "components/Company/OrganizationlData/InformationSecurity";
import SecurityPolicies from "components/Company/OrganizationlData/SecurityPolicies";
import Processes from "components/Company/OrganizationlData/Processes";
import DosAndDont from "components/Company/OrganizationlData/DosAndDont";
import ConfirmationModal from "components/HigherOrder/ConfirmationModal";

const Data: any = [
  {
    id: 1,
    mainIcon: <PdfIcon width={60} height={55} />,
    subIcon: <PdfIcon width={30} height={25} />,
    File_name: "abc.PDF",
  },
  {
    id: 2,
    mainIcon: <WordIcon width={60} height={55} />,
    subIcon: <WordIcon width={30} height={25} />,
    File_name: "kkkk.PDF",
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OrganizationlData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [currentData, setCurrentData] = useState<any>([]);
  const [viewOpen, setViewOpen] = React.useState(false);
  const [confimationModal, setConfimationModal] = useState(false);
  const [addOpen, setAddOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [newCardData, setnewCardData] = useState();

  const handleViewClose = () => setViewOpen(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // setConfimationModal(true);
  };

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const DataSliced = Data?.slice(firstPageIndex, lastPageIndex);
    setCurrentData(DataSliced);
  }, [currentPage]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event: any) => {
    const SearchText = event.target.value;
    setSearchText(SearchText);

    if (SearchText?.length > 0) {
      const newFilter = Data?.filter((value: any) =>
        value.File_name?.toLowerCase()?.includes(SearchText?.toLowerCase())
      );
      console.log("newFilter", newFilter);
      setCurrentData(newFilter);
    } else {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      const DataSliced = Data?.slice(firstPageIndex, lastPageIndex);
      setCurrentData(DataSliced);
    }
  };

  const handleCardData = (currId: any) => {
    const CardData: any = Data.find((id: any) => {
      return currId == id.id;
    });
    setnewCardData(CardData);
    setViewOpen(true);
  };

  const handleConfirmationModal = () => {
    setConfimationModal(false);
  };

  const handleCancelModal = () => {
    setConfimationModal(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* <Loader isLoading={isLoadingRequest} /> */}
      {/* box for search bar and company */}
      <Box {...styles.OrganizationlDataTitleBox}>
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
          <Search
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            placeholder={"Organizational Data..."}
          />
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ width: "100%" }}>
        <Box>
          <Tabs
            {...styles.Tabs}
            value={value}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{ style: { background: "#F58634" } }}
          >
            <Tab {...styles.Tab} label="Certificates" {...a11yProps(0)} />
            <Tab
              {...styles.Tab}
              label="Information Security"
              {...a11yProps(1)}
            />
            <Tab {...styles.Tab} label="Security Policies" {...a11yProps(2)} />
            <Tab {...styles.Tab} label="Processes" {...a11yProps(3)} />
            <Tab {...styles.Tab} label="Do’s & Don’t" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <OrganizationalCard
            handleCardData={handleCardData}
            organasationlData={currentData}
          // handleViewOpen={handleViewOpen}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <InformationSecurity />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SecurityPolicies />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Processes />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <DosAndDont />
        </TabPanel>
      </Box>
      <ViewOraganisationalDatamodel
        viewOpen={viewOpen}
        handleViewClose={handleViewClose}
        newCardData={newCardData}
      />
      <AddOrganisationData addOpen={addOpen} handleAddClose={handleAddClose} />
      {Data?.length > 0 && <Paginations handlePageChange={handlePageChange} />}
      <ConfirmationModal
        open={confimationModal}
        handleConfirm={handleConfirmationModal}
        handleCancel={handleCancelModal}
        title={"Please confirm"}
        message={
          "You have not saved your changes, Please save your changes or Discard your chanages."
        }
      />
    </Box>
  );
};

export default OrganizationlData;
