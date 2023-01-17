import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./store/hooks";

//import sreens
import Login from "./screens/Authentication/Login";
import Registration from "./screens/Authentication/Registration";
import Dashboard from "./screens/Authentication/Dashboard";
import Header from "./components/HigherOrder/Header";
import { Box } from "@mui/material";

import CompanyList from "./screens/Company/Companies";
import Employee from "./screens/Employee/Employee";
import ProjectsList from "./screens/Project/Projects";
import CompanyAddEdit from "./screens/Company/ComapnyOperations";
import NotFound from "./screens/Authentication/NotFound";
import Partners from "./screens/Partner/Partners";
import Logout from "./screens/Authentication/Logout";
import EmployeeAddEdit from "./screens/Employee/EmployeeAddEdit";
import ProjectAddEdit from "./screens/Project/ProjectAddEdit";
import PartnerAddEdit from "./screens/Partner/PartnerAddEdit";
import Vendors from "./screens/Vendor/Vendors";
import VendorAddEdit from "./screens/Vendor/VendorAddEdit";

import ProtectedRoute, {
  AuthRoute,
  ProtectedRouteProps,
  LoggedInUserProps,
} from "./ProtectedRoute";

const App = () => {
  const storeResponse: any = useAppSelector(
    (state: any) => state.authentication
  );

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, "outlet"> = {
    isAuthenticated: sessionStorage.getItem("access_token")
      ? true
      : false || storeResponse?.user?.token
      ? true
      : false,
    authenticationPath: "/",
  };

  const preLoginProps: Omit<LoggedInUserProps, "outlet"> = {
    isLoggedInUser: sessionStorage.getItem("access_token") ? false : true,
    loggedInUserPath: "/companies",
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Routes>
        {/* Different routes */}
        <Route
          path="/"
          element={<AuthRoute {...preLoginProps} outlet={<Login />} />}
        />
        <Route
          path="/register"
          element={<AuthRoute {...preLoginProps} outlet={<Registration />} />}
        />
        <Route path="/logout" element={<Logout />} />

        <Route element={<Header />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Dashboard />}
              />
            }
          />
          <Route
            path="/partners"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Partners />}
              />
            }
          />
          <Route
            path="/partners/:opration"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<PartnerAddEdit />}
              />
            }
          />
          <Route
            path="/companies"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<CompanyList />}
              />
            }
          />
          <Route
            path="/companies/:opration"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<CompanyAddEdit />}
              />
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Employee />}
              />
            }
          />
          <Route
            path="/employees/:opration"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<EmployeeAddEdit />}
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<ProjectsList />}
              />
            }
          />
          <Route
            path="/projects/:opration"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<ProjectAddEdit />}
              />
            }
          />
          <Route
            path="/vendors"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Vendors />}
              />
            }
          />
          <Route
            path="/vendors/:opration"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<VendorAddEdit />}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
