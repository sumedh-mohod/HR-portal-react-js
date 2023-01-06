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
      fontfamily: "Montserrat",
      fontStyle: "normal",
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

  card: {
    sx: {
      mt: 3,
      mb: 3,
      p: 5,
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
      marginTop:"14px",
      background: "white",
      color: "black",
      width: "max-contain",
      textTransform: "inherit",
      padding: "2px",
      fontSize: "11px",
    },
  },

  textFieldLabel: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "17px",
      letterSpacing: "0.3px",
      marginBottom: "10px",
    },
  },
};
