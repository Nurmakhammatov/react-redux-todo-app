import React from "react";
import { useDispatch } from "react-redux";
import { toggleComletedTodo, removeTodo } from "../features/todos/todosSlice";

function Todos({ todo }) {
  const dispatch = useDispatch();

  const toggleTodoHandler = (id) => {
    dispatch(toggleComletedTodo(id));
  };
  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="d-flex justify-content-between ms-2 my-2">
      <button
        className="btn btn-success"
        onClick={() => toggleTodoHandler(todo.id)}
      >
        Completed
      </button>
      <div
        className={`h5 pt-1 ${
          todo.completed ? "text-decoration-line-through text-warning" : null
        }`}
      >
        {todo.text}
      </div>
      <button
        className="btn btn-danger flex-end"
        onClick={() => removeTodoHandler(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todos;
