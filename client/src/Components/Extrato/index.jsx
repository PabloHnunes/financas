import React, { useState } from "react";
import { Box } from "../UI";
import { extratoLista } from "../../info";
import Itens from "../Itens";
import ModalCadastro from "../ModalCadastro";

const Extrato = (props) => {
  const [extrato, setExtrato] = useState(extratoLista.updates);

  const addExtrato = (gasto) => {
    if (!gasto.type || /^\s*$/.test(gasto.type) || !gasto.from || /^\s*$/.test(gasto.from)) {
      return;
    }

    const newExtrato = [gasto, ...extrato];

    setExtrato(newExtrato);
  };

  const removeExtrato = (id) => {
    const removeArray = [...extrato].filter((gasto) => gasto.id !== id);

    setExtrato(removeArray);
  };

  return (
    <>
      <Box>
        <ModalCadastro addExtrato={addExtrato} />
        {extrato.map(({ id, type, from, value, date }) => {
          return (
            <Itens key={id} id={id} type={type} from={from} value={value} date={date} removeExtrato={removeExtrato}/>
          );
        })}
      </Box>
    </>
  );
};

export default Extrato;
