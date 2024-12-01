import React, { useEffect, useState } from "react";
import { fetchTodos, createTodo, deleteTodo, toggleTodo } from "./api/todos";
import styled from "styled-components";
import theme from "../theme";
import { ThemeProvider } from "@mui/material";

interface Todo {
  id: number;
  title: string;
  completed: number;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error("Failed to load tasks:", error);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      const addedTodo = await createTodo(newTodo);
      setTodos((prev) => [...prev, addedTodo]);
      setNewTodo("");
    } catch (error) {
      console.error("Failed to create tasks:", error);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete tasks:", error);
    }
  };

  const handleToggleTodo = async (id: number, completed: number) => {
    try {
      await toggleTodo(id, completed);
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <h1>Todo List</h1>
        <List>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <TodoText
                completed={todo.completed === 1}
                onClick={() =>
                  handleToggleTodo(todo.id, todo.completed ? 0 : 1)
                }
              >
                {todo.title}
              </TodoText>
              <Button onClick={() => handleDeleteTodo(todo.id)}>X</Button>
            </ListItem>
          ))}
        </List>
        <Input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new task"
        />
        <Button onClick={handleAddTodo} color="primary">
          Add
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const TodoText = styled.span<{ completed: boolean }>`
  cursor: pointer;
  flex: 1;
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  width: 80%;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
  }
`;

export default TodoList;
