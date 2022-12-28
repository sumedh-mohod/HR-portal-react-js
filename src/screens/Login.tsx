import React from "react";
import { useFormik } from "formik";
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
import { styles } from "../styles/screens/Login";
import { loginValidator } from "../utils/validations/auth";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { login } from "../store/reducers/users/authentication";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loginToContext } = useAuth();

  const loginStore = useAppSelector((state) => state.authentication);

  const { isLoadingRequest, user } = loginStore;

  console.log("user",user)

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
      dispatch(login(values))
        .unwrap()
        .then((response: any) => {
          loginToContext({
            token: response.token,
            refresh_token: "8u2uuiiwiwueujsjs",
            userDetails: response?.user,
          });
          navigate("/companies");
        })
        .catch((error) => {});
    },
  });

  return (
    <Box {...styles.parentBox}>
      <Box {...styles.boxCard}>
        <Grid container spacing={2} {...styles.formGrid}>
          <OrangeBitsIcon width={40} style={{ margin: "30px auto" }} />

          <Typography {...styles.formTitle} variant="h5" gutterBottom>
            Login to Orangebits Technologies
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ p: 2, m: 2 }}>
              <FormLabel
                id="outlined-password"
                {...styles.formUsernameLable}
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
                {...styles.formUsernameTextfield}
              />
            </FormControl>

            <FormControl sx={{ p: 2, m: 2 }}>
              <Box {...styles.formPasswordBox}>
                <FormLabel id="outlined-password" {...styles.formPasswordLable}>
                  PASSWORD
                </FormLabel>
                <Typography
                  {...styles.formPasswordForgot}
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
                {...styles.formPasswordTextfield}
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
            <Box {...styles.formButtonBox}>
              <LoadingButton
                loading={isLoadingRequest}
                loadingPosition="center"
                fullWidth
                variant="contained"
                type="submit"
                {...styles.formButton}
              >
                Log In
              </LoadingButton>
            </Box>
          </form>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xl={12} lg={12} md={12} xs={12} sm={12}>
          <Box {...styles.footerTitleBox}>
            <Typography {...styles.footerTitle} variant="h2" gutterBottom>
              Orangebits Software Technologies (India) Pvt Ltd
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
