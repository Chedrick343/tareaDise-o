// src/modelo/GatoModelo.js
export default class GatoModelo {
  constructor() {
    this.tablero = Array(3).fill(null).map(() => Array(3).fill(null));
    this.turno = "X";
  }

  obtenerTablero() {
    return this.tablero;
  }

  obtenerTurno() {
    return this.turno;
  }

  reiniciar() {
    this.tablero = Array(3).fill(null).map(() => Array(3).fill(null));
    this.turno = "X";
  }

  // Intenta hacer una jugada
  jugar(fila, columna) {
    if (this.tablero[fila][columna] !== null) return false;

    this.tablero[fila][columna] = this.turno;
    this.turno = this.turno === "X" ? "O" : "X";
    return true;
  }

  verificarGanador() {
    const t = this.tablero;

    // Filas y columnas
    for (let i = 0; i < 3; i++) {
      if (t[i][0] && t[i][0] === t[i][1] && t[i][1] === t[i][2]) return t[i][0];
      if (t[0][i] && t[0][i] === t[1][i] && t[1][i] === t[2][i]) return t[0][i];
    }

    // Diagonales
    if (t[0][0] && t[0][0] === t[1][1] && t[1][1] === t[2][2]) return t[0][0];
    if (t[0][2] && t[0][2] === t[1][1] && t[1][1] === t[2][0]) return t[0][2];

    // Empate
    if (t.flat().every(celda => celda)) return "Empate";

    return null;
  }
}
