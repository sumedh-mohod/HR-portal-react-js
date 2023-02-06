export const styles = {
  assetsTitleBox: {
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
  assetsCard: {
    sx: {
      p: 1,
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
  },
  assetsName: {
    sx: {
      fontSize: "14px",
      fontWeight: "600",
      fontFamily: "Montserrat",
      color: "#252733",
      mt: 1,
      paddingBottom: "11px",
    },
  },
  assetsDescriptionBox: {
    sx: {
      borderTop: "1px solid #C5C7CD",
      paddingTop: "11px",
      paddingBottom: "11px",
    },
  },
  assetsDescriptionBox2: {
    sx: {
      borderTop: "1px solid #C5C7CD",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding:0,
      paddingTop: "11px",
      alignItems:"center"
    },
  },
  assetsDescription: {
    sx: {
      fontSize: "12px",
      fontFamily: "Montserrat",
      color: "#252733",
      fontWeight: "300",
      display: "flex",
      mt: 1,
    },
  },
  assetsDescriptionValue: {
    sx: {
      fontSize: "12px",
      fontFamily: "Montserrat",
      color: "#252733",
      fontWeight: "800",
      ml: "5px",
    },
  },
  addPartnerIcon: {
    sx: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Montserrat",
    },
  },
  QRiconBox: {
    sx: {
      padding: "5px",
      paddingY: "2px",
      backgroundColor: "#F58634",
      borderRadius: "5px",
      disply: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItem: "conter",
      width: "max-content",
      cursor: "pointer",
   
    },
  },
  // model
  modalBox: {
    sx: {
      position: "absolute" as "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 350,
      background: "#FFFFFF",
      border: "2px solid #DFDFDF",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "5px",
    },
  },

 

  textField: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      letterSpacing: "0.2px",
      color: "#000000",
    },
  },

  CancleButton: {
    sx: {
      backgroundColor: "#FFFFFF",
      color: "#1C1B1F",
      borderRadius: "5px",
      marginRight: "10px",
      fontfamily: "Montserrat",
      fontStyle: "normal",
      cursor: "pointer",
      border: "1px solid #C5C7CD",
      paddingX: "15px",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "inherit",
    },
  },

  PrintButton: {
    sx: {
      fontfamily: "Montserrat",
      backgroundColor: "#F58634",
      borderRadius: "5px",
      marginLeft: "10px",
      fontStyle: "normal",
      cursor: "pointer",
      paddingX: "25px",
      color: "#FFFFFF",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "inherit",
    },
  },
  qrBox: {
    sx: {
      marginTop: "160px",
      marginBottom: "30px",
      border:"1px solid red"
    },
  },
  subModelBox:{
    SX:{
        p:5,
        display: "flex",
        flexDirection: "column",
        justifyContent:"space-between",
        alignItems: "center",
      }
    },
    modelButtonBox:{
      sx:{      
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        p:2 

      }
    },
    modelTypographyBox:{
      sx:{
        display: "flex",
        p:2,
        flexDirection: "column",
        alignItems: "center",
      }
    }
  }
