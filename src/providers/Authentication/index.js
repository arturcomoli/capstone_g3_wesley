import api from "../../services/api";
import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@token:KenzieWarmup") || ""
  );

  const [user, setUser] = useState(
    localStorage.getItem("@user:KenzieWarmup") || ""
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
    const response = await api.post("/login", data).catch((err) =>
      toast({
        title: "Algo de errado ocorreu!",
        status: "error",
      })
    );

    const { accessToken, user } = response.data;

    setToken(accessToken);
    localStorage.setItem("@token:KenzieWarmup", JSON.stringify(accessToken));
    setUser(user);
    localStorage.setItem("@user:KenzieWarmup", JSON.stringify(user));

    toast({
      title: "Usuário logado com sucesso!",
      status: "success",
    });
    history.push("/dashboard");
  };

  const handleLogout = (history) => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <AuthenticationContext.Provider
      value={{ token, user, handleLoginAuth, handleLogout, handleSignUpAuth }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthenticationProvider = () =>
  useContext(AuthenticationContext);