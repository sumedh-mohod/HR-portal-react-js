export const styles = {
    parentBox: {
      sx: {
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
      },
    },
    Tabs: {
        sx: {
          display: "flex",
          borderBottom: "1px solid #C5C7CD",
          p: 0,
          mt: 5,
          flexWrap:"wrap",  
        },
      },
      Tab: {
        sx: {
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "22px",
          letterSpacing: "0.2px",
          color: "#515151",
          textTransform:"inherit",
          px: 0,
          pb: 1,
          width: "max-content",
          textAlign: "start",
          mr: 4,
          tab: {
            border: "none",
          },
          "&.Mui-selected": {
            border: "none",
            borderBottom: "2px solid #F58634",
            borderColor: "#F58634",
            background: "none",
            color: "#F58634",
            outline: "none",
            borderTopWidth: 0,
          },
          "&.Mui-focusVisible": {
            background: "none",
          },
          "&hover": {
            background: "none",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
          ".tabBarStyle": {
            borderTopWidth: 0,
          },
          ".& tabBarOptions": {
            style: {
              // Remove border top on both android & ios
              borderTopWidth: 0,
              borderTopColor: "transparent",
    
              elevation: 0,
              shadowColor: "#5bc4ff",
              shadowOpacity: 0,
              shadowOffset: {
                height: 0,
              },
              shadowRadius: 0,
            },
          },
        },
      },
}