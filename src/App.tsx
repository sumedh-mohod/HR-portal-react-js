import React from "react";
import { Route, Routes } from "react-router-dom";

//import sreens
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";
import { Box } from "@mui/material";
import CompanyList from "./screens/CompanyList";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "50px" }}>
        <Routes>
          {/* Different routes */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route element={<Header />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/company" element={<CompanyList />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
