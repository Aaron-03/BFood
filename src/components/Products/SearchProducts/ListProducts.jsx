import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import styled from '@emotion/styled';
import ProductContext from '../../../context/products/ProductContext';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

const ListProductContainer = styled.div`
  padding: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

const ContentSale = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  color: white;
  width: 7rem;
  height: 2.5rem;
  background-color: var(--custom-green);
  transition: 0.4s all;
  border: none;
  outline: none;
  font-weight: bold;
  border-radius: 0.5rem;
  z-index: 3;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function ListProducts(props) {
  const { products, categories, getProductsByPage, pedido } = useContext(
    ProductContext
  );

  const uriHistoty = useHistory();

  const [cantProd, setCantProd] = useState(pedido.products.length);

  const cates = categories.filter((cat) => cat.check === true);
  console.log(cates);

  const handleGotoPedido = () => {
    if (cantProd === 0) {
      Swal.fire({
        title: 'No ha elegido un producto',
        timer: 2000,
      });
      return;
    }

    uriHistoty.push('/pedido-detalle');
  };

  useEffect(() => {
    getProductsByPage(5);
  }, []);

  return (
    <ListProductContainer className="col-10">
      <ContentSale type="button" onClick={handleGotoPedido}>
        Productos: {cantProd}
      </ContentSale>

      {products.map((product) => (
        <Product
          key={product.id}
          pedido={pedido}
          setCantProd={setCantProd}
          product={product}
        />
      ))}
    </ListProductContainer>
  );
}
