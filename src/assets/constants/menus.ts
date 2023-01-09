import DashboardIcon from "@mui/icons-material/Dashboard";
import Company from "../../components/Icons/Company";
import Accounting from "../../components/Icons/Accounting";
import Training from "../../components/Icons/Training";
import Assets from "../../components/Icons/Assets";
import Partners from "../../components/Icons/Partners";
import Project from "../../components/Icons/Project";
import Employee from "../../components/Icons/Employee";
import Settings from "../../components/Icons/Settings";
import Vendors from "../../components/Icons/Vendors";
import Recruitment from "../../components/Icons/Recruitment";

export const Menus: any = [
  {
    name: "Comapny",
    icon: Company,
    id: 1,
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
    icon: Accounting,
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
    icon: Assets,
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
    icon: Partners,
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
    icon: Project,
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
    icon: Employee,
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
    icon: Settings,
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
    icon: Vendors,
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
    icon: Recruitment,
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
    icon: Training,
    active: false,
    submenu: [
      {
        name: "Master",
        route: "training",
      },
    ],
  },
];
