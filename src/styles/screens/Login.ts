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
};
