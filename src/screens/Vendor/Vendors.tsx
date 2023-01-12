import React, { useEffect, useState, useMemo } from "react";

import { useNavigate } from "react-router-dom";

import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import { GridColDef } from "@mui/x-data-grid";

import { styles } from "../../styles/screens/CompanyList";
import { globalStyles } from "../../styles/global";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import VendorCard from "../../components/Vendor/VendorCard";
import VendorList from "../../components/Vendor/VendorList";
import Paginations from "../../components/HigherOrder/Paginations";
import CustomizationButtons from "../../components/HigherOrder/CustomizationButtons";
import Loader from "../../components/HigherOrder/Loader";
import { getVendors } from "../../store/reducers/vendors/vendors";

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "Sr",
        minWidth: 50,
        width: 100,
        hide: false,
    },
    {
        field: "vendor_name",
        headerName: "Vendor Name",
        width: 300,
        minWidth: 200,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "Address_Line_1",
        headerName: "Address Line 1",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "Address_Line_2",
        headerName: "Address Line 2",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "city",
        headerName: "city",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "state",
        headerName: "state",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "country",
        headerName: "country",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "Postal_Code",
        headerName: "Postal Code",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
    {
        field: "Vendor_Onboard_Date",
        headerName: "Vendor onboard Date",
        width: 100,
        minWidth: 150,
        maxWidth: 400,
        hide: false,
    },
];


let PageSize = 5;

const Vendors = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [designView, setDesignView] = useState("grid");
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [showColumns, setShowColumns] = useState(columns);
    const [currentPage, setCurrentPage] = useState(1);

    const openDropDown = Boolean(anchorEl);

    const vendorsStore = useAppSelector((state) => state.vendors);
    const { isLoadingRequest, vendors } = vendorsStore;
   console.log("vendor response",vendors);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return vendors?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, isLoadingRequest]);

    useEffect(() => {
        dispatch(getVendors())
            .unwrap()
            .then((response: any) => { })
            .catch((error) => { });
    }, []);

    const handleVendorAddClick = () => {
        navigate("/vendors/add");
    };

    const handleVendorEditClick = (vendor: any) => {
        navigate("/vendors/edit", {
            state: { vendor },
        });
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
            {/* box for search bar and vendor */}
            <Box {...styles.companyTitleBox}>
                <Typography variant="h5" {...globalStyles.moduleTitle}>
                    Vendors
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={handleVendorAddClick}
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
                    <VendorList
                        showColumns={showColumns?.length >= 0 ? showColumns : []}
                        rows={
                            currentTableData !== undefined && currentTableData?.length >= 0
                                ? currentTableData
                                : []
                        }
                    />
                ) : (
                    <VendorCard
                        vendors={currentTableData}
                        handleVendorEditClick={handleVendorEditClick}
                        handleVendorAddClick={handleVendorAddClick}
                    />
                )}
            </Box>
            <Paginations handlePageChange={handlePageChange} />
        </Box>
    );
};

export default Vendors;
