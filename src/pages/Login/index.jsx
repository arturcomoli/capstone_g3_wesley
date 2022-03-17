import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuthenticationProvider from "../../providers/Authentication";

const Login = () => {
  const history = useHistory();

  const { handleLoginAuth } = useAuthenticationProvider();

  const loginSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data) => {
    handleLoginAuth(data, "/dashboard");
  };

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label>Email</label>
        <input {...register("email")} type="email" />
        <label>Senha</label>
        <input {...register("password")} type="password" />
        <button type="submit">Login</button>
        <button onClick={() => handleNavigation("/signup")}>Cadastro</button>
      </form>
    </div>
  );
};

export default Login;
