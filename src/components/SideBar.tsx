import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  IconButton,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Collapse,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { Menus } from "../assets/constants/menus";
import Icon from "@mui/material/Icon";

import OrangeBitsIcon from "./Icons/OrangeBitsIcon";
import { styles } from "../styles/components/header";

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

  const [activeRoute, setActiveRoute] = useState("home");
  const [sideBarMenus, setSideBarMenus] = useState(Menus);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerNavigation = (item: any) => {
    const filerted = sideBarMenus?.map((value: any) =>
      item.id === value.id ? { ...value, active: !value.active } : value
    );

    setSideBarMenus([...filerted]);
  };

  const handleNavigation = (item: any) => {
    setActiveRoute(item.route);
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
            <>
              <ListItem
                key={text.name}
                disablePadding
                sx={{
                  display: "block",
                  color: activeRoute === text.route ? "white" : "#A4A6B3",
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
                      color: activeRoute === text.route ? "white" : "#A4A6B3",
                    }}
                  >
                    <ICON />
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
                        sx={{ pl: 4 }}
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
            </>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SideBar;
