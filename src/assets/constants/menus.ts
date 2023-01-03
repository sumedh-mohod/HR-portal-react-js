import DashboardIcon from "@mui/icons-material/Dashboard";

export const Menus: any = [
  {
    name: "Comapny",
    icon: DashboardIcon,
    id: 1,
    route: "#1",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "companies",
      },
      {
        name: "Old Comapnies",
        route: "companies",
      },
      {
        name: "New Comapnies",
        route: "companies",
      },
    ],
  },
  {
    id: 2,
    name: "Accounting",
    icon: DashboardIcon,
    route: "#2",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "accountings",
      },
    ],
  },
  {
    id: 3,
    name: "Assets",
    icon: DashboardIcon,
    route: "#3",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "assets",
      },
    ],
  },
  {
    id: 4,
    name: "Partners",
    icon: DashboardIcon,
    route: "#",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "partners",
      },
    ],
  },
  {
    id: 5,
    name: "Project",
    icon: DashboardIcon,
    route: "#5",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "projects",
      },
    ],
  },
  {
    id: 6,
    name: "Employee",
    icon: DashboardIcon,
    route: "#6",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "employees",
      },
    ],
  },
  {
    id: 7,
    name: "Settings",
    icon: DashboardIcon,
    route: "#7",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "settings",
      },
    ],
  },
  {
    id: 8,
    name: "Venders",
    icon: DashboardIcon,
    route: "#8",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "venders",
      },
    ],
  },
  {
    id: 9,
    name: "Recruitment",
    icon: DashboardIcon,
    route: "#9",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "recruitments",
      },
    ],
  },
  {
    id: 10,
    name: "Training",
    icon: DashboardIcon,
    route: "#10",
    active: false,
    submenu: [
      {
        name: "Master",
        route: "training",
      },
    ],
  },
];
