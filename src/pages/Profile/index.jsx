import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  CircularProgress,
  Center,
  CircularProgressLabel,
} from "@chakra-ui/react";

import Footer from "../../components/Footer";

import ProfileBackground from "../../assets/background/image31.jpg";

import Header from "../../components/Header";

import { useExercisesListProvider } from "../../providers/ExercisesList";
import { useAuthenticationProvider } from "../../providers/Authentication";
import CompletedExercise from "../../components/CompletedExercise";
import { MotionDiv } from "./motion";
import { Redirect } from "react-router-dom";

const Profile = () => {
  const { userList } = useExercisesListProvider();
  const user = JSON.parse(localStorage.getItem("@userInfo:KenzieWarmup"));
  const { token } = useAuthenticationProvider();
  if (!token) {
    return <Redirect to={"/login"} />;
  }
  const done = userList.filter((item) => item.status);

  const total = userList.length * 5;

  const toDo = userList.reduce((acc, act) => {
    return acc + act.counter;
  }, 0);
  const showProgress = (toDo / total) * 100;
  const formattedProgress = Number(showProgress.toFixed(0));

  return (
    <VStack bgColor={"#eee"} minH={"100vh"} overflowX={"hidden"}>
      <Box
        bgImage={ProfileBackground}
        bgSize={"cover"}
        bgPos={{ base: "left", md: "top", lg: "top" }}
        h={{ base: "6em", md: "12em", lg: "16em" }}
        w={"100vw"}
      >
        <Header logotype={"white"} />
        <Flex
          mt={{ base: "35px", md: "80px", lg: "120px" }}
          w={"100vw"}
          h={{ base: "6em", md: "12em", lg: "16em" }}
          px={{ base: 8, md: "5em", lg: "16em" }}
        >
          <Avatar
            name={user.name}
            src=""
            bg="orange.500"
            color="white"
            size={"xl"}
          />
          <VStack
            px={4}
            mt={{ base: "10px", md: "30px", lg: "50px" }}
            spacing={0}
            alignItems={"start"}
          >
            <Heading>{user.name}</Heading>
            <Text fontSize={"1.3em"}>Vem M4!</Text>
          </VStack>
        </Flex>
        <VStack
          h={{ base: "550px", md: "700px", lg: "750px" }}
          my={{ base: "15px", md: "-60px" }}
        >
          <Center
            mt={4}
            w={{ base: "100vw", lg: "80vw" }}
            h={"auto"}
            minH={{ base: "320px", md: "180px" }}
            textAlign={"center"}
            flexDir={{ base: "column" }}
            justifyContent={"space-between"}
            spacing={2}
          >
            <MotionDiv
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: "0px" }}
              transition={{ duration: 0.75 }}
              overflow={"hidden"}
            >
              <Box
                w={{ base: "100vw", md: "80vw" }}
                bgColor={"#fff"}
                p={4}
                borderRadius={10}
                minH={"150px"}
                mb={8}
                overflowY="auto"
                maxH={"350px"}
                css={{
                  "&::-webkit-scrollbar-track": {
                    bgColor: "#F4F4F4",
                  },
                  "&::-webkit-scrollbar": {
                    width: "6px",
                    background: "#F4F4F4",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#dad7d7",
                  },
                }}
              >
                <Heading fontSize={{ base: "22px", lg: "32px" }}>
                  Exercícios Concluídos
                </Heading>
                <SimpleGrid columns={3} mt={4}>
                  <Heading fontSize={{ base: "16px", lg: "24px" }}>
                    Categoria
                  </Heading>
                  <Heading fontSize={{ base: "16px", lg: "24px" }}>
                    Nome
                  </Heading>
                  <Heading fontSize={{ base: "16px", lg: "24px" }}>
                    Conclusão
                  </Heading>
                </SimpleGrid>
                {done.map((item, index) => (
                  <CompletedExercise item={item} key={index} />
                ))}
              </Box>
            </MotionDiv>
            <MotionDiv
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: "0px" }}
              transition={{ duration: 0.75 }}
            >
              <Box
                minH={"150px"}
                w={{ base: "100vw", md: "80vw" }}
                bgColor={"#fff"}
                p={4}
                borderRadius={10}
              >
                <Heading fontSize={{ base: "22px", lg: "32px" }}>
                  Progresso
                </Heading>

                <CircularProgress
                  value={showProgress}
                  size={{ base: "2em", md: "2.5em", lg: "3em" }}
                  color={"orange.500"}
                >
                  <CircularProgressLabel fontSize={"20px"}>
                    {`${isNaN(formattedProgress) ? `0` : formattedProgress}%`}
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
            </MotionDiv>
          </Center>
        </VStack>
        <Footer />
      </Box>
    </VStack>
  );
};

export default Profile;
