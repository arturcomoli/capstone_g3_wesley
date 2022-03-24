import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  SimpleGrid,
  CircularProgress,
} from "@chakra-ui/react";

import Footer from "../../components/Footer"

import ProfileBackground from "../../assets/background/image31.jpg";
import ProfileImage from "../../assets/avatar/linda.jpg";

import Header from "../../components/Header";
const Profile = () => {
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
            src={ProfileImage}
            boxSize={{ base: "5em", md: "7em", lg: "8em" }}
          />
          <VStack
            px={4}
            mt={{ base: "10px", md: "30px", lg: "50px" }}
            spacing={0}
            alignItems={"start"}
          >
            <Heading>Rosalinda</Heading>
            <Text fontSize={"1.3em"}>Soy mui gata</Text>
          </VStack>
        </Flex>
        <VStack h={"500px"} my={{ base: "15px", md: "-60px" }}>
          <Flex
            mt={4}
            w={{ base: "100vw", md: "80vw" }}
            h={"auto"}
            minH={{ base: "320px", md: "180px" }}
            textAlign={"center"}
            flexDir={{ base: "column", md: "row" }}
            justifyContent={"space-between"}
            spacing={2}
          >
            <Box
              w={{ base: "100vw", md: "45%" }}
              bgColor={"#fff"}
              p={4}
              borderRadius={10}
              minH={"150px"}
            >
              <Heading fontSize={{ base: "22px", lg: "32px" }}>
                Exercícios Concluídos
              </Heading>
              <SimpleGrid columns={3} mt={4} >
                <Text>Dificuldade</Text>
                <Text>Nome</Text>
                <Text>Tempo</Text>
              </SimpleGrid>
            </Box>
            <Box
              minH={"150px"}
              w={{ base: "100vw", md: "45%" }}
              bgColor={"#fff"}
              p={4}
              borderRadius={10}
            >
              <Heading fontSize={{ base: "22px", lg: "32px" }}>Tempo</Heading>

              <CircularProgress
                value={30}
                size={{ base: "2em", md: "2.5em", lg: "3em" }}
              />
            </Box>
          </Flex>
        </VStack>
        <Footer/>
      </Box>
    </VStack>
  );
};

export default Profile;
