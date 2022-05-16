import styled from "styled-components";

export const TodoApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: ${ ({theme}) => theme.container_list };
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;