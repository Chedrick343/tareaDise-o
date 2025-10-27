// src/controladores/GatoControlador.js
import GatoModelo from "../modelo/GatoModelo.js";

export default class GatoControlador {
  constructor(actualizarVista) {
    this.modelo = new GatoModelo();
    this.actualizarVista = actualizarVista;
  }

  obtenerTablero() {
    return this.modelo.obtenerTablero();
  }

  jugar(fila, columna) {
    const jugadaValida = this.modelo.jugar(fila, columna);
    if (jugadaValida) {
      const ganador = this.modelo.verificarGanador();
      this.actualizarVista(this.modelo.obtenerTablero(), this.modelo.obtenerTurno(), ganador);
    }
  }

  reiniciar() {
    this.modelo.reiniciar();
    this.actualizarVista(this.modelo.obtenerTablero(), this.modelo.obtenerTurno(), null);
  }
}
