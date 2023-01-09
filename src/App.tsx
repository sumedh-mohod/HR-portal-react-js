import React from "react";
import { Route, Routes } from "react-router-dom";

//import sreens
import Login from "./screens/Authentication/Login";
import Registration from "./screens/Authentication/Registration";
import Dashboard from "./screens/Authentication/Dashboard";
import Header from "./components/HigherOrder/Header";
import { Box } from "@mui/material";

import CompanyList from "./screens/Company/Companies";
import Employee from "./screens/Employee/Employee";
import ProjectsList from "./screens/Project/Projects";
import CompanyAddEdit from "./screens/Company/ComapnyAddEdit";
import NotFound from "./screens/Authentication/NotFound";
import Partners from "./screens/Partner/Partners";
import Logout from "./screens/Authentication/Logout";
import AddPartner from "./components/Partner/AddPartner";
import EmployeeAddEdit from "./screens/Employee/EmployeeAddEdit";
import ProjectAddEdit from "./screens/Project/ProjectAddEdit";
import PartnerAddEdit from "./screens/Partner/PartnerAddEdit";

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
