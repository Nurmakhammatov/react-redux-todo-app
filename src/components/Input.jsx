import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todosSlice";
import { v4 } from "uuid";

function Input() {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");

  const addTodosHandler = () => {
    const todo = {
      id: v4(),
      text: todoValue,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTodoValue("");
  };

  return (
    <>
      <div className="d-flex my-2 text-center">
        <input
          value={todoValue}
          className="form-control mx-2"
          placeholder="Add todo"
          onChange={(e) => setTodoValue(e.target.value)}
        />
        <button
          className="btn btn-primary px-5"
          onClick={() => addTodosHandler()}
          disabled={todoValue === ""}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default Input;
