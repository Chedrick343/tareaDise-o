import React, { useEffect, useState } from "react";
import "../styles/PaginaInicio.module.css";
import { Navigate } from "react-router-dom";

export default function PaginaInicio() {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    // Genera 20 símbolos aleatorios para el fondo
    const generated = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      symbol: Math.random() > 0.5 ? "X" : "O",
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setSymbols(generated);
  }, []);


  return (
    <div className="container">
      {/* Fondo con símbolos animados */}
      <div className="background">
        {symbols.map(({ id, symbol, top, left, animationDelay }) => (
          <span
            key={id}
            className="symbol"
            style={{ top, left, animationDelay }}
          >
            {symbol}
          </span>
        ))}
      </div>

      {/* Contenido principal */}
      <div className="content">
        <h1 className="title">Gatooo 🐾</h1>
        <p className="subtitle">El clásico...</p>
        <button
          className="play-button"
          onClick={() => (window.location.href = "/juego")}
        >
          Jugar
        </button>
      </div>
    </div>
  );
}
