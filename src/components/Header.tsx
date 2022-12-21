import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  CssBaseline,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { ReactComponent as IconOrangebits } from "../assets/images/IconOrangebits.svg";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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
    route: "#4",
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

const Header = (props: any) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [activeRoute, setActiveRoute] = React.useState("home");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerNavigation = (item: any) => {
    setActiveRoute(item.route);
    navigate(`${item.route}`);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        open={open}
        color="inherit"
        sx={{
          py: "7.5px",
          borderBottom: "1px solid rgb(177, 197, 178, .3)",
        }}
      >
        <Toolbar sx={{ minHeight: { sm: 10, xs: 8 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Quicksand",
                fontWeight: "bold",
              }}
            >
              E-zest Solutions
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#171717",
          },
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <IconOrangebits width={40} style={{ cursor: "pointer" }} />

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Quicksand",
                fontWeight: "bold",
                color: "white",
                ml: 1,
              }}
            >
              Orangebits
            </Typography>
          </IconButton>
        </DrawerHeader>
        <List>
          {Menus.map((text, index) => (
            <ListItem
              key={text.name}
              disablePadding
              sx={{
                display: "block",
                color: activeRoute === text.route ? "white" : "#A4A6B3",
              }}
              onClick={() => {
                handleDrawerNavigation(text);
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
                  {text.icon}
                </ListItemIcon>
                <ListItemText
                  primary={text.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Outlet />
    </Box>
  );
};

export default Header;
