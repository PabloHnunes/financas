import React from "react";
import styled from "styled-components";
import Item from "../Item";
import ImageFilter from "../ImageFilter";
import backspace from "../../assets/images/backspace.svg";
import { IconeTema } from "../UI";

const Itens = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) => {
  return (
    <Itens>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
      <IconeTema
        src={backspace}
        alt="Backspace"
        onClick={() => {

          console.log(props);
          console.log("TESTE DE CLICK " + props.id);
          props.removeExtrato(props.id);
        }}
      ></IconeTema>
    </Itens>
  );
};
