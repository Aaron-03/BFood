import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Container, Table, Modal } from 'react-bootstrap';
import productos from '../../../datos/productos.json';
import tacho from '../../../assets/img/tablas/trash.svg';
import actualizar from '../../../assets/img/Form/study.svg';
import RegisterProduct from '../../Products/RegisterProduct/RegisterProduct';


const ContentDashProduct = styled.div`
  padding: 4rem;
  position: relative;
`;

const VendorProductsDiv = styled.div`
  background-color: transparent;
`;

const TitlePage = styled.h1`
  width: 10em;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const AddProductButton = styled.button`
  border-radius: 15px;
  padding: 0 10px;
  border: solid 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: 3em;
  position: absolute;
  left: 46rem;
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <VendorProductsDiv className="vendor-products">
      <AddProductButton onClick={handleShow}>Agregar producto</AddProductButton>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <RegisterProduct />
        </Modal.Body>
      </Modal>
    </VendorProductsDiv>
  );
}
