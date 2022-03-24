import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  OrderedList,
  ListItem,
  Box,
  Center,
  Flex,
  VStack,
  Button,
} from "@chakra-ui/react";

const Exercise = ({ img, name, instructions, id }) => {
  return (
    <AccordionItem my={2} key={id}>
      <h2>
        <AccordionButton
          bgColor={"#ff9f1a"}
          _hover={{ filter: "brightness(1.1)" }}
          borderRadius={"10px"}
        >
          <Box
            fontSize={{ base: "14px", md: "20px" }}
            flex="1"
            textAlign="left"
            fontFamily={"Montserrat, sans-serif"}
          >
            {name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel p={"10px"} maxWidth={"900px"}>
        <VStack spacing={"10px"}>
          <Flex
            m={0}
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent={{ base: "center", lg: "flex-start" }}
            alignItems={{ base: "center", lg: "flex-start" }}
          >
            <Box
              mt={{ base: "15px", lg: "0px" }}
              boxSize={{ base: "200px", md: "300px" }}
              p={0}
              bgImage={img}
              bgRepeat={"no-repeat"}
              bgSize={"cover"}
              bgPos={"center"}
              w={{ base: "100%", lg: "50%" }}
            ></Box>
            <Center w={{ base: "100%", lg: "50%" }}>
              <OrderedList w={"90%"} spacing={2}>
                {instructions.map((item, index) => (
                  <ListItem
                    borderRadius={"5px"}
                    key={index}
                    fontFamily={"Montserrat, sans-serif"}
                  >
                    {item}
                  </ListItem>
                ))}
              </OrderedList>
            </Center>
          </Flex>
          <Button
            w={{ base: "100%", md: "70%", lg: "50%" }}
            h={"25px"}
            colorScheme={"orange"}
            id={id}
          >
            Adicionar Exercício à minha lista
          </Button>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Exercise;
