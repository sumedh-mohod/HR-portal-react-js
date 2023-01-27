export const styles = {
  parentBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      mt: 2,
    },
  },
  parentBoxCancleButton: {
    sx: {
      backgroundColor: "#FFFFFF",
      color: "black",
      borderRadius: "5px",
      marginRight: "10px",
    },
  },
  parentBoxSaveButton: {
    sx: {
      backgroundColor: "#F58634",
      borderRadius: "5px",
      marginLeft: "10px",
    },
  },

  card: {
    sx: {
      mt: 3,
      mb: 3,
      p: 5,
    },
  },

  gridItem: {
    sx: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      mt: 1,
      pt: 2,
    },
  },

  taxRightClickIconBox: {
    sx: {
      width: "48px",
      height: "48px",
      borderRadius: "5px",
      backgroundColor: "#0FBD35",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      mr: 3,
      cursor: "pointer",
    },
  },
  taxCloseClickIconBox: {
    sx: {
      width: "48px",
      height: "48px",
      borderRadius: "5px",
      backgroundColor: "#D82A2A",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  },
  addButton: {
    sx: {
      marginLeft: "20px",
      justifyContent: "center",
      alignItems: "center",
      height: "48px",
      paddingLeft: "15px",
      paddingRight: "15px",
      border: "2px dashed #C0C0C0",
      boxShadow: "none",
      color: "#1C1B1F",
      borderRadius: "5px",
    },
  },
  addIcon: {
    sx: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      marginRight: 1,
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
};
