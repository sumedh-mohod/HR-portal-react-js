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
        paddingBottom:"11px"
      },
    },
    assetsDescriptionBox2: {
        sx: {
          borderTop: "1px solid #C5C7CD",
          paddingTop: "11px", 
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between"
        },
      },
    assetsDescription: {
      sx: {
        fontSize: "12px",
        fontFamily: "Montserrat",
        color: "#252733",
        fontWeight:"300",
        display:"flex",
        mt:1
      },
    },
    assetsDescriptionValue:{
        sx:{
        fontSize: "12px",
        fontFamily: "Montserrat",
        color: "#252733",
        fontWeight:"800",
        ml:"5px",
        }
    },
    addPartnerIcon: {
      sx: {
        fontSize: "16px",
        fontWeight: "600",
        fontFamily: "Montserrat",
      },
    },
    QRiconBox:{
        sx:{
        padding:"5px",
        paddingY:"2px",
        backgroundColor: "#F58634",
        borderRadius:"5px",
        disply:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItem:"conter",
        width:"max-content",
        cursor:"pointer"
        }
    }
  };
  