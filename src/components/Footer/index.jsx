import { Button, Center, Image, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo/Kenzie.WarmUp.svg";

const Footer = () => {
  const history = useHistory();
  return (
    <Center
      w={"100%"}
      mt={8}
      minH={"300px"}
      h={"10rem"}
      pt={"100px"}
      justifyContent={"space-around"}
      flexDir={"column"}
      bgColor={"#000"}
    >
      <Image alt="logo" src={logo} />
      <Center
        w={{ base: "100vw", md: "50vw" }}
        justifyContent={{ base: "space-around", md: "50vw" }}
        flexDir={{ base: "column", md: "row" }}
        color={"#fff"}
        h={"300px"}
      >
        <Button variant={"link"} onClick={() => history.push("/dashboard")}>
          Home
        </Button>
        <Button variant={"link"} onClick={() => history.push("/profile")}>
          Perfil
        </Button>
        <Button variant={"link"} onClick={() => history.push("/routine")}>
          Rotina
        </Button>
        <Button variant={"link"} onClick={() => history.push("/exercises")}>
          Exercícios
        </Button>
        <Button variant={"link"} onClick={() => history.push("/team")}>
          Time
        </Button>
      </Center>
      <Text
        w={{ base: "90vw" }}
        fontFamily={"Montserrat"}
        fontWeight={"400"}
        fontSize={{ base: "8px", md: "14px", lg: "16px" }}
        lineHeight={{ base: "8px", md: "14px", lg: "16px" }}
        textAlign={"center"}
        color={"#fff"}
        h={"200px"}
      >
        Copyright©2022, KenzieWorkout. Todos os direitos reservados. Todos os
        textos, imagens, gráficos, animações, vídeos, músicas, sons e outros
        materiais são protegidos por direitos autorais e outros direitos de
        propriedade intelectual pertencentes à KenzieWorkout, suas subsidiárias,
        afiliadas e licenciantes.
      </Text>
    </Center>
  );
};
export default Footer;
