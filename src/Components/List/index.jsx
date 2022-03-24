import React from "react";
import TodoList from "./TodoList";
import { TodoApp } from "./styled";

function List() {
  return (
    <TodoApp>
      <TodoList />
    </TodoApp>
  );
}

export default List;