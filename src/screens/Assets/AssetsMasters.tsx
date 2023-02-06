import React, { useState, useEffect } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { Box, Typography, Button } from "@mui/material";
import { globalStyles } from "styles/global";
import Search from "components/HigherOrder/Search";
import AddIcon from "@mui/icons-material/Add";
import { styles } from "styles/screens/AssetsMastersList";
import { useNavigate } from "react-router";
import QRiconBox from "components/Assets/QRiconBox";
import AssetsMastersList from "components/Assets/AssetsMastersList";
import Paginations from "components/HigherOrder/Paginations";

const columns: GridColDef[] = [
    { field: "id", headerName: "Sr", minWidth: 50, hide: false },
    {
        field: "categoryName",
        headerName: "Name",
        width: 200,
        minWidth: 150,
        maxWidth: 200,
        hide: false,
    },
    {
        field: "subCategoryName",
        headerName: "Sub-Category Name",
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
            return <QRiconBox data={params.row} />;
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
        categoryName: "Office Chair",
        subCategoryName: "Chair",
        description: "New chair with good quality",
    },
    {
        id: 2,
        categoryName: "laptop",
        subCategoryName: "Chair",
        description: "New chair with good quality",
    },
    {
        id: 3,
        categoryName: "charger",
        subCategoryName: "Chair",
        description: "New chair with good quality",
    },
    {
        id: 4,
        categoryName: "Office Chair",
        subCategoryName: "Chair",
        description: "New chair with good quality",
    },
    {
        id: 5,
        categoryName: "Fan",
        subCategoryName: "Chair",
        description: "New chair with good quality",
    },
    {
        id: 6,
        categoryName: "Office Chair",
        subCategoryName: "Chair",
        description: "New chair with good quality",
    },
    {
        id: 7,
        categoryName: "Office Chair",
        subCategoryName: "Chair",
        description: "New chair with good quality",
    },
    {
        id: 8,
        categoryName: "Office Chair",
        subCategoryName: "Chair",
        description: "New chair with good quality",
    },
];

let PageSize = 5;

const AssetsMasters = () => {
    const [showColumns, setShowColumns] = useState(columns);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [currentData, setCurrentData] = useState<any>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        const DataSliced = row.slice(firstPageIndex, lastPageIndex);
        setCurrentData(DataSliced);
    }, [currentPage]);

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };

    const handleAssetsMasterAddClick = () => {
        navigate("/assets/assetsmasteradd");
    };

    const handleSearchChange = (event: any) => {
        const SearchText = event.target.value;
        setSearchText(SearchText);

        if (SearchText?.length > 0) {
            console.log("list", SearchText)
            const newFilter = row?.filter((value: any) =>
                value.categoryName?.toLowerCase()?.includes(SearchText?.toLowerCase())
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
        <Box>
            <Box {...styles.assetsTitleBox}>
                <Typography variant="h5" {...globalStyles.moduleTitle}>
                    Assets Masters
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={handleAssetsMasterAddClick}
                        startIcon={<AddIcon />}
                        {...styles.addIcon}
                    >
                        Add
                    </Button>
                    <Search
                        searchText={searchText}
                        handleSearchChange={handleSearchChange}
                        placeholder={"Search..."}
                    />
                </Box>
            </Box>
            <AssetsMastersList
                // handleAssetsAddClick={handleAssetsAddClick}
                showColumns={showColumns?.length >= 0 ? showColumns : []}
                rows={
                    currentData !== undefined && currentData?.length >= 0
                        ? currentData
                        : []
                }
            />
            {row?.length > 0 && <Paginations handlePageChange={handlePageChange} />}
        </Box>
    );
};

export default AssetsMasters;
