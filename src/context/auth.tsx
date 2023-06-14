import React, { createContext, useState, useEffect, useContext } from "react";

interface AppContextInterface {
  loginToContext: (params: any) => void;
  logoutFromContext: () => void;
  isAuthenticated: boolean;
  userDetails: any;
}

const context: AppContextInterface = {
  isAuthenticated: false,
  userDetails: {},
  
  loginToContext: () => {},
  logoutFromContext: () => {},
};

export const AuthContext = createContext(context);
interface AuthContextProps {
  children?: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [userDetails, setUserDetails] = useState<any | null>(null);
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    async function authenticateUser() {
      let token = window.sessionStorage.getItem("access_token");
      let user_details: any = window.sessionStorage.getItem("user_details");

      if (token && isAuthenticated === false) {
        setAuthenticated(true);
        setUserDetails(JSON.parse(user_details));
      } else {
        setAuthenticated(false);
        setUserDetails(null);
      }
    }
    authenticateUser();
  }, []);

  const loginToContext = (params: any) => {
    window.sessionStorage.setItem(
      "access_token",
      JSON.stringify(params?.token)
    );
    window.sessionStorage.setItem(
      "refresh_token",
      JSON.stringify(params?.refresh_token)
    );
    window.sessionStorage.setItem(
      "user_details",
      JSON.stringify(params?.userDetails)
    );
    setUserDetails(params?.userDetails);
    setAuthenticated(true);
  };

  const logoutFromContext = () => {
    sessionStorage.clear();
    // sessionStorage.removeItem("access_token");
    // sessionStorage.removeItem("refresh_token");
    // sessionStorage.removeItem("user_details");
    setAuthenticated(false);
    setUserDetails(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userDetails,
        loginToContext,
        logoutFromContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthContextProvider;
