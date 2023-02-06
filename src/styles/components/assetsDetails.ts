export const styles = {
  assetsTitleBox: {
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
  editBtn: {
    sx: {
      background: "#F58634",
      borderRadius: "5px",
      mr: "10px",
      cursor: "pointer",
      fontSize: "14px",
      textTransform: "inherit",
    },
  },
  detailsParentBox: {
    sx: { display: "flex", width: "65%" },
  },
  typographyBox: {
    sx: { display: "flex" },
  },
  detailsTypography1: {
    sx: { m: 1, mt: 1, color: "#515151", fontSize: "14px" },
  },
  detailsTypography2: {
    sx: { m: 1, mt: 1, color: "# #515151;", fontSize: "14px" },
  },

  // stepper

  stepperCard: {
    sx: {
      mt: 3,
      mb: 3,
      p: 5,
    },
  },

  stepper: {
    sx: {
      "& .MuiStepLabel-root": {
        color: "#515151",
        fontFamily: "Montserrat",
        fontSize: "13px",
        // circle color (ACTIVE)
      },
      "& .Mui-active": {
        color: "#F58634",
        fontSize: "13px",
        fontFamily: "Montserrat", // circle color (ACTIVE)
      },

      "& .MuiStepLabel-root  .MuiStepIcon-text": {
        display: "none", // for hide 123 no in circle
      },
      "&  .Mui-completed  .MuiStepIcon-text": {
        display: "none!important", // for hide 123 no in circle
      },
      "&	.MuiStepIcon-root": {
        color: " #D9D9D9!important",
        fontSize: "13px",
        marginLeft: "5px",
      },
      "& .Mui-completed .MuiStepIcon-root  .MuiSvgIcon-root   ": {
        background: "#F58634!important",
        borderRadius: "50%",
      },
      "&  .Mui-completed": {
        color: "#F58634 !important",
        fontFamily: "Montserrat !important",
        fontSize: "13px !important", // circle color (COMPLETED)
      },
      "& .Mui-active.MuiStepLabel-alternativeLabel": {
        color: "#515151",
        fontFamily: "Montserrat",
        fontSize: "13px",
        marginLeft: "5px", // Just text label (ACTIVE)
      },
      "& .MuiStepLabel-label": {
        color: "#515151!important",
        fontFamily: "Montserrat",
        fontSize: "13px",
        marginLeft: "5px", // Just text label (ACTIVE)
      },

      "& 	.Mui-active.MuiStepLabel-label": {
        color: "#515151!important",
        fontFamily: "Montserrat",
        fontSize: "13px",
        marginLeft: "5px", // Just text label (ACTIVE)
      },
      "& .MuiSvgIcon-root": {
        background: "#F58634",
        borderRadius: "50%",
        border: "none",
      },
      "& .MuiStepConnector-line": {
        // height: "40px !important",
        marginTop: "-11px !important",
        marginBottom: "-11px !important",
        color: "red",
        backgroundColor: "red !important",
        height: "70px",
      },
      "& .MuiStep-vertical": {
        height: "40px !important",
        marginTop: "-11px !important",
        marginBottom: "-11px !important",
        color: "red",
        backgroundColor: "red !important",
      },
    },
  },
};
