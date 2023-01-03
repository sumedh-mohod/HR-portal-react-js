export const styles = {
  employeeTitleBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      justifyItems: "center",
      alignContent: "flex-start",
      mt: 2,
    },
  },
  employeeCard: {
    sx: {
      p: 3,
      pt: 1,
      pb: 1,
      fontSize: "16px",
      height: "auto",
      cursor: "pointer",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  employeeName: {
    sx: {
      fontSize: "14px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      color: "#252733",
      mt: 1,
      paddingBottom: "11px",
    },
  },
  employeeDescriptionBox: {
    sx: {
      borderTop: "1px solid #C5C7CD",
      paddingTop: "11px",
    },
  },
  employeeDescription: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
  addEmployeeCard: {
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
  addEmployeeIcon: {
    sx: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Montserrat",
    },
  },
};
