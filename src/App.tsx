import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import { useAppSelector } from "store/hooks";

//import sreens
import Login from "screens/Authentication/Login";
import Registration from "screens/Authentication/Registration";
import Dashboard from "screens/Authentication/Dashboard";
import Header from "components/HigherOrder/Header";

import Companies from "screens/Company/Companies";
import Employees from "screens/Employee/Employee";
import Projects from "screens/Project/Projects";
import Partners from "screens/Partner/Partners";
import Vendors from "screens/Vendor/Vendors";
import Assets from "screens/Assests/Assests";

import CompanyOperations from "screens/Company/Operations";
import EmployeeAddEdit from "screens/Employee/EmployeeAddEdit";
import ProjectAddEdit from "screens/Project/ProjectAddEdit";
import PartnerAddEdit from "screens/Partner/PartnerAddEdit";
import VendorAddEdit from "screens/Vendor/VendorAddEdit";

import NotFound from "screens/Authentication/NotFound";
import Logout from "screens/Authentication/Logout";

import ProtectedRoute, {
  AuthRoute,
  ProtectedRouteProps,
  LoggedInUserProps,
} from "./ProtectedRoute";
import AssestsAddEdit from "screens/Assests/AssestsAddEdit";


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
        {/* Authentication */}
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
          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Dashboard />}
              />
            }
          />
      {/* Assets */}
      <Route
            path="/assets"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Assets />}
              />
            }
          />
          <Route
            path="/assets/:opration"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<AssestsAddEdit />}
              />
            }
          />
          {/* Partners */}
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

          {/* Companies */}
          <Route
            path="/companies"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Companies />}
              />
            }
          />
          <Route
            path="/companies/:opration"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<CompanyOperations />}
              />
            }
          />

          {/* Employees */}
          <Route
            path="/employees"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Employees />}
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

          {/* Projects */}
          <Route
            path="/projects"
            element={
              <ProtectedRoute
                {...defaultProtectedRouteProps}
                outlet={<Projects />}
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

          {/* Vendors */}
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

        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;
