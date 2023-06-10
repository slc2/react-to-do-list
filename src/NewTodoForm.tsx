import { useState } from "react";

export function NewTodoForm(props: {onSubmit? : (arg: string) => void}) {

    const [newItem, setNewItem] =   useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault(); // this prevents page from refreshing
        props?.onSubmit?.(newItem);
        setNewItem("");
      }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
