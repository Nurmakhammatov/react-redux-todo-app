import "./App.css";
import Input from "./components/Input";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      <div className="container">
        <h1 className="text-center pt-2">Todo app</h1>
        <Input />
        {todos?.map((todo) => (
          <Todos key={todo.id} todo={todo} />
        ))}
      </div>
    </>
  );
}

export default App;
