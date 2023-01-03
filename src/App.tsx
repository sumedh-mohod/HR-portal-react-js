import React from "react";
import { Route, Routes } from "react-router-dom";

//import sreens
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";
import { Box } from "@mui/material";

import CompanyList from "./screens/CompanyList";
import EmployeeList from "./screens/EmployeeList";
import ProjectsList from "./screens/ProjectsList";
import CompanyAddEdit from "./screens/ComapnyAddEdit";
import NotFound from "./screens/NotFound";
import Partners from "./screens/Partners";
import Logout from "./screens/Logout";
import EmployeeAddEdit from "./screens/EmployeeAddEdit";
import ProjectAddEdit from "./screens/ProjectAddEdit";

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
          {/* <Route path="/editcompany" element={<EditCompany />} /> */}
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:opration" element={<CompanyAddEdit />} />
          <Route path="/employees" element={<EmployeeList />} />
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
