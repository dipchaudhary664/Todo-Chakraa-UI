import React from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
export default function TodoList({ todos, updateTodo, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p={3} m={3} borderRadius={"lg"}>
        No todos yet !!!
      </Badge>
    );
  }

  return (
    <VStack
      my={10}
      divider={<StackDivider />}
      borderColor={"gray.200"}
      borderWidth={2}
      p={4}
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", md: "80vw", lg: "50vw", xl: "40vw" }}
    >
      {todos.map((todos) => (
        <HStack key={todos.id} alignSelf="stretch">
          <Text>{todos.title}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound={true}
            onClick={() => deleteTodo(todos.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}
