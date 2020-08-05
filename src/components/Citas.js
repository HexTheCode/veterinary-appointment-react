import React, { Fragment } from "react";
import Cita from "./Cita";

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

export default Citas;
