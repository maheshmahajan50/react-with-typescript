import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form>
      <label htmlFor="text" onSubmit={submitHandler}>
        Todo Text
      </label>
      <input type="text" id="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
