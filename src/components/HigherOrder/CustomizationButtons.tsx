import React from "react";

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

interface CustomizationButtonsInterface {
  setDesignView: any;
  handleClickDropDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseDropDown: () => void;
  handleAddColumn: (item: any) => void;
  handleRemoveColumn: (item: any) => void;
  designView: string;
  openDropDown: boolean;
  anchorEl: any;
  showColumns: any;
}

const CustomizationButtons = (props: CustomizationButtonsInterface) => {
  const {
    setDesignView,
    handleClickDropDown,
    handleCloseDropDown,
    handleAddColumn,
    handleRemoveColumn,
    designView,
    openDropDown,
    anchorEl,
    showColumns,
  } = props;

  return (
    <>
      <IconButton
        sx={{
          padding: "5px",
          borderRadius: "5px",
          border: "solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "grey",
          borderWidth: "thin",
          mr: "10px",
          cursor: "pointer",
        }}
        disabled={designView === "grid" ? true : false}
        onClick={() => {
          setDesignView("grid");
        }}
      >
        <GridViewOutlinedIcon />
      </IconButton>
      <IconButton
        sx={{
          padding: "5px",
          borderRadius: "5px",
          border: "solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "grey",
          borderWidth: "thin",
          mr: "10px",
          cursor: "pointer",
        }}
        disabled={designView === "list" ? true : false}
        onClick={() => {
          setDesignView("list");
        }}
      >
        <FormatListBulletedOutlinedIcon />
      </IconButton>
      <IconButton
        sx={{
          padding: "5px",
          borderRadius: "5px",
          border: "solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderColor: "grey",
          borderWidth: "thin",
          cursor: "pointer",
        }}
        id="basic-button"
        aria-controls={openDropDown ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={openDropDown ? "true" : undefined}
        onClick={handleClickDropDown}
        disabled={designView === "grid" ? true : false}
      >
        <ViewColumnOutlinedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openDropDown}
        onClose={handleCloseDropDown}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& 	.MuiMenu-paper": {
            width: "22vw",
            padding: "10px",
          },
        }}
      >
        {showColumns.map((item: any) => (
          <MenuItem
            key={item?.headerName}
            sx={{
              "&:hover": {
                cursor: "default",
              },
              padding: "5px",
              border: "solid",
              borderWidth: 1,
              borderRadius: "5px",
              marginTop: "15px",
              borderColor: "#DFDFDF",
              backgroundColor: !item.hide ? "#EDEDED" : "white",
            }}
          >
            <ListItemIcon>
              <DragIndicatorIcon />
            </ListItemIcon>
            <ListItemText
              sx={{
                textAlign: "start",
              }}
            >
              {item.headerName}
            </ListItemText>
            <ListItemIcon
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {item.hide ? (
                <AddIcon
                  onClick={() => {
                    handleAddColumn(item);
                  }}
                />
              ) : (
                <CloseIcon
                  onClick={() => {
                    handleRemoveColumn(item);
                  }}
                />
              )}
            </ListItemIcon>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CustomizationButtons;
