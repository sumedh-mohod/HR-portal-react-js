import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Card,
} from "@mui/material";
import { styles } from "styles/components/addPartner";
import { useNavigate } from "react-router-dom";
import { globalStyles } from "styles/global";
import { GridColDef } from "@mui/x-data-grid";
import InventoryList from "components/Assets/InventoryList";
import QRiconBox from "components/Assets/QRiconBox";
import Paginations from "components/HigherOrder/Paginations";

const Inventory = () => {
  let PageSize = 5;
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
      assetsName: "Office Chair",
      category: "Furniture",
      subCategory: "Chair",
      description: "New chair with good quality",
    },
    {
      id: 2,
      assetsName: "laptop",
      category: "Furniture",
      subCategory: "Chair",
      description: "New chair with good quality",
    },
    {
      id: 3,
      assetsName: "charger",
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
    {
        id: 7,
        assetsName: "Office Chair",
        category: "Furniture",
        subCategory: "Chair",
        description: "New chair with good quality",
      },
      {
        id: 8,
        assetsName: "Office Chair",
        category: "Furniture",
        subCategory: "Chair",
        description: "New chair with good quality",
      },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<any>([]);
  const [showColumns, setShowColumns] = useState(columns);

  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const DataSliced = row.slice(firstPageIndex, lastPageIndex);
    setCurrentData(DataSliced);
  }, [currentPage]);

  const navigate = useNavigate();

  const handleCancle = () => {
    navigate(-1);
  };
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  return (
    <Box>
      <Box {...styles.parentBox}>
        <Typography {...globalStyles.moduleTitle} variant="h5">
          Inventory
        </Typography>
        <Box>
          <Button
            {...styles.parentBoxCancleButton}
            variant="contained"
            onClick={handleCancle}
          >
            Cancle
          </Button>
          <Button
            {...styles.parentBoxSaveButton}
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </Box>
      </Box>
      <Box>
        <InventoryList
          showColumns={showColumns?.length >= 0 ? showColumns : []}
          rows={
            currentData !== undefined && currentData?.length >= 0
              ? currentData
              : []
          }
        />
      </Box>
      {row?.length > 0 && <Paginations handlePageChange={handlePageChange} />}
    </Box>
  );
};

export default Inventory;
