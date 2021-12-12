import {
  conteudoClaro,
  conteudoEscuro,
  textoFundoClaro,
  textoFundoEscurto,
  fundoClaro,
  fundoEscuto,
} from "../UI/variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: "",
};

export const temaEscuro = {
  body: fundoEscuto,
  inside: conteudoEscuro,
  text: textoFundoEscurto,
  filter: "invert(100%)",
};
