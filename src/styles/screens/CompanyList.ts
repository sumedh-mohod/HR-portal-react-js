import { autoBatchEnhancer } from "@reduxjs/toolkit";

export const styles = {
  companyTitleBox: {
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
  companyCard: {
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

  companyName: {
    sx: {
      fontSize: "14px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      color: "#252733",
      mt: 1,
      paddingBottom: "11px",
    },
  },
  companyDescriptionBox: {
    sx: {
      borderTop: "1px solid #C5C7CD",
      paddingTop: "11px",
    },
  },
  companyDescription: {
    sx: {
      fontSize: "12px",
      fontWeight: "lighter",
      fontFamily: "Montserrat",
      color: "#252733",
    },
  },

  addCompanyIcon: {
    sx: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Montserrat",
    },
  },
};
