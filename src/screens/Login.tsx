import React from "react";
import { useFormik } from "formik";
import background from "../assets/images/LoginBackground.svg";
import {
  FormControl,
  Box,
  Typography,
  Grid,
  FormLabel,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import OrangeBitsIcon from "../components/Icons/OrangeBitsIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import { loginValidator } from "../utils/validations/auth";

const Login = () => {
  const {
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidator,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "8px",
          background: "#FFFFFF",
          padding: "20px",
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "360px",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <OrangeBitsIcon width={40} style={{ margin: "30px auto" }} />

          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "18px",
              color: "#252733",
            }}
            variant="h5"
            gutterBottom
          >
            Login to Orangebits Technologies
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ p: 2, m: 2 }}>
              <FormLabel
                id="outlined-password"
                sx={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#9FA2B4",
                }}
              >
                USERNAME
              </FormLabel>
              <TextField
                fullWidth
                size="small"
                variant="filled"
                type={"text"}
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && errors.username ? true : false}
                helperText={touched.username && errors.username}
                sx={{
                  fontSize: "14px",
                  // color: "#4B506D",
                  // opacity: 0.4,
                  width: "292px",
                }}
              />
            </FormControl>

            <FormControl sx={{ p: 2, m: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "baseline",
                }}
              >
                <FormLabel
                  id="outlined-password"
                  sx={{
                    fontWeight: "700",
                    fontSize: "12px",
                    color: "#9FA2B4",
                  }}
                >
                  PASSWORD
                </FormLabel>
                <Typography
                  sx={{
                    fontSize: "10px",
                    color: "#9FA2B4",
                  }}
                  variant="h5"
                  gutterBottom
                >
                  Forgot Password ?
                </Typography>
              </Box>
              <TextField
                fullWidth
                size="small"
                id="outlined-password"
                variant="filled"
                type={"password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && errors.password ? true : false}
                helperText={touched.password && errors.password}
                sx={{
                  fontSize: "14px",
                  // color: "#4B506D",
                  // opacity: 0.4,
                  width: "292px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        <Visibility />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <Box
              sx={{
                display: "flex",
                pl: "10px",
                pr: "10px",
              }}
            >
              <LoadingButton
                loading={false}
                loadingPosition="center"
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  padding: "10px",
                  margin: "auto",
                  borderRadius: "8px",
                  backgroundColor: "#F58634",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#F58634",
                    boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
                  },
                }}
              >
                Log In
              </LoadingButton>
            </Box>
          </form>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid
          item
          xl={12}
          lg={12}
          md={10}
          xs={10}
          sm={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "18px",
              color: "white",
            }}
            variant="h2"
            gutterBottom
          >
            Orangebits Software Technologies (India) Pvt Ltd
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
