// src/componentes/Juego.jsx
import React, { useEffect, useState } from "react";
import GatoControlador from "../controladores/GatoControlador";

export default function Juego() {
  const [tablero, setTablero] = useState([]);
  const [turno, setTurno] = useState("X");
  const [ganador, setGanador] = useState(null);
  const [controlador, setControlador] = useState(null);

  useEffect(() => {
    const ctrl = new GatoControlador((nuevoTablero, nuevoTurno, nuevoGanador) => {
      setTablero([...nuevoTablero]);
      setTurno(nuevoTurno);
      setGanador(nuevoGanador);
    });
    setControlador(ctrl);
    ctrl.reiniciar();
  }, []);

  if (!controlador) return null;

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Juego del Gato 🐱</h1>
      <h2>Turno: {turno}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "8px", justifyContent: "center", marginTop: "20px" }}>
        {tablero.map((fila, i) =>
          fila.map((celda, j) => (
            <button
              key={`${i}-${j}`}
              onClick={() => !ganador && controlador.jugar(i, j)}
              style={{
                width: "100px",
                height: "100px",
                fontSize: "40px",
                border: "2px solid #555",
                cursor: "pointer",
                backgroundColor: "#fff"
              }}
            >
              {celda}
            </button>
          ))
        )}
      </div>

      {ganador && (
        <h2 style={{ marginTop: "20px" }}>
          {ganador === "Empate" ? "¡Es un empate!" : `¡Ganó ${ganador}!`}
        </h2>
      )}

      <button
        onClick={() => controlador.reiniciar()}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#4c8bf5",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}
