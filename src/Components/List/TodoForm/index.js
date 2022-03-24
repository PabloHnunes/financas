import React, { useState, useEffect, useRef } from "react";
import { TodoForms, TodoInput, TodoButton } from "./styled";
import { AiOutlinePlus } from "react-icons/ai";

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
      id: Math.floor(Math.random() * 10000),
      text: input,
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
            name="text"
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
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <TodoButton>
            <div className="label_button">
              Adicionar <AiOutlinePlus className="plus-icon" />{" "}
            </div>
          </TodoButton>
        </>
      )}
    </TodoForms>
  );
}

export default TodoForm;
