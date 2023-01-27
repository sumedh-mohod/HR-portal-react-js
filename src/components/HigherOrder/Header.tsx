import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import TopBar from "components/HigherOrder/TopBar";

const Header = (props: any) => {
  return (
    <Box sx={{ display: "flex" ,width:"100%"}}>
      <TopBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "65px"}}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Header;
