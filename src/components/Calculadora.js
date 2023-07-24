import React, { useState } from "react";

const Calculadora = () => {
  // Componente para el cálculo del factorial con caja de texto (input)
  const FactorialCalculatorInput = () => {
    const [number, setNumber] = useState("");
    const [factorial, setFactorial] = useState("");

    const calFactorial = () => {
      const num = parseInt(number);
      if (!isNaN(num)) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
          result *= i;
        }
        setFactorial(result);
      } else {
        setFactorial("");
      }
    };

    return (
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={calFactorial}>Calcular Factorial</button>
        <p>Factorial: {factorial}</p>
      </div>
    );
  };

  // Componente para el cálculo del factorial con select
  const FactorialCalculatorSelect = () => {
    const [number, setNumber] = useState("");
    const [factorial, setFactorial] = useState("");

    const calFactorial = () => {
      const num = parseInt(number);
      if (!isNaN(num)) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
          result *= i;
        }
        setFactorial(result);
      } else {
        setFactorial("");
      }
    };

    const generateOptions = () => {
      const options = [];
      for (let i = 1; i <= 30; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
      }
      return options;
    };

    return (
      <div>
        <select value={number} onChange={(e) => setNumber(e.target.value)}>
          <option value="">Selecciona un número</option>
          {generateOptions()}
        </select>
        <button onClick={calFactorial}>Calcular Factorial</button>
        <p>Factorial: {factorial}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>Calculadora con caja de texto</h2>
      <FactorialCalculatorInput />
      <h2>Calculadora con select</h2>
      <FactorialCalculatorSelect />
    </div>
  );
};


export default Calculadora;