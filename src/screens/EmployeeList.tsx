import React, { useEffect } from "react";
import { Grid, Typography, Paper, Box, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/screens/EmployeeList";
import EmployeeListCard from "../components/ListView/EmployeeListCard";

const EmployeeList = () => {

    const employees = [
        {
            name: "Nikhil Thaware",
            EmployeeId: "ORNG123456",
            Designation: "Senior Consultant",
            Technology: "IOS Developer, Swift"
        },
        {
            name: "Nikhil Thaware",
            EmployeeId: "ORNG123456",
            Designation: "Senior Consultant",
            Technology: "IOS Developer, Swift"
        },
        {
            name: "Nikhil Thaware",
            EmployeeId: "ORNG123456",
            Designation: "Senior Consultant",
            Technology: "IOS Developer, Swift"
        },
    ]
    const navigate = useNavigate();

    const handleEmployeeClick = () => {
        navigate("/employees/add");
    };

    const handleEmployeeEditClick = (employee: any) => {
        navigate("/employees/edit", {
            state: { employee },
        });
    };

    return (
        <Container>
            {/* box for search bar and employee */}
            <Box {...styles.employeeTitleBox}>
                <Typography variant="h5">Employees</Typography>
                <Box>
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
            <Grid container spacing={2} sx={{ mt: 1 }}>
                {employees?.map((employee: any, index: any) => (
                    <EmployeeListCard employee={employee} index={index} handleEmployeeEditClick={handleEmployeeEditClick}/>
                ))}
                <Grid item xs={12} md={3} lg={3}>
                    {/* Card for add company */}
                    <Paper
                        elevation={3}
                        onClick={handleEmployeeClick}
                        {...styles.addEmployeeCard}
                    >
                        <AddIcon fontSize="large" sx={{ pr: 2 }} />
                        <Typography {...styles.addEmployeeIcon}>Add Employee</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EmployeeList;
