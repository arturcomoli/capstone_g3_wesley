import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuthenticationProvider from "../../providers/Authentication";

const Signup = () => {
  const history = useHistory();

  const { handleRegistration } = useAuthenticationProvider();

  const signUpSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Use apenas letras"
      ),

    age: yup
      .number("Insira sua idade em numeral")
      .required("Campo obrigatório"),

    email: yup
      .string()
      .email("Insira um email válido")
      .required("Campo obrigatório"),

    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),

    confirm_password: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const handleCreateUser = (data) => {
    delete data.confirm_password;

    handleRegistration(data, history);
  };

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <label>Nome</label>
        <input {...register("name")}></input>

        <label>Idade</label>
        <input {...register("age")}></input>

        <label>Email</label>
        <input {...register("email")}></input>

        <label>Senha</label>
        <input {...register("password")}></input>

        <label>Confirme sua senha</label>
        <input {...register("confirm_password")}></input>

        <button type="submit">Cadastrar</button>
      </form>
      <button type="button" onClick={history.goBack()}>
        Voltar
      </button>
    </div>
  );
};

export default Signup;
