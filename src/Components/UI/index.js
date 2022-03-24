import styled from "styled-components";

export const Icone = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

export const IconeTema = styled(Icone)`
  filter: ${({ theme }) => theme.filter};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: 48%;
  max-height: 600px;
  overflow: auto;
  ::-webkit-scrollbar {
    width:10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.overflow};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(54, 56, 58);
  }

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;

export const Btn = styled.button`
  margin: 15px auto 0px auto;
  display: block;
  border-radius: 20px;
  background-image: radial-gradient(
    circle at -20.71% 50%,
    #ffa555 0,
    #fe924a 25%,
    #f2793c 50%,
    #e65f31 75%,
    #dd482c 100%
  );
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 8px 20px;
  cursor: pointer;
`;

export const BtnCadastro = styled(Btn)`
  margin-bottom: 20px;
  background-image: ${(props) => {
    if (props.save) {
      return "radial-gradient(circle at 50% -20.71%, #1FD70B 0, #1FD70B 50%, #1FD70B 100%)";
    } else if (props.cancel) {
      return "radial-gradient(circle at 120.71% 50%, #f23c3c 0, #f23c3c 50%, #f23c3c 100%)";
    }
  }};

  span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  span:after {
    content: "+";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  :hover span {
    padding-right: 25px;
  }

  :hover span:after {
    opacity: 1;
    right: 0;
  }
`;

export const Detalhe = styled.span`
  color: #fe924a;
  font-size: 24px;
`;

export const Saldo = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: ${({ theme }) => theme.body};
  }
`;

export const BoxModal = styled(Box)`
  display: inline-block;
  flex-direction: none;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.inside};
  border-radius: 5px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
  padding: 20px;
  width: auto;

  @media (max-width: 800px) {
    width: 95%;
    margin: 5px;
  }
`;
