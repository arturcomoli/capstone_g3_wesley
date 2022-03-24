import { SimpleGrid, Center, VStack } from "@chakra-ui/react";
import DevCard from "../../components/DevCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import andre from "../../assets/team/andre.jpeg";
import artur from "../../assets/team/artur.jpeg";
import dylan from "../../assets/team/dylan.jpeg";
import felipy from "../../assets/team/felipy.jpeg";
import ismael from "../../assets/team/ismael.jpeg";
import ravi from "../../assets/team/ravi.jpeg";

const Team = () => {
  return (
    <VStack minH={"100vh"} minW={"100vw"}>
      <Header />
      <Center w={"100%"}>
        <SimpleGrid
          columns={{ base: 2, lg: 3 }}
          spacing={2}
          p={2}
          w={"100%"}
          maxWidth={"850px"}
        >
          <DevCard
            name={"Artur Comoli"}
            status={"Tech Leader"}
            img={artur}
            linkedin={"https://www.linkedin.com/in/artur-comoli/"}
            github={"https://github.com/arturcomoli"}
          />
          <DevCard
            name={"André Junqueira"}
            status={"Scrum Master"}
            img={andre}
            linkedin={"https://www.linkedin.com/in/andrejunqueiramo/"}
            github={"https://github.com/andrejunqueiram"}
          />
          <DevCard
            name={"Dylan Almeida"}
            status={"Quality Assurance"}
            img={dylan}
            linkedin={"https://www.linkedin.com/in/dylan-almeida-4646ab226/"}
            github={"https://github.com/almeidadylan"}
          />
          <DevCard
            name={"Felipy Santos"}
            status={"Product Owner"}
            img={felipy}
            linkedin={"https://www.linkedin.com/in/felipy-santos-b1358121a/"}
            github={"https://github.com/felipysantos"}
          />
          <DevCard
            name={"Ismael Correia"}
            status={"Quality Assurance"}
            img={ismael}
            linkedin={"https://www.linkedin.com/in/devismaelcorreia/"}
            github={"https://github.com/yerrash"}
          />
          <DevCard
            name={"Ravi Antunes"}
            status={"Quality Assurance"}
            img={ravi}
            linkedin={"https://www.linkedin.com/in/ravi-antunes-636950b7/"}
            github={"https://github.com/raviantunes"}
          />
        </SimpleGrid>
      </Center>
      <Footer />
    </VStack>
  );
};
export default Team;
