import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Heading,
  HStack,
  Text,
  VStack,
  Accordion,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import Background from "../../assets/exercises/image25.svg";
import { useExercisesListProvider } from "../../providers/ExercisesList";
import { useAuthenticationProvider } from "../../providers/Authentication";
import Exercise from "../../components/Exercise";
import { useState } from "react";
import { Redirect } from "react-router-dom";

const Exercises = () => {
  const { fullList, filterList, filteredList, setFilteredList } =
    useExercisesListProvider();

  const { token } = useAuthenticationProvider();

  const [isRender, setRender] = useState(true);

  const handleRender = (filter) => {
    filterList(filter);
    setRender(false);
  };

  if (!token) {
    return <Redirect to="/login" />;
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
                CORPO SAUDÁVEL MENTE SAUDÁVEL
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
                exercite-se
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
          Lista de Exercícios
        </Heading>
        <Tabs
          variant={"soft-rounded"}
          colorScheme={"orange"}
          w={{ base: "100%", md: "70%" }}
        >
          <TabList justifyContent={{ base: "center", md: "space-around" }}>
            <Tab
              fontSize={{ base: "10px", md: "16px" }}
              onClick={() => setFilteredList(fullList)}
            >
              Todos
            </Tab>
            <Tab
              fontSize={{ base: "10px", md: "16px" }}
              onClick={() => handleRender("costas")}
            >
              Costas
            </Tab>
            <Tab
              fontSize={{ base: "10px", md: "16px" }}
              onClick={() => handleRender("pescoco")}
            >
              Pescoço
            </Tab>
            <Tab
              fontSize={{ base: "10px", md: "16px" }}
              onClick={() => handleRender("lombar")}
            >
              Lombar
            </Tab>
            <Tab
              fontSize={{ base: "10px", md: "16px" }}
              onClick={() => handleRender("pulso")}
            >
              Punhos
            </Tab>
          </TabList>
        </Tabs>

        <Accordion allowToggle w={"80%"}>
          {isRender
            ? fullList.map((item, index) => (
                <Exercise
                  key={index}
                  id={index}
                  name={item.name}
                  img={item.img}
                  instructions={item.instructions}
                />
              ))
            : filteredList.map((item, index) => (
                <Exercise
                  key={index}
                  id={index}
                  name={item.name}
                  img={item.img}
                  instructions={item.instructions}
                />
              ))}
        </Accordion>
      </VStack>
      <Footer />
    </VStack>
  );
};

export default Exercises;
