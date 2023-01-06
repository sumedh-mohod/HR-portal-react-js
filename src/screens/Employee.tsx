import React, { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
// import { getEmployee} from "../store/reducers/employee/employee";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/Employee";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { globalStyles } from "../styles/global";
import EmployeeCard from "../components/GridView/EmployeeCard";
import EmployeeList from "../components/ListView/EmployeeList";
import CustomizationButtons from "../components/CustomizationButtons";
import Paginations from "../components/ListView/Paginations";

// colums data
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Sr.",
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
    id: 5,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 6,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 7,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 8,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 9,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 10,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 11,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
  {
    id: 12,
    name: "Nikhil Thaware",
    EmployeeId: "ORNG123456",
    Designation: "Senior Consultant",
    Technology: "IOS Developer, Swift",
  },
];

const Employee = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const calculate = rows.length / 5;
  const numberOfPages = Math.ceil(calculate);
  console.log("numberOfPages", numberOfPages);
  //   const partnersStore = useAppSelector((state) => state.partners);
  //   const { isLoadingRequest, partners } = partnersStore;
  //   console.log("partners data is", partners);
  const [designView, setDesignView] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Container>
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
      <Box>
        {designView === "list" ? (
          <EmployeeList columns={showColumns} rows={rows} />
        ) : (
          <EmployeeCard
            employee={rows}
            handleEmployeeEditClick={handleEmployeeEditClick}
            handleEmployeeAddClick={handleEmployeeAddClick}
            index={undefined}
          />
        )}
      </Box>
      {/* <Paginations
        numberOfPages={numberOfPages}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      /> */}
    </Container>
  );
};

export default Employee;
