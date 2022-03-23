import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
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

const Dashboard = () => {
  return (
    <Center
      w={"calc(100%)"}
      h={"100%"}
      flexDirection={"column"}
      background={"#000000"}
    >
      <Flex
        bgImage={Background}
        flexDirection={"column"}
        w={"100%"}
        h={"100%"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        // bgShadow={"inset 0px -10px 15px #000000"}
        p={"20px"}
      >
        <Header />
        <Text
          as={"h2"}
          fontWeight={"700"}
          fontFamily={"Karantina, cursive"}
          textAlign={"right"}
          w={"40%"}
          alignSelf={"self-end"}
          fontSize={{ base: "30px", md: "60px", lg: "80px" }}
          lineHeight={{ base: "30px", md: "60px", lg: "80px" }}
        >
          MANTENHA O CORPO SAUDÁVEL
        </Text>
        <Text
          as={"h3"}
          color={"#ff9f1a"}
          fontWeight={"600"}
          fontFamily={"Montserrat, sans-serif"}
          fontStyle={"italic"}
          textAlign={"right"}
          w={"40%"}
          alignSelf={"self-end"}
          fontSize={{ base: "14px", md: "25px", lg: "40px" }}
          lineHeight={{ base: "14px", md: "25px", lg: "40px" }}
        >
          alongue-se
        </Text>
      </Flex>
      <VStack
        spacing={"25px"}
        borderRadius={"20px"}
        w={"100%"}
        background={"#ffffff"}
        sx={{
          width: " 100%",
          padding: "25px 0 0 0",
          position: "relative",
          //   bottom: "10px",
          "@media (min-width: 768px)": {
            // bottom: "0px",
            // top: "25px",
            width: "85%",
          },
        }}
      >
        <Text
          as={"h2"}
          fontWeight={"800"}
          fontFamily={"Montserrat, sans-serif"}
          fontSize={"22px"}
          lineHeight={"27px"}
        >
          Alongamentos
        </Text>
        <Flex>
          <Box
            p={"20px"}
            background={"#ff9f1a"}
            bgImage={DorCostas}
            maxW={"sm"}
            h={"300px"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            mx={"25px"}
          >
            <VStack
              justifyContent={"flex-end"}
              h={"100%"}
              bgGradient={"inset 0px -50px 50px 30px #FF9F1A"}
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
          {/* <Box
            p={"20px"}
            background={"#ff9f1a"}
            bgImage={DorPescoco}
            maxW={"sm"}
            h={"300px"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            mx={"25px"}
          >
            <VStack
              justifyContent={"flex-end"}
              h={"100%"}
              bgGradient={"inset 0px -50px 50px 30px #FF9F1A"}
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
            p={"20px"}
            background={"#ff9f1a"}
            bgImage={DorLombar}
            maxW={"sm"}
            h={"300px"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            mx={"25px"}
          >
            <VStack
              justifyContent={"flex-end"}
              h={"100%"}
              bgGradient={"inset 0px -50px 50px 30px #FF9F1A"}
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
            p={"20px"}
            background={"#ff9f1a"}
            bgImage={DorPunho}
            maxW={"sm"}
            h={"300px"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            borderRadius={"10px"}
            mx={"25px"}
          >
            <VStack
              justifyContent={"flex-end"}
              h={"100%"}
              bgGradient={"inset 0px -50px 50px 30px #FF9F1A"}
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
          </Box> */}
        </Flex>

        <HStack
          background={"#ff9f1a"}
          w={"100%"}
          spacing={"0"}
          h={"100%"}
          maxHeight={"300px"}
        >
          <Image
            src={Rotinas}
            w={{ base: "11em", md: "15em", lg: "22em" }}
            maxHeight={"300px"}
          />
          <VStack
            spacing={{ base: 2, md: 6, lg: 8 }}
            w={"100%"}
            justifyContent={"center"}
            textAlign={"center"}
            color="#ffffff"
            fontWeight={"800"}
            fontFamily={"Montserrat, sans-serif"}
            p={"20px"}
          >
            <Text
              sx={{
                fontSize: "24px",
                lineHeight: "30px",
                "@media (min-width: 1024px)": {
                  fontSize: "50px",
                  lineHeight: "68px",
                },
              }}
            >
              Rotinas
            </Text>
            <Text
              sx={{
                fontSize: "12px",
                lineHeight: "14px",
                "@media (min-width: 1024px)": {
                  fontSize: "25px",
                  lineHeight: "44px",
                },
              }}
            >
              Defina horários para seus exercícios diários, alimentação e
              hidratação
            </Text>
            <Button color={"#000000"}>Definir</Button>
          </VStack>
        </HStack>
        <HStack
          w={"100%"}
          spacing={"0"}
          maxHeight={"300px"}
          color={"#ffffff"}
          fontFamily={"Montserrat, sans-serif"}
          sx={{
            fontSize: "16px",
            "@media (min-width: 1024px)": {
              fontSize: "32px",
            },
          }}
        >
          <Flex
            bgImage={Esquerda}
            bgSize={"cover"}
            // w={"100%"}
            justifyContent={"flex-end"}
            alignItems={"flex-end"}
            p={"20px"}
            h={{ base: "11em", md: "15em", lg: "22em" }}
            maxHeight={"300px"}
            w={"100vw"}
          >
            <Text textAlign={"right"}>Aquecimento pré corrida</Text>
          </Flex>
          <Flex
            bgImage={Direita}
            bgSize={"cover"}
            w={"100vw"}
            h={{ base: "11em", md: "15em", lg: "22em" }}
            maxHeight={"300px"}
            justifyContent={"flex-start"}
            alignItems={"flex-end"}
            p={"20px"}
          >
            <Text>Resfriamento pós corrida</Text>
          </Flex>
        </HStack>
        <Flex
          alignItems={"flex-end"}
          zIndex={"1"}
          bgImage={Dicas}
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          w={"100%"}
          h={{ base: "11em", md: "15em", lg: "22em" }}
          // maxHeight={"300px"}
          p={"20px"}
          // bg={"#ff9f1a"}
          // bgGradient={
          //   "linear-gradient(0deg, rgba(255,159,26,1) 0%, rgba(253,149,45,0) 100%)"
          // }
          borderRadius={"0 0  20px 20px"}
        >
          <Text
            color={"#ffffff"}
            fontFamily={"Montserrat, sans-serif"}
            fontSize={{ base: "18px", md: "20px", lg: "36px" }}
            w={{ base: "200px", md: "400px", lg: "500px" }}
            lineHeight={{ base: "18px", md: "22px", lg: "40px" }}
          >
            Dicas Para uma alimentação Saudável
          </Text>
        </Flex>
      </VStack>
      <Footer />
    </Center>
  );
};
export default Dashboard;
