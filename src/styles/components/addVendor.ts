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

  RightClickIconBox: {
    sx: {
      width: "50px",
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

  CloseClickIconBox: {
    sx: {
      width: "50px",
      height: "48px",
      borderRadius: "5px",
      backgroundColor: "#D82A2A",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  },

  checkIcon: {
    sx: {
      width: "30px",
      height: "30px",
      margin: "30px 20px",
      color: "white",
      background: "#0FBD35",
      borderRadius: "5px",
      cursor: "pointer",
    },
  },
  closeIcon: {
    sx: {
      width: "30px",
      height: "30px",
      margin: "30px 20px",
      color: "white",
      background: "#D82A2A;",
      borderRadius: "5px",
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
