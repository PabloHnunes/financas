import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { IconeTema } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Saúde: <IconeTema src={saude} alt="Saúde" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    Útilidades: <IconeTema src={utilidades} alt="Útilidades" />,
    default: <IconeTema src={outros} alt="Outro" />,
  };

  return Images[type] || Images.default;
};
