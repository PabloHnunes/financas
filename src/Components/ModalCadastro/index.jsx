import { Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import { BoxModal, BtnCadastro, Input } from "../UI";
import { mask, unMask } from "remask";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: `${({ theme }) => theme.inside}}`,
  },
};

function ModalCadastro() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [valor, setValor] = useState(0.0);
  const [ parcela, setParcela ] = useState(1);
  const [descricao, setDescricao] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    resetForm();
  }

  const resetForm = () => {
    setValor(null);
    setDescricao("");
  };
  const onChangeValor = (event) => {
    setValor(mask(unMask(event.target.value), ["999,99", "9.999,99"]));
  };
  const onChangeParcela = (event) => {
    setParcela(event.target.value);
  }
  return (
    <div>
      <BtnCadastro onClick={openModal}>
        <span>Cadastrar</span>
      </BtnCadastro>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <BoxModal>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                label="Descrição"
                id="descricao-conta"
                value={descricao}
                onChange={(e) => {
                  setDescricao(e.target.value);
                }}
                size="small"
                color="warning"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Valor"
                id="valor-conta"
                value={valor}
                onChange={onChangeValor}
                size="small"
                color="warning"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">R$</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Parcelas"
                id="parcela-conta"
                value={parcela}
                onChange={onChangeParcela}
                size="small"
                color="warning"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">x</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <BtnCadastro onClick={closeModal}>Fechar</BtnCadastro>
            </Grid>
            <Grid item xs={4}>
              <BtnCadastro onClick={closeModal}>Salvar</BtnCadastro>
            </Grid>
          </Grid>
        </BoxModal>
      </Modal>
    </div>
  );
}

export default ModalCadastro;
