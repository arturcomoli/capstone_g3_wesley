import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Button,
  Flex,
  FormControl,
  Heading,
  HStack,
  Progress,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useExercisesListProvider } from "../../providers/ExercisesList";
import { useAuthenticationProvider } from "../../providers/Authentication";
import Background from "../../assets/background/image35.svg";
import { MotionDiv } from "./motion";

const Routine = () => {
  const toast = useToast();

  const { userList, updateExercise } = useExercisesListProvider();
  const { token } = useAuthenticationProvider();
  const toDo = userList.filter((item) => !item.status);
  const allToDo = toDo.reduce((acc, cur) => acc + cur.counter, 0);
  const maxToDo = toDo.length * 5;
  const currentProg = (allToDo / maxToDo) * 100;

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
            <Header />
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
                  DEFINA SEUS HORÁRIOS
                </Text>
                <Text
                  as={"h3"}
                  color={"#ff9f1a"}
                  fontWeight={"600"}
                  fontFamily={"Montserrat, sans-serif"}
                  fontStyle={"italic"}
                  textAlign={"right"}
                  w={{ base: "150px", md: "400px", lg: "600px" }}
                  alignSelf={"self-end"}
                  fontSize={{ base: "14px", md: "25px", lg: "40px" }}
                  lineHeight={{ base: "14px", md: "25px", lg: "40px" }}
                >
                  organize-se
                </Text>
              </MotionDiv>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        minHeight={"600px"}
        spacing={{ base: "15px", md: "25px" }}
        borderRadius={"20px"}
        w={"100vw"}
        maxWidth={{ base: " 400px", md: "600px", lg: "900px" }}
        background={"#ffffff"}
        overflow={"hidden"}
        p={"20px 0"}
      >
        <Heading
          fontWeight={"800"}
          fontFamily={"Montserrat, sans-serif"}
          fontSize={"22px"}
          lineHeight={"27px"}
        >
          Sua lista de Exercícios
        </Heading>
        <VStack w={"100%"}>
          <Flex m={"0"}>
            <Heading fontSize={{ base: "18px", md: "22px" }}>
              Progresso total
            </Heading>
          </Flex>
          <FormControl w={"80%"} m={"0"}>
            <Progress
              m={"0"}
              colorScheme={"orange"}
              size={"lg"}
              hasStripe
              value={currentProg}
            />
          </FormControl>
        </VStack>
        <Flex w={"80%"} justifyContent={"space-between"}>
          <Flex w={"75%"}>
            <Heading
              w={{ base: "44%", md: "30%" }}
              fontSize={{ base: "15px", md: "20px" }}
            >
              Progresso
            </Heading>
            <Heading
              fontSize={{ base: "15px", md: "20px" }}
              ml={{ base: "2", md: "10" }}
            >
              Exercício
            </Heading>
          </Flex>

          <Heading fontSize={{ base: "15px", md: "20px" }}>Atualizar</Heading>
        </Flex>

        {toDo &&
          toDo.map((item, index) => {
            let ratio = (item.counter / item.freq) * 100;
            return (
              <Flex
                key={index}
                w={"80%"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Flex w={"75%"} alignItems={"center"}>
                  <FormControl w={{ base: "20%", md: "30%" }}>
                    <Progress colorScheme={"orange"} value={ratio} />
                  </FormControl>
                  <Text
                    fontSize={{ base: "14px", md: "18px" }}
                    ml={{ base: "2", md: "10" }}
                  >
                    {item.name}
                  </Text>
                </Flex>
                <Button
                  bgColor={"#ff9f1a"}
                  _hover={{ filter: "brightness(1.1)" }}
                  size={"sm"}
                  onClick={() => {
                    updateExercise(item, toast, token);
                  }}
                >
                  Feito
                </Button>
              </Flex>
            );
          })}
      </VStack>

      <Footer />
    </VStack>
  );
};

export default Routine;
