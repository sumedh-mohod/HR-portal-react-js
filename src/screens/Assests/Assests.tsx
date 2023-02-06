import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CustomizationButtons from "components/HigherOrder/CustomizationButtons";
import Paginations from "components/HigherOrder/Paginations";
import Search from "components/HigherOrder/Search";
import { globalStyles } from "styles/global";
import AssestsCard from "components/Assests/AssestsCard";
import AssetsList from "components/Assests/AssetsList";
import { styles } from "styles/components/assests";
import QRicon from "components/Icons/QRicon";
import QRiconBox from "components/Assests/QRiconBox";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr",
    minWidth: 50,
    hide: false,
  },
  {
    field: "assetsName",
    headerName: "Name",
    width: 200,
    minWidth: 150,
    maxWidth: 200,
    hide: false,
  },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    minWidth: 150,
    maxWidth: 200,
    hide: false,
  },
  {
    field: "subCategory",
    headerName: "Sub-Category",
    width: 200,
    minWidth: 150,
    maxWidth: 200,
    hide: false,
  },

  {
    field: "description",
    headerName: "Description",
    width: 300,
    minWidth: 150,
    maxWidth: 300,
    hide: false,
  },
  {
    field: "printBarcode_QRCode",
    renderCell: (params) => {
      return <QRiconBox />;
    },
    headerName: "Print Barcode/QR Code",
    width: 200,
    minWidth: 150,
    maxWidth: 200,
    hide: false,
    align: "center",
  },
];

const row = [
  {
    id: 1,
    assetsName: "Office Chair",
    category: "Furniture",
    subCategory: "Chair",
    description: "New chair with good quality",
  },
  {
    id: 2,
    assetsName: "Office Chair",
    category: "Furniture",
    subCategory: "Chair",
    description: "New chair with good quality",
  },
  {
    id: 3,
    assetsName: "Office Chair",
    category: "Furniture",
    subCategory: "Chair",
    description: "New chair with good quality",
  },
  {
    id: 4,
    assetsName: "Office Chair",
    category: "Furniture",
    subCategory: "Chair",
    description: "New chair with good quality",
  },
  {
    id: 5,
    assetsName: "Fan",
    category: "Furniture",
    subCategory: "Chair",
    description: "New chair with good quality",
  },
  {
    id: 6,
    assetsName: "Office Chair",
    category: "Furniture",
    subCategory: "Chair",
    description: "New chair with good quality",
  },
];

let PageSize = 5;

const Assets = () => {
  // const dispatch = useAppDispatch();

  const [designView, setDesignView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [showColumns, setShowColumns] = useState(columns);
  const [searchText, setSearchText] = useState("");
  const [currentData, setCurrentData] = useState<any>([]);
  const openDropDown = Boolean(anchorEl);

  // const partnersStore = useAppSelector((state) => state.partners);
  // const { isLoadingRequest, partners } = partnersStore;
  // console.log("partners data from partner.tsx", partners);

  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getPartners())
  //     .unwrap()
  //     .then((response: any) => {})
  //     .catch((error: any) => {});
  // }, [dispatch]);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const DataSliced = row.slice(firstPageIndex, lastPageIndex);
    setCurrentData(DataSliced);
  }, [currentPage]);

  const handleAssetsEditClick = (assets: any, index: any) => {
    navigate("/assets/edit", {
      state: { assets },
    });
  };
  const handleAssetsAddClick = () => {
    navigate("/assets/add");
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
      const newFilter = row.filter((value: any) =>
        value.assetsName.toLowerCase().includes(SearchText.toLowerCase())
      );
      setCurrentData(newFilter);
    } else {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;

      const DataSliced = row?.slice(firstPageIndex, lastPageIndex);
      setCurrentData(DataSliced);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {/* <Loader isLoading={isLoadingRequest} /> */}
      {/* box for search bar and company */}
      <Box {...styles.assetsTitleBox}>
        <Typography variant="h5" {...globalStyles.moduleTitle}>
          Assets
        </Typography>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            onClick={handleAssetsAddClick}
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
            placeholder={"Assets..."}
          />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {designView === "list" ? (
          <AssetsList
            // handlePartnerAddClick={handlePartnerAddClick}
            // rows={currentData}
            showColumns={showColumns?.length >= 0 ? showColumns : []}
            rows={
              currentData !== undefined && currentData?.length >= 0
                ? currentData
                : []
            }
          />
        ) : (
          <AssestsCard
            Assets={currentData}
            handleAssetsEditClick={handleAssetsEditClick}
            handleAssetsAddClick={handleAssetsAddClick}
          />
        )}
      </Box>
      {row?.length > 0 && <Paginations handlePageChange={handlePageChange} />}
    </Box>
  );
};

export default Assets;
