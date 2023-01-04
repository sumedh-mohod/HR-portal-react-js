import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF7300",
    },
    secondary: {
      main: "#FB814C",
    },
    info: {
      main: "#353535",
    },
    error: {
      main: "#FF2D00",
    },
    text: {
      primary: "#292727",
    },
  },
  typography: {
    button: {
      fontFamily: "Montserrat",
      fontWeight: 800,
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "6%",
      color: "#000000",
    },
    h1: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "28px",
      color: "#000000",
    },
    h2: {
      fontFamily: "Montserrat",
      fontWeight: "700",
      fontSize: "22px",
      lineHeight: "26px",
      color: "#000000",
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: "700",
      fontSize: "20px",
      lineHeight: "24px",
      color: "#000000",
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: "700",
      fontSize: "18px",
      lineHeight: "22px",
      color: "#000000",
    },
    h5: {
      fontFamily: "Montserrat",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "20px",
      color: "#000000",
    },
    h6: {
      fontFamily: "Montserrat",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "21px",
      color: "#000000",
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: "16px",
      lineHeight: "21px",
      color: "#000000",
    },
    body2: {
      fontFamily: "Montserrat",
      fontSize: "16px",
      lineHeight: "21px",
      color: "#000000",
    },
    subtitle1: {
      fontFamily: "Montserrat",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#000000",
    },
    subtitle2: {
      fontFamily: "Montserrat",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "21px",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
});

export default theme;
