import React, { useEffect, useState } from 'react'
import { Box, Button, Card, FormControl, FormLabel, Grid, TextField, MenuItem, Typography } from '@mui/material'
import AddIcon from "@mui/icons-material/Add";
import HolidayCard from '../../components/Company/HolidayCard'
import Search from "../../components/HigherOrder/Search";
import { globalStyles } from '../../styles/global'
import { styles } from '../../styles/screens/CompanyList'
import Paginations from '../../components/HigherOrder/Paginations';

let PageSize = 5;

const Hollidays = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState<any>([]);

    useEffect(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        // const DataSliced = values?.slice(firstPageIndex, lastPageIndex);
        // setCurrentData(DataSliced);
    }, [currentPage]);

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box {...styles.companyTitleBox}>
                <Typography variant="h5" {...globalStyles.moduleTitle}>
                    Company
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Button
                        variant="contained"
                        // onClick={handlePartnerAddClick}
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
                    <Search
                        // searchText={searchText}
                        // handleSearchChange={handleSearchChange}
                        placeholder={"Search..."}
                    />
                </Box>
            </Box>

            {/* company select card */}
            <Card sx={{ mt: 3, p: 5 }}>
                <Grid container>
                    <Grid md={3} lg={3} spacing={2}>
                        <FormControl fullWidth>
                            <FormLabel id="selectCompany" {...globalStyles.textFieldLabel}>
                                Select Company
                            </FormLabel>
                            <TextField
                                select
                                name="selectCompany"
                                variant="filled"
                                size="small"
                                id="selectCompany"
                                InputProps={{
                                    disableUnderline: true,
                                    style: { ...globalStyles.textField },
                                }}
                            >
                                <MenuItem value="Nagpur">Company1</MenuItem>
                            </TextField>
                        </FormControl>
                    </Grid>
                </Grid>
            </Card>
            {/* holliday component card */}
            <Box {...styles.companyTitleBox}>
                <Typography variant="h5" {...globalStyles.moduleTitle}>
                    Holiday
                </Typography>
            </Box>
            <HolidayCard />
            <Paginations handlePageChange={handlePageChange} />
        </Box>
    )
}

export default Hollidays