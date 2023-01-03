export const styles = {
  projectTitleBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      justifyItems: "center",
      alignContent: "flex-start",
      mt: 2,
    },
  },
  projectCard: {
    sx: {
      p: 5,
      pt: 1,
      pb: 1,
      fontSize: "16px",
      height: "auto",
      cursor: "pointer",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      flex: 1,
    },
  },
  projectName: {
    sx: {
      fontSize: "14px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      color: "#252733",
      mt: 1,
      paddingBottom: "11px",
    },
  },
  projectDescriptionBox: {
    sx: {
      borderTop: "1px solid #C5C7CD",
      paddingTop: "11px",
    },
  },
  projectDescription: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  addProjectCard: {
    sx: {
      p: 3,
      pt: 1,
      pb: 1,
      fontSize: "14px",
      fontWeight: "600",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100%",
      maxHeight: "100%",
      height: "208px",
      outline: "2px dashed #C0C0C0",
      boxShadow: "none",
      cursor: "pointer",
    },
  },
  addProjectIcon: {
    sx: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Montserrat",
    },
  },
};
