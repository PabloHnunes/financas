import { Grid, InputAdornment, TextField, Autocomplete } from "@mui/material";
import React, { useEffect, useState } from "react";
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
const tipos = [
  { id: 1, title: "Restaurante" },
  { id: 2, title: "Útilidades" },
  { id: 3, title: "Saúde" },
  { id: 4, title: "Transporte" },
  { id: 5, title: "Outros" },
];

function ModalCadastro({ addExtrato }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [valor, setValor] = useState(0.0);
  const [parcela, setParcela] = useState(1);
  const [type, setType] = useState(null);
  const [data, setData] = useState("");
  const [usaPorcentagem, setUsaPorcent] = useState(false);
  const [porcentagem, setPorcentagem] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [gasto, setGasto] = useState({
    id: "",
    type: "",
    from: "",
    date: "",
    value: 0,
  });

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
    setValor(
      mask(unMask(event.target.value), [
        "9,99",
        "99,99",
        "999,99",
        "999.999,99",
        "999.999.999,99",
        "999.999.999.999,99",
      ])
    );
  };
  const onChangeParcela = (event) => {
    setParcela(event.target.value);
  };
  const onChangePorcentagem = (event) => {
    setPorcentagem(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addExtrato(gasto);
    closeModal();
  };

  useEffect(() => {
    setGasto({
      id: Math.floor(Math.random() * 10000),
      type: type,
      from: descricao,
      date: data,
      value: valor
    })
  },[type,descricao,data,valor]);

  return (
    <>
      <BtnCadastro onClick={openModal}>
        <span>Cadastrar</span>
      </BtnCadastro>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <BoxModal>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Autocomplete
                  value={type}
                  onChange={(event, newType) => {
                    setType(newType);
                  }}
                  id="type"
                  options={tipos.map((option) => option.title)}
                  renderInput={(params) => (
                    <TextField {...params} size="small" label="Tipo:" />
                  )}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  label="Descrição:"
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
                  label="Valor:"
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
                  label="Data:"
                  id="data"
                  value={data}
                  onChange={(e) => {
                    setData(e.target.value);
                  }}
                  size="small"
                  color="warning"
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Parcelas:"
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
                <TextField
                  disabled={!usaPorcentagem}
                  label="Porcentagem:"
                  id="porcentagem-conta"
                  value={porcentagem}
                  onChange={onChangePorcentagem}
                  size="small"
                  color="warning"
                />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={2}>
                <BtnCadastro cancel onClick={closeModal}>
                  Fechar
                </BtnCadastro>
              </Grid>
              <Grid item xs={1}>
                <BtnCadastro save>Salvar</BtnCadastro>
              </Grid>
            </Grid>
          </BoxModal>
        </form>
      </Modal>
    </>
  );
}

export default ModalCadastro;
