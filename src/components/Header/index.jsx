import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Input,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo/Kenzie.WarmUpDark.svg";
const Header = () => {
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      justifyContent={"space-around"}
      h={"60px"}
      w={"100%"}
      py={4}
      mt={2}
      minW={"375px"}
    >
      <Image alt="logo" src={logo} maxW={"280px"} />
      {/* Hamburger Menu */}
      <Button
        sx={{
          display: "none",
          "@media (max-width:768px)": {
            display: "block",
          },
          "@media (max-width:425px)": {},
        }}
        onClick={onOpen}
      >
        dale
      </Button>
      <HStack
        sx={{
          "@media (max-width:768px)": {
            display: "none",
          },
        }}
      >
        <Button
          borderRadius={"0"}
          bg={"transparent"}
          _hover={{ bgColor: "#ff9f1a", color: "#fff" }}
          onClick={() => history.push("/dashboard")}
        >
          Home
        </Button>
        <Button
          borderRadius={"0"}
          bg={"transparent"}
          _hover={{ bgColor: "#ff9f1a", color: "#fff" }}
          onClick={() => history.push("/profile")}
        >
          Perfil
        </Button>
        <Button
          borderRadius={"0"}
          bg={"transparent"}
          _hover={{ bgColor: "#ff9f1a", color: "#fff" }}
          onClick={() => history.push("/routine")}
        >
          Rotina
        </Button>
        <Button
          borderRadius={"0"}
          bg={"transparent"}
          _hover={{ bgColor: "#ff9f1a", color: "#fff" }}
          onClick={() => history.push("/exercises")}
        >
          Exercícios
        </Button>
      </HStack>
      {/* Hidden Menu */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody my={8}>
            <VStack spacing={4}>
              <Button
                bg={"transparent"}
                onClick={() => history.push("/dashboard")}
              >
                Home
              </Button>
              <Button
                bg={"transparent"}
                onClick={() => history.push("/profile")}
              >
                Perfil
              </Button>
              <Button
                bg={"transparent"}
                onClick={() => history.push("/routine")}
              >
                Rotina
              </Button>
              <Button
                bg={"transparent"}
                onClick={() => history.push("/exercises")}
              >
                Exercícios
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default Header;
