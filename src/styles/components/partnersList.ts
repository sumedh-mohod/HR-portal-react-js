export const styles = {
  partnerTitleBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      justifyItems: "center",
      alignContent: "flex-start",
      mt: 2,
    },
  },
  partnerCard: {
    sx: {
      p: 2,
      pt: 1,
      pb: 0,
      fontSize: "16px",
      height: {
        xl: "35vh",
        lg: "35vh",
      },
      cursor: "pointer",
      // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  partnerName: {
    sx: {
      fontSize: "14px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      color: "#252733",
      mt: 1,
      paddingBottom: "11px",
    },
  },
  partnerDescriptionBox: {
    sx: {
      borderTop: "1px solid #C5C7CD",
      paddingTop: "11px",
    },
  },
  partnerDescription: {
    sx: {
      fontSize: "14px",
      //   fontWeight: "600",
      fontFamily: "Montserrat",
      color: "#252733",
    },
  },
  addPartnerCard: {
    sx: {
      p: 3,
      pt: 1,
      pb: 1,
      fontSize: "14px",
      fontWeight: "600",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: {
        xl: "35vh",
        lg: "35vh",
      },
      outline: "2px dashed #C0C0C0",
      boxShadow: "none",
      cursor: "pointer",
    }},
    addPartnerIcon: {
      sx: {
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: "Montserrat",
      },
    },
};
