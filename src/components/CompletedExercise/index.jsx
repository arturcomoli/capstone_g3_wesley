import { SimpleGrid, Text } from "@chakra-ui/react";

const CompletedExercise = ({ item }) => {
  return (
    <SimpleGrid columns={3} mt={4}>
      <Text>{item.category}</Text>
      <Text>{item.name}</Text>
      <Text>{item.last}</Text>
    </SimpleGrid>
  );
};

export default CompletedExercise;
