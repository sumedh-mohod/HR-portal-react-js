import { Box, Container } from "@mui/system";
import React from "react";
import background from "../assets/images/Rectangle1.svg"
import logo from "../assets/images/logo.png"
import { FormControl } from '@mui/material';
import TextField from "@mui/material/TextField";
import { TextFields } from "@mui/icons-material";
import Button from '@mui/material/Button';
import InputAdornment from "@mui/material/InputAdornment";
import FormLabel from "@mui/material/FormLabel";
import IconButton from '@mui/material/IconButton';
import Visibility from "@mui/icons-material/Visibility";
import Grid from '@mui/material/Grid';
const Login = () => {
  return <>
    <Box sx={{
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "rgba(0, 0, 0, 0.5)",
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
    >
      <Box
        sx={{
          border: "1px solid #DFE0EB;",
          borderRadius: "8px",
          background: "#FFFFFF",
          padding: "20px",
          height: "max-content",
          marginBottom: "50px",
          marginTop: "20px",
          maxWidth: "350px"
        }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12} sx={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} width="61px" height="61px" style={{ marginTop: "36px" }} />
          </Grid>
          <Grid item xs={12} lg={12} sx={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{
              fontWeight: "700",
              fontSize: "18px",
              letterSpacing: "0.3 px",
              color: "#252733"
            }}>Login to Orangebits Technologies</h2>
          </Grid>
          <Grid item xs={12} lg={12} sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl sx={{ marginTop: "32px" }} >
              <FormLabel id="outlined-password" sx={{
                // fontFamily: 'Mulish',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "12px",
                lineHeight: "15px",
                letterSpacing: "0.3px",
                textTransform: "uppercase",
                color: "#9FA2B4",
                margin: "32px auto",
                marginBottom: "6px",
                width: "316px",
                height: "16px",
              }}>Username</FormLabel>
              <TextField
                sx={{
                  fontFamily: 'Mulish',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.3px",
                  textTransform: "uppercase",
                  color: "#4B506D",
                  margin: "6px auto",
                  opacity: 0.4,
                  width: "292px",
                  height: "20px",
                  border: "none",
                  outline: "none"
                }}
                id="password"
                variant="filled"
                type={"text"}

              />
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={12} sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl sx={{ marginTop: "32px" }} >
              <Box sx={{
                display: "flex", justifyContent: "space-between", width: "316px",
                height: "16px",
                margin: "auto",
              }}>
                <FormLabel id="outlined-password" sx={{
                  fontFamily: 'Mulish!important',
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "12px",
                  lineHeight: "15px",
                  letterSpacing: "0.3px",
                  textTransform: "uppercase",
                  color: "#9FA2B4",
                  marginTop: "32px"
                }}>Passowrd</FormLabel>
                <p style={{

                  fontFamily: 'Mulish',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "10px",
                  lineHeight: "13px",
                  textAlign: "right",
                  letterSpacing: "0.1px",
                  color: "#9FA2B4",
                  marginTop: "32px",
                  marginBottom: "32px"

                }}>Forgot Password ?</p>
              </Box>
              <TextField
                sx={{
                  fontFamily: 'Mulish',
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.3px",
                  textTransform: "uppercase",
                  color: "#4B506D",
                  margin: "36px auto",
                  opacity: 0.4,
                  width: "292px",
                  height: "20px",
                  border: "none",
                  outline: "none"

                }}
                id="outlined-password"
                variant="filled"
                type={"password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" edge="end">
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}

              />

            </FormControl>
          </Grid>
          <Grid item xs={12} lg={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained"
              sx={{
                width: "316px",
                height: "48px",
                margin: "auto",
                marginTop: "56px",
                borderRadius: "8px", backgroundColor: "#F58634",
                color: "white",
                "&:hover": {
                  backgroundColor: "#F58634",
                  boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
                }
              }}> Log In</Button>
          </Grid>

        </Grid>

      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12} sx={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{
            fontFamily: 'Mulish',
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "23px",
            textAlign: "center",
            letterSpacing: "0.3px",
            color: "white",
          }}>Orangebits Software Technologies (India) Pvt Ltd</h2>
        </Grid>
      </Grid>
    </Box>
  </>
};

export default Login;
