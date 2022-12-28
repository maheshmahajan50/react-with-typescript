import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}> = (props) => {
  const { onDeleteTodo } = props;
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
