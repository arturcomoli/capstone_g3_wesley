import { useHistory } from "react-router-dom";
import logo from "../../assets/logo/Kenzie.WarmUpDark.svg";
const Header = () => {
  const history = useHistory();
  return (
    <>
      <img alt="logo" src={logo} />
      <button onClick={() => history.push("/dashboard")}>Home</button>
      <button onClick={() => history.push("/profile")}>Perfil</button>
      <button onClick={() => history.push("/routine")}>Rotina</button>
      <button onClick={() => history.push("/exercises")}>Exercícios</button>
    </>
  );
};
export default Header;
