import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { IconeTema } from "../Components/UI";

export default (type) => {
  const Images = {
    Resturante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Saude: <IconeTema src={saude} alt="Saúde" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
    default: <IconeTema src={outros} alt="Outro" />,
  };

  return Images[type] || Images.default;
};
