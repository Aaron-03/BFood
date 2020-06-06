import React from 'react';
import styled from '@emotion/styled';
import { Container, Table } from 'react-bootstrap';
import productos from '../../../datos/productos.json';
import tacho from '../../../assets/img/tablas/trash.svg';
import actualizar from '../../../assets/img/Form/study.svg';
const VendorProductsDiv = styled(Container)`
  width: 153vh;
  position: absolute;
  top: 4em;
  left: 17.8em;
  height: 100vh;
  margin-right: auto;
`;
const TitlePage = styled.h1`
  width: 10em;
  margin: auto;
`;
const renderProducts = (producto, index) => {
  return (
    <tr key={index}>
      <td>{index}</td>
      <td>{producto.Titulo}</td>
      <td>{producto.Descripcion}</td>
      <td>{producto.Estrellas}</td>
      <td>{producto.Categoria}</td>
      <td>{producto.Precio}</td>
      <td>
        <img src={actualizar} style={{ width: 32 }} alt="" />
      </td>
      <td>
        <img src={tacho} style={{ width: 32 }} alt="" />
      </td>
    </tr>
  );
};
export default function VendorProducts() {
  return (
    <VendorProductsDiv className="vendor-products">
      <TitlePage>Mis productos</TitlePage>
      <Table>
        <thead>
          <th>#</th>
          <th>Titulo</th>
          <th>Descripción</th>
          <th>Estrellas</th>
          <th>Categorias</th>
          <th>Precio</th>
        </thead>
        <tbody>{productos.map(renderProducts)}</tbody>
      </Table>
    </VendorProductsDiv>
  );
}
