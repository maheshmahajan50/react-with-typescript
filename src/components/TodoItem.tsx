import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onDeleteTodo: (id: string) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={() => props.onDeleteTodo(props.id)}>
      {props.text}
    </li>
  );
};

export default TodoItem;
