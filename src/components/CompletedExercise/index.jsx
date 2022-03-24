import { SimpleGrid, Text } from "@chakra-ui/react";

const CompletedExercise = ({ item }) => {
  const newCategory = item.category.toUpperCase();
  return (
    <SimpleGrid columns={3} mt={4}>
      <Text>{newCategory}</Text>
      <Text>{item.name}</Text>
      <Text>{item.last}</Text>
    </SimpleGrid>
  );
};

export default CompletedExercise;
