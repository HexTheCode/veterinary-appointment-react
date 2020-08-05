import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";

const Form = ({ handleCitas }) => {
  const [cita, updateCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, updateError] = useState(false);

  // Funcion que se ejecuta cada vez que se escriba en un input

  const handleChange = (e) => {
    updateCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // extraer valores

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando Submit

  const submitCita = (e) => {
    e.preventDefault(); // evita que se ejecute el codigo por defecto cuando se pulsa el boton submit

    // Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      updateError(true);
      return;
    }
    // Eliminar mensaje de error
    updateError(false);

    // Asignar ID
    cita.id = uuid();

    // Crear Cita
    handleCitas(cita);

    // Reiniciar Form
    updateCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear una Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Mascota"
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Dueño"
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
