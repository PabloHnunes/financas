import React, { useState } from "react";
import TodoForm from "../TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TodoIcons, TodoItem } from "./styled";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    _id: null,
    texto: "",
  });

  const submitUpdate = (texto) => {
    updateTodo(edit._id, texto);
    setEdit({ _id: null, texto: "", feito: false});
  };

  if (edit._id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <TodoItem className={todo.feito ? "complete" : ""} key={index}>
      <div
        key={todo._id}
        onClick={() => {
          completeTodo(todo._id);
        }}
      >
        {todo.texto}
      </div>
      <TodoIcons>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo._id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ _id: todo._id, texto: todo.texto, feito: todo.feito })}
          className="edit-icon"
        />
      </TodoIcons>
    </TodoItem>
  ));
}

export default Todo;
