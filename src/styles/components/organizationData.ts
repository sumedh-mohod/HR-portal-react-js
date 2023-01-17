import { autoBatchEnhancer } from "@reduxjs/toolkit";
export const styles = {
  OrganizationlDataTitleBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      justifyItems: "center",
      alignContent: "flex-start",
      mt: 2,
      flexGrow: 1,
      width: "fullWidth",
    },
  },
  OtganasationalDataCard: {
    sx: {
      p: 3,
      pt: 1,
      pb: 1,
      m: 1,
      fontSize: "16px",
      height: "auto",
      cursor: "pointer",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  addCompanyIcon: {
    sx: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Montserrat",
    },
  },
  Tabs: {
    sx: {
      display: "flex",
      borderBottom: "1px solid #C5C7CD",
      p: 0,
      mt: 5,
    },
  },
  Tab: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "22px",
      letterSpacing: "0.2px",
      color: "#515151",
      px: 0,
      pb: 1,
      width: "max-content",
      textAlign: "start",
      mr: 4,
      tab: {
        border: "none",
      },
      "&.Mui-selected": {
        border: "none",
        borderBottom: "2px solid #F58634",
        borderColor: "#F58634",
        background: "none",
        color: "#F58634",
        outline: "none",
        borderTopWidth: 0,
      },
      "&.Mui-focusVisible": {
        background: "none",
      },
      "&hover": {
        background: "none",
      },
      "& .MuiTabs-indicator": {
        display: "none",
      },
      ".tabBarStyle": {
        borderTopWidth: 0,
      },
      ".& tabBarOptions": {
        style: {
          // Remove border top on both android & ios
          borderTopWidth: 0,
          borderTopColor: "transparent",

          elevation: 0,
          shadowColor: "#5bc4ff",
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
        },
      },
    },
  },
  // model
  modalBox: {
    sx: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 450,
      background: "#FFFFFF",
      border: "2px solid #DFDFDF",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "5px",
    },
  },

  textFieldlable: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "12px",
      letterSpacing: "0.3px",
      color: "#252733",
    },
  },

  textField: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      letterSpacing: "0.2px",
      color: "#000000",
    },
  },

  parentBoxCancleButton: {
    sx: {
      backgroundColor: "#FFFFFF",
      color: "black",
      borderRadius: "5px",
      marginRight: "10px",
      fontfamily: "Montserrat",
      fontStyle: "normal",
    },
  },
  parentBoxUploadButton: {
    sx: {
      backgroundColor: "#0FBD35",
      color: "white",
      borderRadius: "5px",
      fontfamily: "Montserrat",
      fontStyle: "normal",
      mt: 4,
      p: 1,
    },
  },
  selectFileButton: {
    sx: {
      marginTop: "14px",
      background: "white",
      color: "black",
      width: "max-contain",
      textTransform: "inherit",
      padding: "2px",
      fontSize: "11px",
    },
  },
  logoTextfield: {
    sx: {
      "& .MuiInputBase-input": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        // width: "60%",
        display: "inline-block",
      },
    },
  },
  parentBoxSaveButton: {
    sx: {
      fontfamily: "Montserrat",
      backgroundColor: "#F58634",
      borderRadius: "5px",
      marginLeft: "10px",
      fontStyle: "normal",
    },
  },
};
