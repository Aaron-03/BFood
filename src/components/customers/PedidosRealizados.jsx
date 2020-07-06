import React, { Fragment } from 'react';
import { BFoodSubTitle, BFoodTitle } from '../ui/Texts';
import { Table } from 'react-bootstrap';

export default function PedidosRealizados() {
  return (
    <Fragment>
      <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
        <BFoodSubTitle customSize="18pt">Pedidos</BFoodSubTitle>
        <BFoodTitle className="ml-3">BFood</BFoodTitle>
        <BFoodSubTitle customSize="18pt">Realizados</BFoodSubTitle>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>PRODUCTO</th>
            <th>DESCRIPCION</th>
            <th>CANTIDAD</th>
            <th>PRECIO</th>
          </tr>
        </thead>
      </Table>
    </Fragment>
  );
}
