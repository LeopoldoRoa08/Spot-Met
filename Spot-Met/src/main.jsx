import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Cambiado de "react-router" a "react-router-dom"
import Ter from "./Pago Correcto"; // El nombre del componente debe empezar con mayúscula

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Aquí pongo el header para que se vea en todas las páginas */}
      <Routes>
        <Route path="/" element={<Ter />} /> {/* Usando el componente con mayúscula */}
      </Routes>
      {/* Footer para que esté en todas las páginas */}
    </BrowserRouter>
  </React.StrictMode>
);
