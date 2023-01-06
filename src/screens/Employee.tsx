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
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Button,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
// import { getEmployee} from "../store/reducers/employee/employee";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/Employee";
import SearchIcon from "@mui/icons-material/Search";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { globalStyles } from "../styles/global";
import EmployeeCard from "../components/GridView/EmployeeCard";
import EmployeeList from "../components/ListView/EmployeeList";
import CustomizationButtons from "../components/CustomizationButtons";
// colums data
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr",
    minWidth: 50,
    hide: false,
  },
  {
    field: "name",
    headerName: "Name",
    width: 100,
    minWidth: 150,
    maxWidth: 200,
    hide: false,
  },

  {
    field: "EmployeeId",
    headerName: "Employee Id",
    width: 200,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "Designation",
    headerName: "Designation",
    width: 200,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "Technology",
    headerName: "Technology",
    width: 200,
    minWidth: 150,
    maxWidth: 400,
    hide: false,
  },
  
];
// row data
const rows = [
  {
    id: 1,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 2,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 3,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 4,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 1,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 2,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 3,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 4,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 1,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 2,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 3,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 4,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
];

const Employee = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //   const partnersStore = useAppSelector((state) => state.partners);
  //   const { isLoadingRequest, partners } = partnersStore;
  //   console.log("partners data is", partners);
  const [designView, setDesignView] = useState("list");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropDown = Boolean(anchorEl);
  const [showColumns, setShowColumns] = useState(columns);
  //   useEffect(() => {
  //     dispatch(getPartners())
  //       .unwrap()
  //       .then((response: any) => {})
  //       .catch((error: any) => {});
  //   }, []);

  // add and edit functions
  const handleEmployeeEditClick = () => {
    navigate("/employees/edit");
  };
  const handleEmployeeAddClick = () => {
    navigate("/employees/add");
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

  return (
    <Box sx={{display:"flex" ,flexDirection:"column"}}>
      {/* box for search bar and company */}
      <Box {...styles.employeeTitleBox}>
        <Typography variant="h5" {...globalStyles.moduleTitle}>
          Employee
        </Typography>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            onClick={handleEmployeeAddClick}
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
          <EmployeeList
            handleEmployeeAddClick={handleEmployeeAddClick}
            showColumns={showColumns}
            rows={rows}
          />
        ) : (
          <EmployeeCard
            employee={rows}
            handleEmployeeEditClick={handleEmployeeEditClick}
            handleEmployeeAddClick={handleEmployeeAddClick}
            index={undefined}
          />
        )}
      </Box>
    </Box>
  );
};

export default Employee;
