import React, { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { ToDoItem } from "./ToDoItem";



export default function App(): React.JSX.Element {
  const [todos, setTodos] = useState<ToDoItem[]>([]);

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

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>

      <h1 className="header">Todo list</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  );
}
