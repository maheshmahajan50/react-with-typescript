import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);

    setTodos((prevTodo) => {
      return prevTodo.concat(newTodo);
    });
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
