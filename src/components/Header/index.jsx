import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import logo from "../../assets/logo/Kenzie.WarmUpDark.svg";
import logoWhite from "../../assets/logo/Kenzie.WarmUp.svg";
import { useAuthenticationProvider } from "../../providers/Authentication";
import { useExercisesListProvider } from "../../providers/ExercisesList";
const Header = ({ logotype, bgWhite }) => {
  const history = useHistory();
  const { handleLogout } = useAuthenticationProvider();
  const { setUserList, setFilteredList } = useExercisesListProvider();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
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
        src={logotype === "white" ? logoWhite : logo}
        alt={"logo"}
        maxW={"280px"}
        sx={{
          "@media (max-width:768px)": {
            width: "240px",
          },
          "@media (max-width:425px)": { width: "150px" },
        }}
      />
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
        fontSize={"1.6rem"}
        bg={"transparent"}
        color={bgWhite === "white" ? logoWhite : logo}
      >
        <AiOutlineMenuUnfold />
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
        <Button
          borderRadius={"0"}
          bg={"#000000"}
          color={"#ffffff"}
          _hover={{ bgColor: "#ff9f1a" }}
          onClick={() => handleLogout(history, setUserList, setFilteredList)}
        >
          Logout
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
              <Button
                bg={"#2b2b3c"}
                color={"#ffffff"}
                _hover={{ filter: "brightness(1.4)" }}
                onClick={() =>
                  handleLogout(history, setUserList, setFilteredList)
                }
              >
                Logout
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
export default Header;
