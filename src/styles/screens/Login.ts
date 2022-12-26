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
      padding: "20px",
      marginBottom: "50px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "360px",
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
      fontWeight: "700",
      fontSize: "18px",
      color: "#252733",
    },
  },
  formUsernameLable: {
    sx: {
      fontWeight: "700",
      fontSize: "12px",
      color: "#9FA2B4",
    },
  },
  formUsernameTextfield: {
    sx: {
      fontSize: "14px",
      // color: "#4B506D",
      // opacity: 0.4,
      width: "292px",
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
  formPasswordLable: {
    sx: {
      fontWeight: "700",
      fontSize: "12px",
      color: "#9FA2B4",
    },
  },
  formPasswordForgot: {
    sx: {
      fontSize: "10px",
      color: "#9FA2B4",
    },
  },
  formPasswordTextfield: {
    sx: {
      fontSize: "14px",
      // color: "#4B506D",
      // opacity: 0.4,
      width: "292px",
    },
  },
  formButtonBox: {
    sx: {
      display: "flex",
      pl: "10px",
      pr: "10px",
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
