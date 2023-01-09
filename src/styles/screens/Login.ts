import background from "../../assets/images/LoginBackground.svg";

export const styles = {
  parentBox: {
    sx: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  boxCard: {
    sx: {
      borderRadius: "8px",
      background: "#FFFFFF",
      marginBottom: "50px",
      maxWidth: "400px",
      width: "max-content",
    },
  },
  formGrid: {
    sx: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  formTitle: {
    sx: {
      fontWeight: "600",
      fontSize: "18px",
      color: "#252733",
      fontFamily: "Montserrat",
      letterSpacing: "0.6px",
      mt: 3,
    },
  },
  textfieldLable: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "17px",
      letterSpacing: "0.3px",
      marginBottom: "15px",
      color: "#9FA2B4",
    },
  },
  formTextfield: {
    sx: {
      fontSize: "14px",
      color: "#4B506D",
      // opacity: 0.4,
    },
  },
  formPasswordBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "baseline",
    },
  },

  formButtonBox: {
    sx: {
      display: "flex",
      mt: 5,
    },
  },
  formButton: {
    sx: {
      padding: "10px",
      margin: "auto",
      borderRadius: "8px",
      backgroundColor: "#F58634",
      color: "white",
      "&:hover": {
        backgroundColor: "#F58634",
        boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
      },
    },
  },
  footerTitleBox: {
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      pl: "10px",
      pr: "10px",
    },
  },
  footerTitle: {
    sx: {
      fontWeight: "600",
      fontSize: "18px",
      color: "white",
    },
  },
};
