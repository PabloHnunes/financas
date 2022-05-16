import React, { useState, useEffect } from "react";
import Todo from "../Todo";
import TodoForm from "../TodoForm";
import { TodoLists, TodoTitle } from "./styled";
import axios from "axios";



function TodoList() {
  const [todos, setTodos] = useState([]);

  async function getNotas(){
    await axios
            .get("/notas")
            .then((response) => setTodos(response.data))
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });
  }

  useEffect(() => {
    getNotas()
  }, []);

  const addTodo = async (todo) => {
    if (!todo.texto || /^\s*$/.test(todo.texto)) {
      return;
    }
    await axios
            .post("/notas",{
              texto: todo.texto,
              feito: todo.feito
            })
            .then(() => {
              getNotas();
            })
            .catch((err) => {
              console.log(err);
            })
  };

   const  completeTodo =  (id) => {
    todos.map( async (todo) => {
      if (todo._id === id) { 
       await axios
          .put(`/notas/${id}`,
          {
            feito: !todo.feito
          }
          )
          .then(() => {
            getNotas();
          })
          .catch((err) =>{
            console.log(err);
          })
      }
      return todo;
    });
  };

  const removeTodo = (id) => {
    [...todos].filter( async (todo) =>  {     
      if (todo._id === id) { 
        await axios
                .delete(`/notas/${id}`)
                .then(() => {
                  getNotas();
                })
                .catch((err) =>{
                  console.log(err);
                })
      }
      return todo;
  });

  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.texto || /^\s*$/.test(newValue.texto)) {
      return;
    }
    axios
    .put(`/notas/${todoId}`,
    {
      texto: newValue.texto
    }
    )
    .then(() => {
      getNotas();
    })
    .catch((err) =>{
      console.log(err);
    })
  };
  return (
    <TodoLists>
      <TodoTitle>Oque Vai fazer Hoje? </TodoTitle>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </TodoLists>
  );
}

export default TodoList;
