import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaInicio from "./pages/PaginaInicio.jsx";
import Juego from "./pages/Juego.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/juego" element={<Juego />} />
      </Routes>
    </BrowserRouter>
  );
}
