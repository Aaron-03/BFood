import React from 'react';
import styled from '@emotion/styled';
import { Container } from 'react-bootstrap';
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
export default function VendorProducts() {
  return (
    <VendorProductsDiv className="vendor-products">
      <TitlePage>Mis productos</TitlePage>
      <table>
        <th>Producto</th>
        <th>Cantidad</th>
        <th>Precio</th>
        <th>Descripción</th>
      </table>
    </VendorProductsDiv>
  );
}
