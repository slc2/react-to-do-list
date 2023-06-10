import React, { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { ToDoItem } from "./ToDoItem";

const ItemsIndex = "ITEMS";

export default function App(): React.JSX.Element {
  // replaced the following to use local storage to initialize todos
  // const [todos, setTodos] = useState<ToDoItem[]>([]);

  // hooks at the top of the component
  const [todos, setTodos] = useState<ToDoItem[]>(() => {
    const localValue = localStorage.getItem(ItemsIndex);
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem(ItemsIndex, JSON.stringify(todos)), [todos]; // any time anything in todos changes, save it to local storage
  });

  // helper functions
  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  // you cannot modify todos directly, instead you have to create a new array and return it
  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }; // shorthand way of setting one of the attributed, typescript detects you are trying to set the completed property
        }
        return todo;
      });
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  // console.log(todos);

  // the returned jsx
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />

      <h1 className="header">Todo list</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </>
  );
}
