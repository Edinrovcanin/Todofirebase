import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import app from "./firebase";

function App() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default app