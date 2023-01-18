import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  Box,
  Typography,
  Grid,
  FormLabel,
  TextField,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoadingButton from "@mui/lab/LoadingButton";
import OrangeBitsIcon from "../../components/Icons/OrangeBitsIcon";

import { styles } from "../../styles/screens/Login";
import { loginValidator } from "../../utils/validations/auth";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { login } from "../../store/reducers/users/authentication";
import { useAuth } from "../../context/auth";
import { globalStyles } from "../../styles/global";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { loginToContext } = useAuth();
  const loginStore = useAppSelector((state) => state.authentication);
  const { isLoadingRequest, user } = loginStore;

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  console.log("user", user);

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
        <Grid container sx={{ p: 4 }}>
          <Grid xs={12} sm={12} md={12} lg={12}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <OrangeBitsIcon width={40} style={{ margin: "10px auto" }} />
            </Box>
          </Grid>
          <Grid md={12} lg={12}>
            <Typography {...styles.formTitle} variant="h5" gutterBottom>
              Login to Orangebits Technologies
            </Typography>
          </Grid>
          <Grid md={12} lg={12}>
            <form onSubmit={handleSubmit}>
              <FormControl sx={{ mt: 5 }} fullWidth>
                <FormLabel id="outlined-password" {...styles.textfieldLable}>
                  Username
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
                  placeholder="Username"
                  error={touched.username && errors.username ? true : false}
                  helperText={touched.username && errors.username}
                  {...styles.formTextfield}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                  }}
                />
              </FormControl>

              <FormControl sx={{ mt: 5 }} fullWidth>
                <FormLabel id="outlined-password" {...styles.textfieldLable}>
                  Password
                </FormLabel>
                <TextField
                  fullWidth
                  size="small"
                  id="outlined-password"
                  variant="filled"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && errors.password ? true : false}
                  helperText={touched.password && errors.password}
                  {...styles.formTextfield}
                  InputProps={{
                    disableUnderline: true,
                    style: { ...globalStyles.textField },
                    endAdornment: (
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{ mt: 2 }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
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
