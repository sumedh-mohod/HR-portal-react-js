import React, { useState, useMemo, useEffect } from "react";

import { GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "../../styles/screens/Employee";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { globalStyles } from "../../styles/global";
import EmployeeCard from "../../components/Employee/EmployeeCard";
import EmployeeList from "../../components/Employee/EmployeeList";
import CustomizationButtons from "../../components/HigherOrder/CustomizationButtons";
import Paginations from "../../components/HigherOrder/Paginations";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getEmployees } from "../../store/reducers/employee/employees";
import Loader from "../../components/HigherOrder/Loader";
// colums data
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr.",
    minWidth: 50,
    width: 100,
    hide: false,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    minWidth: 200,
    maxWidth: 400,
    hide: false,
  },

  {
    field: "EmployeeId",
    headerName: "Employee Id",
    width: 300,
    minWidth: 200,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "Designation",
    headerName: "Designation",
    width: 300,
    minWidth: 200,
    maxWidth: 400,
    hide: false,
  },
  {
    field: "Technology",
    headerName: "Technology",
    width: 300,
    minWidth: 200,
    maxWidth: 400,
    hide: false,
  },
];
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
];
let PageSize = 5;
const Employee = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [designView, setDesignView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropDown = Boolean(anchorEl);
  const [showColumns, setShowColumns] = useState(columns);

  const employeesStore = useAppSelector((state) => state.employees);
  const { isLoadingRequest, employees } = employeesStore;
  console.log("employee data", employees);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return employees?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    dispatch(getEmployees())
      .unwrap()
      .then((response: any) => {})
      .catch((error: any) => {});
  }, []);

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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Loader isLoading={isLoadingRequest} />
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
      <Box sx={{ flexGrow: 1 }}>
        {designView === "list" ? (
          <EmployeeList columns={showColumns} rows={currentTableData} />
        ) : (
          <EmployeeCard
            employee={currentTableData}
            handleEmployeeEditClick={handleEmployeeEditClick}
            handleEmployeeAddClick={handleEmployeeAddClick}
            index={undefined}
          />
        )}
      </Box>
      <Paginations handlePageChange={handlePageChange} />
    </Box>
  );
};

export default Employee;
