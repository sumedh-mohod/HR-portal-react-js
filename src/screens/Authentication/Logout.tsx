import React, { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const { logoutFromContext } = useAuth();

  const navigate = useNavigate();

  const Logout = () => {
    logoutFromContext();
    navigate("/");
  };

  useEffect(() => {
    setTimeout(Logout, 2000);
  }, []);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Logout;
