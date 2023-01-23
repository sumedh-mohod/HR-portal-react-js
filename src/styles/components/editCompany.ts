export const styles = {
  // edit Company screen
  box: { sx: { mt: 5, display: "flex", justifyContent: "space-between" } },
  parentBox: {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      mt: 2,
    },
  },
  parentBoxButtonEdit: {
    sx: {
      backgroundColor: "#F58634",
      borderRadius: "5px",
    },
  },
  parentBoxButtonSave: {
    sx: {
      backgroundColor: "#0FBD35",
      borderRadius: "5px",
    },
  },
  parentBoxCancelButton: {
    sx: {
      backgroundColor: "#FFFFFF",
      color: "black",
      borderRadius: "5px",
      marginRight: "10px",
    },
  },
  icon: {
    sx: { pr: 1, fontSize: "inheit" },
  },

  taxCloseClickIconBox: {
    sx: {
      width: "48px",
      height: "48px",
      borderRadius: "5px",
      backgroundColor: "#D82A2A",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  },

  // company details card
  detailsParentBox: {
    sx: { display: "flex", width: "65%" },
  },

  detailsParentSubBox: {
    sx: { textAlign: "left", mx: 1 },
  },
  detailsTypography1: {
    sx: { mt: 2, color: "#515151", fontSize: "14px" },
  },
  detailsTypography2: {
    sx: { mt: 2, color: "# #515151;", fontSize: "14px" },
  },
  // edit company from card
  companySaveButton: {
    sx: {
      backgroundColor: "#9FA2B4",
      borderRadius: "5px",
      textTransform: "inherit",
      width: "100%",
      size: "large",
      py: "12px",
    },
  },
  // holidays card
  gridItem: {
    sx: { display: "flex", justifyContent: "end", alignItems: "end" },
  },
  gridItemSaveButton: {
    sx: {
      mt: 3,
      mx: 1,
      backgroundColor: "#9FA2B4",
      borderRadius: "70px",
      textTransform: "inherit",
      padding: "12px 25px",
    },
  },
  addressAddBtn: {
    sx: {
      background: "#F58634",
      borderRadius: "5px",
      mr: "10px",
      cursor: "pointer",
      fontSize: "14px",
      textTransform: "inherit",
    },
  },
  gridItemSaveButton1: {
    sx: {
      mt: 3,
      mx: 1,
      backgroundColor: "#0FBD35",
      borderRadius: "70px",
      textTransform: "inherit",
      padding: "12px 25px",
    },
  },
  gridItemRemoveButton: {
    sx: {
      mt: 3,
      mx: 1,
      backgroundColor: "#D82A2A",
      borderRadius: "70px",
      textTransform: "inherit",
      py: "12px",
    },
  },
  addButton: {
    sx: {
      backgroundColor: "#F58634",
      borderRadius: "5px",
      textTransform: "inherit",
      width: "100%",
      size: "large",
      py: "12px",
    },
  },
  card: {
    sx: {
      mt: 3,
      mb: 3,
      p: 5,
    },
  },
};
