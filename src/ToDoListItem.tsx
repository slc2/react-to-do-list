import { ToDoItem } from "./ToDoItem";

export function ToDoListItem(props: {
  item: ToDoItem
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}) {
  return (
    <li key={props.item.id}>
      <label>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={(e) => props.toggleTodo(props.item.id, e.target.checked)}
        ></input>
        {props.item.title}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => props.deleteTodo(props.item.id)}
      >
        Delete
      </button>
    </li>
  );
}
