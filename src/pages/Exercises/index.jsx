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
import { useExercisesListProvider } from "../../providers/ExercisesList";

const Exercises = () => {
  const { fullList, filterList, filteredList, setFilteredList } =
    useExercisesListProvider();

  // console.log(fullList);
  // console.log(filteredList);

  return (
    <VStack h={"100vh"} w={"100vw"} justifyContent={"space-between"}>
      <Flex w={"100vw"} justifyContent={"space-around"}>
        <Header />
      </Flex>
      <main>
        <h2>Corpo Saudável</h2>
        <h2>Mente Saudável</h2>
        <h3>exercite-se</h3>
        <nav>
          <button onClick={() => setFilteredList(fullList)}>Todos</button>
          <br />
          <button onClick={() => filterList("costas")}>Dor nas Costas</button>
          <br />
          <button onClick={() => filterList("pescoco")}>
            Dor no pescoço e ombros
          </button>
          <br />
          <button onClick={() => filterList("lombar")}>Dor na lombar</button>
          <br />
          <button onClick={() => filterList("pulso")}>Dor nos punhos</button>
          <br />
        </nav>
        {
          <section>
            {filteredList &&
              filteredList.map((e, i) => (
                <div key={i}>
                  {i + 1} {e.name}
                </div>
              ))}
          </section>
        }
      </main>
      <Footer />
    </VStack>
  );
};

export default Exercises;
