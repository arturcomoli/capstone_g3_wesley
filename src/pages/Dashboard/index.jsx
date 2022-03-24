import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Background from "../../assets/dashboard/image16.svg";
import DorCostas from "../../assets/dashboard/image17.svg";
import DorPescoco from "../../assets/dashboard/image18.svg";
import DorLombar from "../../assets/dashboard/image19.svg";
import DorPunho from "../../assets/dashboard/image20.svg";
import Rotinas from "../../assets/dashboard/image21.svg";
import Esquerda from "../../assets/dashboard/image22.svg";
import Direita from "../../assets/dashboard/image23.svg";
import Dicas from "../../assets/dashboard/image24.svg";
import { MotionDiv } from "./motion";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useHistory } from "react-router-dom";
import { useAuthenticationProvider } from "../../providers/Authentication";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const { token } = useAuthenticationProvider();
  
  const history = useHistory();
  
  const pushHistory = (path) => {
    history.push(path);
  };
  
  
  if (!token) {
    return <Redirect to={"/login"} />;
  }
  return (
    <VStack bgColor={"#000"} overflowX={"hidden"}>
      <VStack
        bgImage={Background}
        w={"100vw"}
        h={{ base: "20em", md: "35em", lg: "38em" }}
        bgRepeat={"no-repeat"}
        bgPos={{ base: "center", md: "right" }}
        bgSize={"cover"}
      >
        <VStack
          bgGradient={
            "linear(0deg, #000, transparent, transparent, transparent)"
          }
          h={"100%"}
          w={"100%"}
        >
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Header bgWhite={"bgWhite"} />
          </MotionDiv>

          <HStack justifyContent={"flex-end"} w={"90vw"}>
            <VStack mt={{ base: "2.5rem", md: "4rem", lg: "6rem" }}>
              <MotionDiv
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.75 }}
              >
                <Text
                  as={"h2"}
                  fontWeight={"700"}
                  fontFamily={"Karantina, cursive"}
                  textAlign={"right"}
                  w={{ base: "150px", md: "400px", lg: "600px" }}
                  alignSelf={"self-end"}
                  fontSize={{ base: "30px", md: "60px", lg: "100px" }}
                  lineHeight={{ base: "30px", md: "60px", lg: "100px" }}
                >
                  MANTENHA O CORPO SAUDÁVEL
                </Text>
                <Text
                  as={"h3"}
                  color={"#ff9f1a"}
                  fontWeight={"600"}
                  fontFamily={"Karantina, mono"}
                  textAlign={"right"}
                  w={{ base: "150px", md: "400px", lg: "600px" }}
                  alignSelf={"self-end"}
                  fontSize={{ base: "30px", md: "60px", lg: "100px" }}
                  lineHeight={{ base: "30px", md: "60px", lg: "100px" }}
                >
                  ALONGUE-SE
                </Text>
              </MotionDiv>
            </VStack>
          </HStack>
        </VStack>
      </VStack>

      <VStack
        spacing={"25px"}
        borderRadius={"20px"}
        maxWidth={"1000px"}
        background={"#ffffff"}
        overflow={"hidden"}
      >
        <Heading mt={"25px"} fontFamily={"Montserrat"}>
          Alongamentos
        </Heading>
        <Flex
          maxWidth={{ base: "300px", md: "600px", lg: "100%" }}
          overflowX={"auto"}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box
            background={"#ff9f1a"}
            bgImage={DorCostas}
            minWidth={"200px"}
            h={"300px"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            mx={"25px"}
            overflow={"hidden"}
            cursor={"pointer"}
          >
            <VStack
              justifyContent={"flex-end"}
              h={"100%"}
              bgGradient={
                "linear(0deg, #ff9f1a, transparent, transparent, transparent)"
              }
              pb={4}
            >
              <Text
                as={"h3"}
                color={"#FFFFFF"}
                fontWeight={"800"}
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"18px"}
                lineHeight={"22px"}
              >
                Dor nas Costas
              </Text>
            </VStack>
          </Box>
          <Box
            background={"#ff9f1a"}
            bgImage={DorPescoco}
            minWidth={"200px"}
            h={"300px"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            mx={"25px"}
            overflow={"hidden"}
            cursor={"pointer"}
          >
            <VStack
              justifyContent={"flex-end"}
              h={"100%"}
              bgGradient={
                "linear(0deg, #ff9f1a, transparent, transparent, transparent)"
              }
              pb={4}
            >
              <Text
                as={"h3"}
                color={"#FFFFFF"}
                fontWeight={"800"}
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"18px"}
                lineHeight={"22px"}
              >
                Dor nas Costas
              </Text>
            </VStack>
          </Box>
          <Box
            background={"#ff9f1a"}
            bgImage={DorLombar}
            minWidth={"200px"}
            h={"300px"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            mx={"25px"}
            overflow={"hidden"}
            cursor={"pointer"}
          >
            <VStack
              justifyContent={"flex-end"}
              h={"100%"}
              bgGradient={
                "linear(0deg, #ff9f1a, transparent, transparent, transparent)"
              }
              pb={4}
            >
              <Text
                as={"h3"}
                color={"#FFFFFF"}
                fontWeight={"800"}
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"18px"}
                lineHeight={"22px"}
              >
                Dor na lombar
              </Text>
            </VStack>
          </Box>
          <Box
            background={"#ff9f1a"}
            bgImage={DorPunho}
            minWidth={"200px"}
            h={"300px"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            mx={"25px"}
            overflow={"hidden"}
            cursor={"pointer"}
          >
            <VStack
              justifyContent={"flex-end"}
              h={"100%"}
              bgGradient={
                "linear(0deg, #ff9f1a, transparent, transparent, transparent)"
              }
              pb={4}
            >
              <Text
                as={"h3"}
                color={"#FFFFFF"}
                fontWeight={"800"}
                fontFamily={"Montserrat, sans-serif"}
                fontSize={"18px"}
                lineHeight={"22px"}
              >
                Dor nos punhos
              </Text>
            </VStack>
          </Box>
        </Flex>

        <HStack background={"#ff9f1a"} w={"100%"}>
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <Box
              bgImage={Rotinas}
              bgSize={"cover"}
              bgPos={"center"}
              w={{ base: "13em", md: "26em", lg: "31em" }}
              h={{ base: "11em", md: "15em", lg: "25em" }}
            ></Box>
          </AnimationOnScroll>

          <VStack
            spacing={{ base: 3, md: 6, lg: 12 }}
            h={"100%"}
            w={"50%"}
            color="#ffffff"
          >
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
              <Container
                fontWeight={"500"}
                fontFamily={"Montserrat, sans-serif"}
                w={{ base: "190px", md: "400px", lg: "450px" }}
              >
                <Heading
                  textAlign={"center"}
                  fontSize={{ base: "22px", md: "2rem", lg: "3rem" }}
                >
                  Rotinas
                </Heading>
                <Text fontSize={{ base: "12px", md: "22px", lg: "30px" }}>
                  Defina horários para seus exercícios diários, alimentação e
                  hidratação
                </Text>
              </Container>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
              <Button color={"#000000"} onClick={() => pushHistory("/routine")}>
                DEFINIR
              </Button>
            </AnimationOnScroll>
          </VStack>
        </HStack>

        <AnimationOnScroll animateIn={"animate__fadeIn"}>
          <HStack
            w={"100vw"}
            h={{ base: "11em", md: "15em", lg: "25em" }}
            maxHeight={"400px"}
            spacing={"0"}
            color={"#ffffff"}
          >
            <Flex
              bgImage={Esquerda}
              bgSize={"cover"}
              bgRepeat={"no-repeat"}
              h={"100%"}
              w={"100vw"}
              borderRight={"2px solid #ff9f1a"}
              cursor={"pointer"}
            >
              <Flex
                w={"100%"}
                h={"100%"}
                justifyContent={"flex-end"}
                alignItems={"flex-end"}
                bgGradient={"linear(0deg, #000, transparent, transparent)"}
              >
                <AnimationOnScroll animateIn={"animate__fadeInLeftBig"}>
                  <Heading
                    fontFamily={"Montserrat, sans-serif"}
                    fontWeight={"500"}
                    fontSize={{ base: "22px", md: "28px", lg: "42px" }}
                    textAlign={"right"}
                    w={{ base: "160px", md: "350px", lg: "500px" }}
                    m={4}
                  >
                    Aquecimento pré corrida
                  </Heading>
                </AnimationOnScroll>
              </Flex>
            </Flex>
            <Flex
              bgImage={Direita}
              bgSize={"cover"}
              w={"100vw"}
              h={"100%"}
              justifyContent={"flex-start"}
              alignItems={"flex-end"}
              cursor={"pointer"}
            >
              <Flex
                w={"100%"}
                h={"100%"}
                justifyContent={"flex-start"}
                alignItems={"flex-end"}
                bgGradient={"linear(0deg, #000, transparent, transparent)"}
              >
                <AnimationOnScroll animateIn={"animate__fadeInRightBig"}>
                  <Heading
                    fontFamily={"Montserrat, sans-serif"}
                    fontWeight={"500"}
                    fontSize={{ base: "22px", md: "28px", lg: "42px" }}
                    w={{ base: "160px", md: "350px", lg: "500px" }}
                    m={4}
                  >
                    Resfriamento pós corrida
                  </Heading>
                </AnimationOnScroll>
              </Flex>
            </Flex>
          </HStack>
        </AnimationOnScroll>
        <Flex
          alignItems={"flex-end"}
          bgImage={Dicas}
          bgSize={"cover"}
          bgPos={"bottom"}
          bgRepeat={"no-repeat"}
          w={"100%"}
          h={{ base: "11em", md: "15em", lg: "25em" }}
        >
          <AnimationOnScroll animateIn={"animate__fadeIn"}>
            <Flex
              w={"100vw"}
              h={"100%"}
              justifyContent={"flex-start"}
              alignItems={"flex-end"}
              bgGradient={"linear(0deg, #000000, transparent)"}
            >
              <Heading
                color={"#ffffff"}
                fontFamily={"Montserrat, sans-serif"}
                fontWeight={"500"}
                fontSize={{ base: "22px", md: "28px", lg: "42px" }}
                w={{ base: "300px", md: "350px", lg: "500px" }}
                m={4}
              >
                Dicas Para uma alimentação Saudável
              </Heading>
            </Flex>
          </AnimationOnScroll>
        </Flex>
      </VStack>
      <Footer />
    </VStack>
  );
};
export default Dashboard;
