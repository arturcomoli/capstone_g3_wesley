import { useHistory } from "react-router-dom";
import logo from "../../assets/logo/Kenzie.WarmUp.svg";
import "./styles.css";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="teste">
      <img alt="logo" src={logo} />
      <div>
        <button onClick={() => history.push("/dashboard")}>Home</button>
        <button onClick={() => history.push("/profile")}>Perfil</button>
        <button onClick={() => history.push("/routine")}>Rotina</button>
        <button onClick={() => history.push("/exercises")}>Exercícios</button>
        <button onClick={() => history.push("/team")}>Time</button>
      </div>
      <span>
        Copyright@2022, KenzieWarmUp. Todos os direitos reservados. Todos os
        textos, imagens, gráficos, animações, videos, músicas, sons e outros
        materiais são protegidos por direitos autorais e outros direitos de
        propriedade intelectual pertecentes à KenzieWarmUp. Suas subsidiárias.
        Afiliadas e licenciantes.
      </span>
    </div>
  );
};
export default Footer;
