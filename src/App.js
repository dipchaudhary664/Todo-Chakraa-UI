import React, { useState, useEffect } from "react";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { FaSun, FaMoon } from "react-icons/fa";

export default function App() {
  const initialTodos = [
    {
      id: 1,
      title: "Gym",
    },
    {
      id: 2,
      title: "Fitness",
    },
    {
      id: 3,
      title: "Football",
    },
  ];
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <VStack p={5}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Heading
          mb="10"
          fontWeight="extrabold"
          size="2xl"
          bgGradient={"linear(to-l, #7928CA, #FF0080)"}
          bgClip="text"
        >
          Todo Application
        </Heading>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </VStack>
    </>
  );
}
