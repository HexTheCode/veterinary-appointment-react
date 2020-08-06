import React, { Fragment } from "react";
import Cita from "./Cita";
import PropTypes from "prop-types";

const Citas = ({ titulo, citas, handleEliminar }) => {
  return (
    <Fragment>
      <h2>{titulo}</h2>
      {citas.map((cita) => (
        <Cita cita={cita} key={cita.id} handleEliminar={handleEliminar} />
      ))}
    </Fragment>
  );
};

Citas.propTypes = {
  titulo: PropTypes.string.isRequired,
  citas: PropTypes.array.isRequired,
  handleEliminar: PropTypes.func.isRequired,
};

export default Citas;
