import React from "react";
import { Route, Routes } from "react-router-dom";

//import sreens
import Login from "./screens/authentication/Login";
import Registration from "./screens/authentication/Registration";
import Dashboard from "./screens/authentication/Dashboard";
import Header from "./components/higherorder/Header";
import { Box } from "@mui/material";

import CompanyList from "./screens/company/Companies";
import Employee from "./screens/employee/Employee";
import ProjectsList from "./screens/project/Projects";
import CompanyAddEdit from "./screens/company/ComapnyAddEdit";
import NotFound from "./screens/authentication/NotFound";
import Partners from "./screens/partner/Partners";
import Logout from "./screens/authentication/Logout";
import AddPartner from "./components/partner/AddPartner";
import EmployeeAddEdit from "./screens/employee/EmployeeAddEdit";
import ProjectAddEdit from "./screens/project/ProjectAddEdit";
import PartnerAddEdit from "./screens/partner/PartnerAddEdit";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Routes>
        {/* Different routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route element={<Header />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/partners/:opration" element={<PartnerAddEdit/>} />
          {/* <Route path="/editcompany" element={<EditCompany />} /> */}
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:opration" element={<CompanyAddEdit />} />
          <Route path="/employees" element={<Employee/>} />
          <Route path="/employees/:opration" element={<EmployeeAddEdit />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:opration" element={<ProjectAddEdit />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
