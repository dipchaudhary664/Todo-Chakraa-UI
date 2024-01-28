import React, { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
export default function AddTodo({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No Todos",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    // console.log(content);
    const todo = {
      id: nanoid(),
      title: content,
    };
    // console.log(todo);
    addTodo(todo);
    setContent("");
  }

  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          type="text"
          variant={"filled"}
          placeholder="Add Your Todos"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" colorScheme="teal" px={10}>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}
