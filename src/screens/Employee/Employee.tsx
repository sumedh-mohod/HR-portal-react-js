import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import EmployeeCard from "components/Employee/EmployeeCard";
import EmployeeList from "components/Employee/EmployeeList";
import Loader from "components/HigherOrder/Loader";
import Search from "components/HigherOrder/Search";
import CustomizationButtons from "components/HigherOrder/CustomizationButtons";
import Paginations from "components/HigherOrder/Paginations";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getEmployees } from "store/reducers/employee/employees";
import { globalStyles } from "styles/global";
import { styles } from "styles/screens/Employee";

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
    field: "employee_name",
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

let PageSize = 5;
const Employee = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [designView, setDesignView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDropDown = Boolean(anchorEl);
  const [showColumns, setShowColumns] = useState(columns);
  const [searchText, setSearchText] = useState("");
  const [currentData, setCurrentData] = useState<any>([]);

  const employeesStore = useAppSelector((state) => state.employees);
  const { isLoadingRequest, employees } = employeesStore;
  console.log("employees data from employee.tsx", employees);

  useEffect(() => {
    dispatch(getEmployees())
      .unwrap()
      .then((response: any) => { })
      .catch((error: any) => { });
  }, []);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const DataSliced = employees?.slice(firstPageIndex, lastPageIndex);
    setCurrentData(DataSliced);
  }, [currentPage, isLoadingRequest]);

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
  const handleSearchChange = (event: any) => {
    const SearchText = event.target.value;
    setSearchText(SearchText);

    if (SearchText.length > 0) {
      const newFilter = employees.filter((value: any) =>
        value.employee_name.toLowerCase().includes(SearchText.toLowerCase())
      );
      console.log("newFilter", newFilter);
      setCurrentData(newFilter);
    } else {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;

      const DataSliced = employees?.slice(firstPageIndex, lastPageIndex);
      setCurrentData(DataSliced);
    }
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

          <Search
            searchText={searchText}
            handleSearchChange={handleSearchChange}
            placeholder={"Employees..."}
          />
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {designView === "list" ? (
          <EmployeeList
            showColumns={showColumns?.length >= 0 ? showColumns : []}
            rows={
              currentData !== undefined && currentData?.length >= 0
                ? currentData
                : []
            }
          />
        ) : (
          <EmployeeCard
            employee={currentData}
            handleEmployeeEditClick={handleEmployeeEditClick}
            handleEmployeeAddClick={handleEmployeeAddClick}
            index={undefined}
          />
        )}
      </Box>
      {employees?.length > 0 && (
        <Paginations handlePageChange={handlePageChange} />
      )}
    </Box>
  );
};

export default Employee;
