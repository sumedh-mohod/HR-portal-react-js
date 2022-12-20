import React from "react";
import { Route, Routes } from "react-router-dom";

//import sreens
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import Dashboard from "./screens/Dashboard";

const App = () => {
  return (
    <Routes>
      {/* Different routes */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
