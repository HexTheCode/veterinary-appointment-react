import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Citas from "./components/Citas";

function App() {
  // Citas en Local storage

  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if (!citasIniciales) {
    citasIniciales = [];
  }

  // arreglo de citas

  const [citas, saveCitas] = useState(citasIniciales);

  // Use Effect para realizar ciertas operaciones cuando el State cambia

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));

    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  // Funcion que maneje las citas

  const handleCitas = (cita) => {
    saveCitas([...citas, cita]);
  };

  // Funcion que elimina la cita por id

  const handleEliminar = (id) => {
    const nuevaCitas = citas.filter((cita) => cita.id !== id);
    saveCitas(nuevaCitas);
  };

  // Mensaje condicional
  const titulo = citas.length === 0 ? "No hay Citas" : "Administrar tus Citas";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form handleCitas={handleCitas} />
          </div>
          <div className="one-half column">
            <Citas
              titulo={titulo}
              citas={citas}
              handleEliminar={handleEliminar}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
