import React from "react";
import { Route, Routes } from "react-router-dom";

//import sreens
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";
import { Box } from "@mui/material";

import CompanyList from "./screens/CompanyList";
import CompanyAddEdit from "./screens/ComapnyAddEdit";
import NotFound from "./screens/NotFound";
import Partners from "./screens/Partners";
import Logout from "./screens/Logout";
import AddPartner from "./components/AddPartner";

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
          <Route path="/partners/:opration" element={<AddPartner />} />
          {/* <Route path="/editcompany" element={<EditCompany />} /> */}
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:opration" element={<CompanyAddEdit />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
