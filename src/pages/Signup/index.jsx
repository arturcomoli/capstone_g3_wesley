import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import LoginBackgroundDesktop from "../../assets/background/image12.png";
import LoginBackgroundMobile from "../../assets/background/image34.png";
import LogoWhite from "../../assets/logo/Kenzie.WarmUp.svg";
//import useAuthenticationProvider from "../../providers/Authentication";

const Signup = () => {
  const history = useHistory();

  // const { handleRegistration } = useAuthenticationProvider();

  const signUpSchema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/,
        "Use apenas letras"
      ),

    age: yup.string().required("Campo obrigatório"),
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

    //  handleRegistration(data, history);
  };

  return (
    <Flex
      h={"100vh"}
      justifyContent={"flex-end"}
      sx={{
        bgImage: LoginBackgroundDesktop,
        bgRepeat: "no-repeat",
        bgPos: "left",
        bgSize: "cover",
        "@media (max-width:425px)": {
          bgImage: LoginBackgroundMobile,
          bgPos: "center",
          bgColor: "#000",
        },
      }}
    >
      <Center
        sx={{
          minW: "375px",
          w: "30vw",
          bgColor: "#000",
          "@media (max-width:425px)": {
            width: "100vw",
            bg: "none",
          },
        }}
        color={"#fff"}
      >
        <VStack>
          <Image src={LogoWhite} />

          <form onSubmit={handleSubmit(handleCreateUser)}>
            <Center flexDirection={"column"}>
              {/* INPUT NOME */}
              <FormControl
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                mt={2}
                isInvalid={errors.name}
              >
                <FormLabel textAlign={"center"} fontWeight={"bold"}>
                  Nome
                  <Input
                    textAlign={"center"}
                    variant={"unstyled"}
                    {...register("name")}
                    type="text"
                    borderBottom={
                      errors.password
                        ? "4px solid #FF530D"
                        : "4px solid #ff9f1a"
                    }
                    borderRadius={"none"}
                    placeholder={errors.name ? errors.name.message : ""}
                    _placeholder={{ color: "#FF530D" }}
                    py={2}
                  />
                </FormLabel>
              </FormControl>

              {/* INPUT IDADE */}
              <FormControl
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                mt={2}
                isInvalid={errors.age}
              >
                <FormLabel textAlign={"center"} fontWeight={"bold"}>
                  Idade
                  <Input
                    textAlign={"center"}
                    variant={"unstyled"}
                    {...register("age")}
                    type="number"
                    borderBottom={
                      errors.password
                        ? "4px solid #FF530D"
                        : "4px solid #ff9f1a"
                    }
                    borderRadius={"none"}
                    placeholder={errors.age ? errors.age.message : ""}
                    _placeholder={{ color: "#FF530D" }}
                    py={2}
                  />
                </FormLabel>
              </FormControl>

              {/* INPUT EMAIL */}
              <FormControl
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                mt={2}
                isInvalid={errors.email}
              >
                <FormLabel textAlign={"center"} fontWeight={"bold"}>
                  Email
                  <Input
                    textAlign={"center"}
                    variant={"unstyled"}
                    {...register("email")}
                    type="email"
                    borderBottom={
                      errors.password
                        ? "4px solid #FF530D"
                        : "4px solid #ff9f1a"
                    }
                    borderRadius={"none"}
                    placeholder={errors.email ? errors.email.message : ""}
                    _placeholder={{ color: "#FF530D" }}
                    py={2}
                  />
                </FormLabel>
              </FormControl>

              {/* INPUT PASSWORD */}
              <FormControl
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                mt={2}
                isInvalid={errors.password}
              >
                <FormLabel textAlign={"center"} fontWeight={"bold"}>
                  Senha
                  <Input
                    textAlign={"center"}
                    variant={"unstyled"}
                    {...register("password")}
                    type="password"
                    borderBottom={
                      errors.password
                        ? "4px solid #FF530D"
                        : "4px solid #ff9f1a"
                    }
                    borderRadius={"none"}
                    placeholder={errors.password ? errors.password.message : ""}
                    _placeholder={{ color: "#FF530D" }}
                    py={2}
                  />
                </FormLabel>
              </FormControl>

              {/* INPUT CONFIRM PASSWORD */}
              <FormControl
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                my={2}
                isInvalid={errors.email}
              >
                <FormLabel textAlign={"center"} fontWeight={"bold"}>
                  Confirmar senha
                  <Input
                    maxW={"250px"}
                    textAlign={"center"}
                    variant={"unstyled"}
                    {...register("confirm_password")}
                    type="password"
                    borderBottom={
                      errors.password
                        ? "4px solid #FF530D"
                        : "4px solid #ff9f1a"
                    }
                    borderRadius={"none"}
                    placeholder={
                      errors.confirm_password
                        ? errors.confirm_password.message
                        : ""
                    }
                    _placeholder={{ color: "#FF530D" }}
                    py={2}
                  />
                </FormLabel>
              </FormControl>

              <Button
                bgColor={"#ff9f1a"}
                _hover={{ filter: "brightness(1.1)" }}
                type="submit"
                my={2}
              >
                Cadastrar
              </Button>
            </Center>
          </form>
          <Text>
            Já possui uma?{" "}
            <Button variant={"link"} color={"#ff9f1a"}>
              Login
            </Button>
          </Text>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Signup;
