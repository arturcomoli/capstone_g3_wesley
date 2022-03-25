import api from "../../services/api";
import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@token:KenzieWarmup")) || ""
  );

  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("@userInfo:KenzieWarmup")) || ""
  );

  const handleSignUpAuth = async (data, history, toast) => {
    await api
      .post("/signup", data)
      .then((res) => {
        toast({
          title: "Usuário cadastrado com sucesso!",
          status: "success",
        });
        history.push("/login");
      })
      .catch((err) =>
        toast({
          title: "Algo de errado ocorreu!",
          status: "error",
        })
      );
  };

  const handleLoginAuth = async (data, history, toast) => {
    await api
      .post("/login", data)
      .then((res) => {
        const { accessToken, user } = res.data;
        setToken(accessToken);
        localStorage.setItem(
          "@token:KenzieWarmup",
          JSON.stringify(accessToken)
        );
        setUserInfo(user);
        localStorage.setItem("@userInfo:KenzieWarmup", JSON.stringify(user));

        toast({
          title: "Usuário logado com sucesso!",
          status: "success",
        });
        history.push("/dashboard");
      })
      .catch((err) =>
        toast({
          title: "Algo de errado ocorreu!",
          status: "error",
        })
      );
  };

  const handleLogout = (history, setUserList, setFilteredList) => {
    setToken("");
    setUserInfo("");
    setUserList([]);
    setFilteredList([]);
    localStorage.clear();
    history.push("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{
        token,
        userInfo,
        handleLoginAuth,
        handleLogout,
        handleSignUpAuth,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationProvider = () =>
  useContext(AuthenticationContext);
