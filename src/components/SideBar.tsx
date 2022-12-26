import React from "react";

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
import DashboardIcon from "@mui/icons-material/Dashboard";
import { styled, Theme, CSSObject } from "@mui/material/styles";

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

const Menus = [
  {
    name: "Comapny",
    icon: <DashboardIcon />,
    route: "#1",
  },
  {
    name: "Accounting",
    icon: <DashboardIcon />,
    route: "#2",
  },
  {
    name: "Assets",
    icon: <DashboardIcon />,
    route: "#3",
  },
  {
    name: "Partners",
    icon: <DashboardIcon />,
    route: "/partners",
  },
  {
    name: "Project",
    icon: <DashboardIcon />,
    route: "#5",
  },
  {
    name: "Employee",
    icon: <DashboardIcon />,
    route: "#6",
  },
  {
    name: "Settings",
    icon: <DashboardIcon />,
    route: "#7",
  },
  {
    name: "Venders",
    icon: <DashboardIcon />,
    route: "#8",
  },
  {
    name: "Recruitment",
    icon: <DashboardIcon />,
    route: "#9",
  },
  {
    name: "Training",
    icon: <DashboardIcon />,
    route: "#10",
  },
];

const SideBar = ({ open, setOpen }: any) => {
  const navigate = useNavigate();

  const [subopen, setSubOpen] = React.useState(false);
  const [activeRoute, setActiveRoute] = React.useState("home");

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerNavigation = (item: any) => {
    if (item.name === "Comapny") {
      setSubOpen(!subopen);
    } else {
      setActiveRoute(item.route);
      navigate(`${item.route}`);
    }
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
        {Menus.map((text, index) => (
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
                onClick={() => {
                  handleDrawerNavigation(text);
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
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            {text.name === "Comapny" ? (
              <Collapse in={subopen} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  sx={{
                    display: "block",
                    color: "white",
                  }}
                >
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Master" sx={{ opacity: 1 }} />
                  </ListItemButton>
                </List>
              </Collapse>
            ) : null}
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
