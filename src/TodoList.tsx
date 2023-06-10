import { ToDoItem } from "./ToDoItem";
import { ToDoListItem } from "./ToDoListItem";

export function TodoList(props: {
  todos: ToDoItem[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}) {
  return (
    <>
      <ul className="list">
        {props.todos.length === 0 && "No Todos"}
        {props.todos.map((todo) => {
          return (
            <ToDoListItem item={todo} toggleTodo={props.toggleTodo} 
            deleteTodo={props.deleteTodo} key={todo.id} />
          );
        })}
      </ul>
    </>
  );
}
