import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@token:AppName") || ""
  );

  const [user, setUser] = useState(localStorage.getItem("@user:AppName") || "");

  const handleRegistration = async (data, history) => {
    await axios
      .post("apilink", data)
      .catch((err) => console.log(err))
      .then((res) => history.push("/"));
  };

  const handleLogin = async (data, history) => {
    const response = await axios
      .post("apilink", data)
      .catch((err) => console.log(err));

    const { accessToken, user } = response.data;

    setToken(accessToken);
    localStorage.setItem("@token:AppName", JSON.stringify(accessToken));
    setUser(user);
    localStorage.setItem("@user:AppName", JSON.stringify(user));

    history.push("/dashboard");
  };

  const handleLogout = (history) => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{ token, user, handleLogin, handleLogout, handleRegistration }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationProvider = () =>
  useContext(AuthenticationContext);
