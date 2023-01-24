export const styles = {
    parentBox: {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
      },
    },
    moduleTitle: {
        sx: {
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "Montserrat",
          fontStyle: "normal",
          color: "#F58634",
          lineHeight: "27px",
        },
      },
      parentBoxEditButton: {
        sx: {
          fontfamily: "Montserrat",
          backgroundColor: "#DDE2FF",
          borderRadius: "5px",
          marginLeft: "10px",
          fontStyle: "normal",
          color:"#515151",
          textTransform:"inherit"
        },
      },
      icon: {
        sx: { pr: 1, fontSize: "inheit" },
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
  