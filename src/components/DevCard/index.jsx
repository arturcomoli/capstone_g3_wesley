import {
    Box,
    Image,
    Heading,
    Center,
    VStack,
    HStack,
    IconButton,
    Link,
  } from "@chakra-ui/react";
  import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
  
  const DevCard = ({ img, name, linkedin, status = "qa", github }) => {
    return (
      <Center maxHeight={""}>
        <Box
          w={{ base: "100%" }}
          maxWidth={"200px"}
          mb={"20px"}
          bg={"#FF9F1A"}
          borderRadius={"10px"}
          py={"25px"}
        >
          <Image
            src={img}
            h={{ base: "150px" }}
            w={{ base: "150px" }}
            br={"50%"}
            m={"auto"}
            borderRadius={"50%"}
          />
          <VStack
            alignItems={"flex-start"}
            w={"85%"}
            margin={"auto"}
            mt={"40px"}
            fontFamily={"Montserrat, sans-serif"}
          >
            <Heading
              as={"h5"}
              fontSize={{ base: "18px", md: "20px" }}
              color={"#FFFFFF"}
            >
              {name}
            </Heading>
            <Heading
              as={"h6"}
              fontSize={{ base: "14px", md: "18px" }}
              color={"#FFFFFF"}
            >
              {status}
            </Heading>
            <HStack w={"100%"}>
              <Link isExternal href={linkedin}>
                <IconButton
                  icon={<IoLogoLinkedin />}
                  variant={"link"}
                  fontSize={{ base: "22px", md: "30px", lg: "35px" }}
                  cursor={"pointer"}
                  transition={"0.5s"}
                  _hover={{ filter: "brightness(1.2)" }}
                  color={"#eff7f6"}
                />
              </Link>
              <Link isExternal href={github}>
                <IconButton
                  icon={<IoLogoGithub />}
                  variant={"unstyled"}
                  fontSize={{ base: "22px", md: "30px", lg: "35px" }}
                  cursor={"pointer"}
                  transition={"0.5s"}
                  _hover={{ filter: "brightness(1.2)" }}
                  color={"#eff7f6"}
                  to={github}
                />
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    );
  };
  
  export default DevCard;
  