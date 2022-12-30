import React,{useEffect}from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useAuth } from "../context/auth";
const Logout = () => {
    const { logoutFromContext } = useAuth();
    useEffect(() => {
        logoutFromContext();
        console.log("logout done")
    }, []);
  
    return (
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }
  
export default Logout
