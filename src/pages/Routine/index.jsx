import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
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
import Background from "../../assets/background/image35.svg";

const Routine = () => {
  const toast = useToast();

  const { userList, updateExercise, addToUserList, deleteFromUserList } =
    useExercisesListProvider();

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
          <Header />
          <HStack justifyContent={"flex-end"} w={"90vw"}>
            <VStack mt={{ base: "2.5rem", md: "4rem", lg: "6rem" }}>
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
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        minHeight={"600px"}
        spacing={{ base: "25px", md: "35px" }}
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
        <Flex>
          <span>Progresso total</span>
          <span>Dias</span>
        </Flex>
        <FormControl>
          <Progress colorScheme={"orange"} size={"lg"} hasStripe value={64} />
        </FormControl>
        <Flex>
          <span>Progresso</span>
          <span>Exercício</span>
        </Flex>
        {userList &&
          userList.map((item, index) => {
            let ratio = (item.counter / item.freq) * 100;
            return (
              <Flex key={index} w={"80%"}>
                <FormControl>
                  <Progress colorScheme={"orange"} value={ratio} />
                </FormControl>
                <p>{item.name}</p>
                <button
                  onClick={() => {
                    updateExercise(item, toast);
                  }}
                >
                  brabo
                </button>
              </Flex>
            );
          })}
      </VStack>

      <Footer />
    </VStack>
  );
};

export default Routine;
