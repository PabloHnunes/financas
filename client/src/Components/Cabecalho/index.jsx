import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import money from "../../assets/images/money.svg";
import { corPrimaria } from "../UI/variaveis";

export const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => ( props.primary ? "white" : "" )};
  color: ${(props) => ( props.primary ? corPrimaria : "white" )};
`;

const StyledHeader = styled.nav`
  background-image: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={money} alt="Logo Smart Bank" />
      <div>
        <Link to="/todo">
          <BtnCabecalho primary>
            Todo List
          </BtnCabecalho>
        </Link>
        <Link to="/">
          <BtnCabecalho>
            Sair
          </BtnCabecalho>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
