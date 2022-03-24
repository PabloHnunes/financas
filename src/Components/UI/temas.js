import {
  conteudoClaro,
  conteudoEscuro,
  textoFundoClaro,
  textoFundoEscurto,
  fundoClaro,
  fundoEscuto,
  containerClaro,
  containerEscuro,
  fonteClara,
  fonteEscura,
  overClaro,
  overEscuro
} from "../UI/variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
  container_list:containerClaro,
  fonte:fonteClara,
  overflow:overClaro
};

export const temaEscuro = {
  body: fundoEscuto,
  inside: conteudoEscuro,
  text: textoFundoEscurto,
  filter: "invert(100%)",
  container_list: containerEscuro,
  fonte:fonteEscura,
  overflow:overEscuro
};
