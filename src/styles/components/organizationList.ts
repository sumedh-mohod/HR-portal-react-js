export const styles = {
  List: {
    sx: {
      display: "flex",
      borderBottom: "1px solid #C5C7CD",
      p: 0,
      mt: 5,
    },
  },
  ListItem: {
    sx: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "22px",
      letterSpacing: "0.2px",
      color: "#515151",
      px: 0,
      pb: 1,
      width: "max-content",
      textAlign: "start",
      mr: 4,
      "&.Mui-selected": {
        borderBottom: "2px solid #F58634",
        background: "none",
        color: "#F58634",
      },
      "&.Mui-focusVisible": {
        background: "none",
      },
      "&hover": {
        background: "none",
      },
    },
  },
};
