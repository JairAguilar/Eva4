import React, { useEffect, useSate} from "react";
import { Routes, Route, Link } from "react-router-dom";
import InicioPag from "./components/InicioPag";
import PerfilPag from "./components/PerfilPag";
import Perfilantecedentes from "./components/Perfilantecedentes";
import Calculadora from "./components/Calculadora";
import Contacto from "./components/Contacto";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<InicioPag />}/>
      <Route path="/perfil" element={<PerfilPag />}/>
      <Route path="/perfil/antecedentes" element={<Perfilantecedentes />}/>
      <Route path="/calculadora" element={<Calculadora/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
    </Routes>
  )
}

export default App;
