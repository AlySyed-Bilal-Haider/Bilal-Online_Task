import React, { useReducer } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import MkdSDK from "./utils/MkdSDK";
export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { role, token, user_id } = action.payload;
      localStorage.setItem("role", role);
      localStorage.setItem("storetoken", token);
      return {
        ...state,
        isAuthenticated: true,
        user: user_id,
        role: role,
        token: token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
let sdk = new MkdSDK();
export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let token = localStorage.getItem("token");

  // React.useEffect(() => {
  //   !token ? (window.location.href = "/admin/login") : "";
  // }, [state]);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
