import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  // Button,
  // Center,
  Flex,
  /* Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text, */
  VStack,
} from "@chakra-ui/react";
import api from "../../services/api";
import { useState, useEffect } from "react";

const Exercises = () => {
  const token = JSON.parse(localStorage.getItem("@token:KenzieWarmup"));

  const [fullList, setFullList] = useState();

  useEffect(() => {
    const ListLoader = async () => {
      await api
        .get("/exercises", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFullList(res.data);
        });
    };
    ListLoader();
  }, []);

  console.log(fullList);

  return (
    <VStack h={"100vh"} w={"100vw"} justifyContent={"space-between"}>
      <Flex w={"100vw"} justifyContent={"space-around"}>
        <Header />
      </Flex>
      <main>
        <h2>Corpo Saudável</h2>
        <h2>Mente Saudável</h2>
        <h3>exercite-se</h3>
        <section id="pulso">
          <h4>Pulso</h4>
          {fullList &&
            fullList.map((e, i) =>
              e.category === "pulso" ? <div key={i}>{e.name}</div> : null
            )}
        </section>
        <section id="pescoco">
          <h4>Pescoço</h4>
          {fullList &&
            fullList.map((e, i) =>
              e.category === "pescoco" ? <div key={i}>{e.name}</div> : null
            )}
        </section>
        <section id="costas">
          <h4>Costas</h4>
          {fullList &&
            fullList.map((e, i) =>
              e.category === "costas" ? <div key={i}>{e.name}</div> : null
            )}
        </section>
        <section id="lombar">
          <h4>Lombar</h4>
          {fullList &&
            fullList.map((e, i) =>
              e.category === "lombar" ? <div key={i}>{e.name}</div> : null
            )}
        </section>
      </main>
      <Footer />
    </VStack>
  );
};

export default Exercises;
