import React, { Fragment } from 'react';
import { BFoodSubTitle, BFoodTitle } from '../ui/Texts';

export default function EliminarCuentaConsumidor() {
  return (
    <Fragment>
      <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
        <BFoodSubTitle customSize="18pt">Eliminar</BFoodSubTitle>
        <BFoodTitle className="ml-3">BFood</BFoodTitle>
        <BFoodSubTitle customSize="18pt">Usuario</BFoodSubTitle>
      </div>
    </Fragment>
  );
}
