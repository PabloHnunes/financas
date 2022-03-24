import React from "react";
import styled from "styled-components";
import { mask, unMask } from "remask";

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

export default ({ type, from, value }) => {
  return (
    <Item>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span
      >
        R${mask(unMask(value), ["99,99", "999,99", "999.999,99"])}
      </span>
    </Item>
  );
};
