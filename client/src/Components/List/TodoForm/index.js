import React, { useState, useEffect, useRef } from "react";
import { TodoForms, TodoInput, TodoButton } from "./styled";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      texto: input,
      feito: false
    });

    setInput("");
  };

  return (
    <TodoForms onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <TodoInput
            type="text"
            placeholder="Atualizar atividade"
            className="edit"
            value={input}
            name="texto"
            onChange={handleChange}
            ref={inputRef}
          />
          <TodoButton className="edit"> Atualizar </TodoButton>
        </>
      ) : (
        <>
          <TodoInput
            type="text"
            placeholder="Adicionar atividade"
            value={input}
            name="texto"
            onChange={handleChange}
            ref={inputRef}
          />
          <TodoButton> Adicionar + </TodoButton>
        </>
      )}
    </TodoForms>
  );
}

export default TodoForm;
