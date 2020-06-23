import React, { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { Container, Table, Modal } from 'react-bootstrap';
import productos from '../../../datos/productos.json';
import tacho from '../../../assets/img/tablas/trash.svg';
import actualizar from '../../../assets/img/Form/study.svg';
import RegisterProduct from '../../Products/RegisterProduct/RegisterProduct';
import ProductContext from '../../../context/products/ProductContext';
import VendorContext from '../../../context/vendors/VendorContext';
import UpdateProduct from '../../Products/RegisterProduct/UpdateProduct';
import Swal from 'sweetalert2';
import ListProductsVendors from '../../Products/vendors/ListProductsVendor';

const ContentDashProduct = styled.div`
  padding: 4rem;
  position: relative;
`;

const VendorProductsDiv = styled.div`
  background-color: transparent;
`;

const ModalSucursalForm = styled(Modal.Body)`
 margin-top: -1rem;
 margin-left: -35rem;
 width: 100em;
 max-height: 0rem;
`;

const AddProductButton = styled.button`
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  border: solid 1px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  float: right;
  font-size: 12pt;
  text-transform: uppercase;
  font-weight: bold;
  background-color: var(--custom-red);
  color: white;
  outline: none;
  outline-color: transparent;
`;

const TitlePage = styled.h1`
  width: 90%;
  margin: auto;
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function VendorProducts() {
  const {
    products,
    getProductsByVendor,
    getProductById,
    dltProductVendor,
  } = useContext(VendorContext);

  const [option, setOption] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (opt) => {
    setOption(opt);
    setShow(true);
  };

  const renderProducts = (producto, index) => {
    const handleClickUpd = (productId) => {
      handleShow('upd');
      getProductById(productId);
    };

    const handleClickDlt = (productId) => {
      getProductById(productId);

      Swal.fire({
        title: '¿Está seguro?',
        text: 'Esta acción es irreversible',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, eliminar!',
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Eliminado!',
            'El producto se eliminó correctamente',
            'success'
          );

          dltProductVendor(productId);
        }
      });
    };

    return (
      <tr key={producto.id}>
        <td>{index}</td>
        <td>{producto.nombre}</td>
        <td>{producto.descripcion}</td>
        <td>{producto.estrellas}</td>
        <td>{producto.categoria}</td>
        <td>{producto.precio}</td>
        <td>
          <button
            onClick={() => handleClickUpd(producto.id)}
            className="btn btn-warning"
          >
            <img src={actualizar} style={{ width: 32 }} alt="" />
          </button>
        </td>
        <td>
          <button
            onClick={() => handleClickDlt(producto.id)}
            className="btn btn-danger"
          >
            <img src={tacho} style={{ width: 32 }} alt="" />
          </button>
        </td>
      </tr>
    );
  };

  useEffect(() => {
    getProductsByVendor();
  }, []);

  return (
    <ContentDashProduct className="col-10">
      <VendorProductsDiv>
        <TitlePage>
          Mis productos
          <AddProductButton onClick={() => handleShow('add')}>
            Agregar producto
          </AddProductButton>
        </TitlePage>

        <ListProductsVendors handleShow={handleShow} />

        <Modal show={show} onHide={handleClose}>
          <ModalSucursalForm>
            {option === 'add' ? (
              <RegisterProduct handleClose={handleClose} />
            ) : option === 'upd' ? (
              <UpdateProduct handleClose={handleClose} />
            ) : null}
          </ModalSucursalForm>
        </Modal>
      </VendorProductsDiv>
    </ContentDashProduct>
  );
}
