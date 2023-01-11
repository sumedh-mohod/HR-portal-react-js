import React from "react";
import { Navigate } from "react-router-dom";

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export type LoggedInUserProps = {
  isLoggedInUser: boolean;
  loggedInUserPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}

export function AuthRoute({
  isLoggedInUser,
  loggedInUserPath,
  outlet,
}: LoggedInUserProps) {
  if (isLoggedInUser) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: loggedInUserPath }} />;
  }
}
