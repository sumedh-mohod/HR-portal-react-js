export const styles = {
  parentBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      mt: 5,
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
  logoTextfield: {
    sx: {
      "& .MuiInputBase-input": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "60%",
        display: "inline-block",
      },
    },
  },
  selectFileButton: {
    sx: {
      background: "white",
      color: "black",
      textTransform: "inherit",
      marginBottom: "-10px",
      padding: "1px 5px",
      fontSize: "12px",
    },
  },
};
