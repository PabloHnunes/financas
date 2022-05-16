import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import { GlobalStyle } from "./Components/GlobalStyle";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Components/Container";
import List from "./Components/List";

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema);
  };
  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <BrowserRouter>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      
            <Routes>
                <Route exact path="/" element={<Container />} />
                <Route exact path="/todo" element={<List />} /> 
            </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
