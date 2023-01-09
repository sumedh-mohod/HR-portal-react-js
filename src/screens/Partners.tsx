import React, { useEffect, useState,useMemo } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { Grid, Box, Typography, Container, TextField, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getPartners } from "../store/reducers/partners/partners";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/Partners";
import SearchIcon from "@mui/icons-material/Search";
import PartnersCard from "../components/GridView/PartnersCard";
import { globalStyles } from "../styles/global";
import PartnersList from "../components/ListView/PartnersList";
import CustomizationButtons from "../components/CustomizationButtons";
import AddIcon from "@mui/icons-material/Add";
import Paginations from "../components/Paginations";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr",
    minWidth: 50,
    hide: false,
  },
  {
    field: "company_name",
    headerName: "Name",
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
  {
    id: 6,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
  {
    id: 7,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
  {
    id: 8,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
  {
    id: 9,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
  {
    id: 10,
    company_name: "Google",
    description:
      "Plot No 10, Chintamani, Near Antarbharti Ashram, Dhangarpura, Khamla Rd, Nagpur, Maharashtra 440015",
  },
];
let PageSize = 5;
const Partners = () => {
  // const dispatch = useAppDispatch();
  // const partnersStore = useAppSelector((state) => state.partners);
  const [designView, setDesignView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropDown = Boolean(anchorEl);
  const [showColumns, setShowColumns] = useState(columns);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return rows?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  // const { isLoadingRequest, partners } = partnersStore;
  // console.log("partners data is", partners);
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(getPartners())
  //     .unwrap()
  //     .then((response: any) => {})
  //     .catch((error: any) => {});
  // }, []);

  const handlePartnerEditClick = () => {
    navigate("/partners/edit");
  };
  const handlePartnerAddClick = () => {
    navigate("/partners/add");
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
    <Box sx={{display:"flex" ,flexDirection:"column"}}>
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
           <Button
            variant="contained"
            onClick={handlePartnerAddClick}
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
            {" "}
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
      <Box sx={{ flexGrow: 1}}>
        {designView === "list" ? (
          <PartnersList
            handlePartnerAddClick={handlePartnerAddClick}
            showColumns={showColumns}
            rows={currentTableData}
          />
        ) : (
          <PartnersCard
            partners={currentTableData}
            handlePartnerEditClick={handlePartnerEditClick}
            handlePartnerAddClick={handlePartnerAddClick}
          />
        )}
      </Box>
      <Paginations handlePageChange={handlePageChange} />
    </Box>
  );
};

export default Partners;
