import {
  VStack,
  Box,
  Flex,
  Image,
  Button,
  HStack,
  Text,
  useDisclosure,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  Center,
} from "@chakra-ui/react";
import { MotionDiv } from "./motion";
import WhiteLogo from "../../assets/logo/Kenzie.WarmUp.svg";
import BackgroundImage from "../../assets/background/image16.png";
import RoutineImage from "../../assets/background/image28.png";
import CatImage from "../../assets/background/image29.jpg";
import FruitImage from "../../assets/background/image30.png";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack bgColor={"#000"} overflowX={"hidden"}>
      <Box
        bgImage={BackgroundImage}
        bgSize={"cover"}
        bgPos={{ base: "right" }}
        h={{ base: "20em", md: "35em", lg: "38em" }}
        w={"100vw"}
        zIndex={1}
      >
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Flex
            mt={2}
            minW={"375px"}
            h={{ base: "60px", md: "90px" }}
            w={"100vw"}
            justifyContent={{
              base: "space-between",
              md: "space-around",
            }}
            alignItems={"center"}
            px={4}
          >
            <Image
              src={WhiteLogo}
              alt={"logo"}
              maxW={"280px"}
              sx={{
                "@media (max-width:768px)": {
                  width: "240px",
                },
                "@media (max-width:425px)": { width: "150px" },
              }}
            />
            <Button
              sx={{
                display: "none",
                "@media (max-width:768px)": {
                  display: "block",
                },
                "@media (max-width:425px)": {},
              }}
              onClick={onOpen}
              fontSize={"1.6rem"}
              bg={"transparent"}
              color={"#fff"}
            >
              <AiOutlineMenuUnfold />
            </Button>
            <HStack
              sx={{
                "@media (max-width:768px)": {
                  display: "none",
                },
              }}
              spacing={4}
            >
              <Button
                bgColor={"#ff9f1a"}
                color={"#fff"}
                _hover={{ filter: "brightness(1.1)" }}
              >
                Cadastro
              </Button>
              <Button
                bgColor={"#2b2b2b"}
                color={"#fff"}
                _hover={{ filter: "brightness(2)" }}
              >
                Login
              </Button>
            </HStack>
          </Flex>
        </MotionDiv>
        {/* Hidden Menu */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody my={8}>
              <VStack spacing={4}>
                <Button bg={"transparent"} color={"#000"}>
                  Login
                </Button>
                <Button bg={"transparent"} color={"#ff9f1a"}>
                  Cadastro
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <HStack
          mt={{ base: "2.5rem", md: "4rem", lg: "5rem" }}
          justifyContent={"flex-end"}
          w={"90vw"}
        >
          <MotionDiv
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <Text
              w={{ base: "200px", md: "400px", lg: "600px" }}
              fontFamily={"Karantina"}
              fontWeight={"bold"}
              fontSize={{ base: "40px", md: "80px", lg: "100px" }}
              lineHeight={{ base: "40px", md: "70px", lg: "100px" }}
              textAlign={"right"}
              color={"#ff9f1a"}
            >
              SEU BEM ESTAR TAMBÉM É IMPORTANTE
            </Text>
          </MotionDiv>
        </HStack>
      </Box>
      <Center
        minH={"300px"}
        h={{ base: "12em", md: "20em", lg: "28em" }}
        w={"100vw"}
        bgColor={"#ff9f1a"}
      >
        <Flex
          w={{ base: "100vw", md: "90vw", lg: "80vw" }}
          justifyContent={"space-around"}
          color={"#fff"}
        >
          <Image
            src={RoutineImage}
            w={{ base: "8em", md: "15em", lg: "22em" }}
            borderRadius={12}
          />
          <VStack spacing={{ base: 2, md: 6, lg: 8 }} justifyContent={"center"}>
            <Text
              w={{ base: "200px", md: "400px", lg: "500px" }}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              fontSize={{ base: "18px", md: "20px", lg: "36px" }}
              lineHeight={{ base: "18px", md: "22px", lg: "40px" }}
            >
              O melhor aplicativo para controlar sua rotina
            </Text>
            <Text
              w={{ base: "200px", md: "400px", lg: "500px" }}
              fontFamily={"Montserrat"}
              fontWeight={"400"}
              fontSize={{ base: "14px", md: "22px", lg: "30px" }}
              lineHeight={{ base: "14px", md: "22px", lg: "40px" }}
            >
              De forma simples e prática, você pode inserir novas atividades
              para sua rotina e ter controle total de suas atividades diárias
            </Text>
          </VStack>
        </Flex>
      </Center>
      <Center
        minH={"300px"}
        h={{ base: "12em", md: "20em", lg: "28em" }}
        w={"100vw"}
        bgColor={"#000"}
      >
        <Flex
          w={{ base: "100vw", md: "90vw", lg: "80vw" }}
          justifyContent={"space-around"}
          color={"#fff"}
        >
          <VStack spacing={{ base: 2, md: 6, lg: 8 }} justifyContent={"center"}>
            <Text
              w={{ base: "200px", md: "400px", lg: "500px" }}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              fontSize={{ base: "18px", md: "20px", lg: "36px" }}
              lineHeight={{ base: "18px", md: "22px", lg: "40px" }}
            >
              Dicas de exercícios e alongamentos
            </Text>
            <Text
              w={{ base: "200px", md: "400px", lg: "500px" }}
              fontFamily={"Montserrat"}
              fontWeight={"400"}
              fontSize={{ base: "14px", md: "22px", lg: "30px" }}
              lineHeight={{ base: "14px", md: "22px", lg: "40px" }}
            >
              Muitas horas em frente o computador pode gerar algumas dores pelo
              corpo. Confira algumas dicas para alongar as pernas e manter o seu
              bem estar
            </Text>
          </VStack>
          <Image
            src={CatImage}
            w={{ base: "8em", md: "15em", lg: "22em" }}
            borderRadius={12}
          />
        </Flex>
      </Center>
      <Center
        minH={"300px"}
        h={{ base: "12em", md: "20em", lg: "28em" }}
        w={"100vw"}
        bgColor={"#fff"}
      >
        <Flex
          w={{ base: "100vw", md: "90vw", lg: "80vw" }}
          justifyContent={"space-around"}
          color={"#000"}
        >
          <Image
            src={FruitImage}
            w={{ base: "8em", md: "15em", lg: "22em" }}
            borderRadius={12}
          />
          <VStack spacing={{ base: 2, md: 6, lg: 8 }} justifyContent={"center"}>
            <Text
              w={{ base: "200px", md: "400px", lg: "500px" }}
              fontFamily={"Montserrat"}
              fontWeight={"bold"}
              fontSize={{ base: "18px", md: "20px", lg: "36px" }}
              lineHeight={{ base: "18px", md: "22px", lg: "40px" }}
              color={"#ff9f1a"}
            >
              Recomendações para suas refeições
            </Text>
            <Text
              w={{ base: "200px", md: "400px", lg: "500px" }}
              fontFamily={"Montserrat"}
              fontWeight={"400"}
              fontSize={{ base: "14px", md: "22px", lg: "30px" }}
              lineHeight={{ base: "14px", md: "22px", lg: "40px" }}
            >
              Separamos algumas refeições diárias e periódicas que vão te fazer
              bem
            </Text>
          </VStack>
        </Flex>
      </Center>
      <Center
        minH={"300px"}
        h={{ base: "12em", md: "20em", lg: "28em" }}
        w={"100vw"}
        bgColor={"#000"}
        color={"#fff"}
      >
        <VStack
          w={{ base: "100vw", md: "90vw", lg: "80vw" }}
          justifyContent={"space-around"}
          spacing={8}
        >
          <Image
            src={WhiteLogo}
            w={{ base: "15em", md: "18em", lg: "22em" }}
            borderRadius={12}
          />
          <Text
            w={{ base: "90vw" }}
            fontFamily={"Montserrat"}
            fontWeight={"400"}
            fontSize={{ base: "11px", md: "14px", lg: "16px" }}
            lineHeight={{ base: "11px", md: "14px", lg: "16px" }}
          >
            Copyright©2022, KenzieWorkout. Todos os direitos reservados. Todos
            os textos, imagens, gráficos, animações, vídeos, músicas, sons e
            outros materiais são protegidos por direitos autorais e outros
            direitos de propriedade intelectual pertencentes à KenzieWorkout,
            suas subsidiárias, afiliadas e licenciantes.
          </Text>
        </VStack>
      </Center>
    </VStack>
  );
};
export default LandingPage;
