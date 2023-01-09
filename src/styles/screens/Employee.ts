export const styles = {
  employeeTitleBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      width: "fullwidth",
      justifyItems: "center",
      alignContent: "flex-start",
      mt: 2,
      flexGrow: 1,
    },
  },
  employeeCard: {
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
      fontSize: "12px",
      fontWeight: "lighter",
      fontFamily: "Montserrat",
      color: "#252733",
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
