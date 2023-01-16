import React, { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import {
  IconButton,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Collapse,
  Box,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { Menus } from "../../assets/constants/menus";

import OrangeBitsIcon from "../Icons/OrangeBitsIcon";
import { styles } from "../../styles/components/header";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SideBar = ({ open, setOpen }: any) => {
  const navigate = useNavigate();
  const params = useLocation();

  const [activeRoute, setActiveRoute] = useState<any>();
  const [activeSubRoute, setActiveSubRoute] = useState<any>();

  const [sideBarMenus, setSideBarMenus] = useState(Menus);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const Pathname = params.pathname.split("/");
    const newMenues = sideBarMenus.find(
      (value: any) => value.route === Pathname[1]
    );
    setActiveRoute(newMenues?.id);
    // setActiveSubRoute(newMenues?.submenu[0]);
  }, []);

  const handleDrawerNavigation = (item: any) => {
    setActiveRoute(item.id);
    const filerted = sideBarMenus?.map((value: any) =>
      item.id === value.id
        ? { ...value, active: !value.active }
        : { ...value, active: false }
    );
    navigate(`${item.route}`);
    setSideBarMenus([...filerted]);
  };

  const handleNavigation = (item: any) => {
    setActiveSubRoute(item);
    navigate(`${item.route}`);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#171717",
        },
      }}
    >
      <DrawerHeader {...styles.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <OrangeBitsIcon width={40} style={{ cursor: "pointer" }} />
          <Typography variant="h6" {...styles.drawerHeaderTypography}>
            Orangebits
          </Typography>
        </IconButton>
      </DrawerHeader>
      <List>
        {sideBarMenus.map((text: any, index: number) => {
          const ICON = text.icon;

          return (
            <Box key={text.id}>
              <ListItem
                key={text.id}
                disablePadding
                sx={{
                  display: "block",
                  color: activeRoute === text.id ? "#F58634" : "#A4A6B3",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <ICON
                      fill={activeRoute === text.id ? "#F58634" : "#A4A6B3"}
                    />
                  </ListItemIcon>
                  <ListItemText
                    onClick={() => {
                      handleDrawerNavigation(text);
                    }}
                    primary={text.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <Collapse
                in={
                  sideBarMenus.find((item: any) => item.id === text.id).active
                }
                timeout="auto"
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                  sx={{
                    display: "block",
                    color: "white",
                  }}
                >
                  {text.submenu.map((menu: any, index: number) => {
                    // const SubIcon = menu.icon
                    return (
                      <ListItemButton
                        sx={{
                          pl: 4,
                          borderLeftWidth:
                            activeSubRoute?.id === menu.id ? 3 : 0,
                          borderLeftColor:
                            activeSubRoute?.id === menu.id
                              ? "#F58634"
                              : "#A4A6B3",
                          borderLeftStyle:
                            activeSubRoute?.id === menu.id ? "solid" : "none",
                        }}
                        key={menu.name}
                        onClick={() => {
                          handleNavigation(menu);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: 3,
                            justifyContent: "center",
                            color: "white",
                          }}
                        >
                          {/* <Icon>{text.icon}</Icon> */}
                        </ListItemIcon>
                        <ListItemText primary={menu.name} sx={{ opacity: 1 }} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </Box>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideBar;
