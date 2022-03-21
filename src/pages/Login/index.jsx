import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import LoginBackgroundDesktop from "../../assets/background/image11.png";
import LoginBackgroundMobile from "../../assets/background/image33.png";
import LogoWhite from "../../assets/logo/Kenzie.WarmUp.svg";
//import useAuthenticationProvider from "../../providers/Authentication";

const Login = () => {
  const history = useHistory();

  //const { handleLoginAuth } = useAuthenticationProvider();

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
    // handleLoginAuth(data, "/dashboard");
  };

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <Flex
      h={"100vh"}
      sx={{
        bgImage: LoginBackgroundDesktop,
        bgRepeat: "no-repeat",
        bgPos: "right",
        bgSize: "content",
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

          <form onSubmit={handleSubmit(handleLogin)}>
            <Center flexDirection={"column"}>
              {/* INPUT EMAIL */}
              <FormControl
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                my={4}
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
                  />
                </FormLabel>
                {errors.email ? (
                  <FormErrorMessage color={"#FF530D"}>
                    {errors.email.message}
                  </FormErrorMessage>
                ) : (
                  <FormHelperText>Insira seu email</FormHelperText>
                )}
              </FormControl>

              {/* INPUT SENHA */}
              <FormControl
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                my={4}
                isInvalid={errors.password}
              >
                <FormLabel textAlign={"center"} fontWeight={"bold"}>
                  Senha
                  <Input
                    textAlign={"center"}
                    {...register("password")}
                    type="password"
                    variant={"unstyled"}
                    borderBottom={
                      errors.password
                        ? "4px solid #FF530D"
                        : "4px solid #ff9f1a"
                    }
                    borderRadius={"none"}
                  />
                </FormLabel>
                {errors.password ? (
                  <FormErrorMessage color={"#FF530D"}>
                    {errors.password.message}
                  </FormErrorMessage>
                ) : (
                  <FormHelperText>Insira sua senha</FormHelperText>
                )}
              </FormControl>
              {/* BUTTON SUBMIT */}
              <Button
                bgColor={"#ff9f1a"}
                _hover={{ filter: "brightness(1.1)" }}
                type="submit"
                my={2}
              >
                Login
              </Button>
            </Center>
          </form>
          <Text>
            Novo por aqui?{" "}
            <Button
              onClick={() => handleNavigation("/signup")}
              variant={"link"}
              color={"#ff9f1a"}
            >
              Cadastre-se
            </Button>
          </Text>
        </VStack>
      </Center>
    </Flex>
  );
};

export default Login;
