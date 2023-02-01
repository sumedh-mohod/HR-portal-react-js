import Company from "components/Icons/Company";
import Accounting from "components/Icons/Accounting";
import Training from "components/Icons/Training";
import Assets from "components/Icons/Assets";
import Partners from "components/Icons/Partners";
import Project from "components/Icons/Project";
import Employee from "components/Icons/Employee";
import Settings from "components/Icons/Settings";
import Vendors from "components/Icons/Vendors";
import Recruitment from "components/Icons/Recruitment";

export const Menus: any = [
  {
    name: "Comapny",
    icon: Company,
    id: 1,
    active: false,
    route: "companies",
    submenu: [
      {
        id: 1,
        name: "Companies",
        route: "/companies",
      },
      {
        id: 2,
        name: "Holiday",
        route: "/companies/holiday",
      },
      {
        id: 3,
        name: "Leave Policy",
        route: "/companies/leavepolicy",
      },
      {
        id: 4,
        name: "Masters",
        route: "/companies/master",
      },
      {
        id: 5,
        name: "Organisational Data",
        route: "/companies/organisationaldata",
      },
    ],
  },
  {
    id: 2,
    name: "Accounting",
    icon: Accounting,
    active: false,
    route: "accounting",
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Assets",
    icon: Assets,
    route: "assets",
    active: false,
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "/assets",
      },
    ],
  },
  {
    id: 4,
    name: "Partners",
    icon: Partners,
    route: "partners",
    active: false,
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "partners",
      },
    ],
  },
  {
    id: 5,
    name: "Project",
    route: "projects",
    icon: Project,
    active: false,
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "projects",
      },
    ],
  },
  {
    id: 6,
    name: "Employee",
    route: "employees",
    icon: Employee,
    active: false,
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "employees",
      },
    ],
  },
  {
    id: 7,
    name: "Settings",
    route: "settings",
    icon: Settings,
    active: false,
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "#",
      },
    ],
  },
  {
    id: 8,
    name: "Vendors",
    route: "vendors",
    icon: Vendors,
    active: false,
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "vendors",
      },
    ],
  },
  {
    id: 9,
    name: "Recruitment",
    route: "recruitment",
    icon: Recruitment,
    active: false,
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "#",
      },
    ],
  },
  {
    id: 10,
    name: "Training",
    route: "training",
    icon: Training,
    active: false,
    submenu: [
      {
        id: 1,
        name: "Master",
        route: "#",
      },
    ],
  },
];
