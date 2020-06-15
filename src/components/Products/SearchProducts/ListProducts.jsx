//import React, { useReducer, useEffect } from 'react';

import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import styled from '@emotion/styled';
import ProductContext from '../../../context/products/ProductContext';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
// import ProductReducer from '../../../context/products/ProductReducer';
// import Axios from 'axios';

const ListProductContainer = styled.div`
    padding: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  `;
  // const initialState = {
  //   product: {
  //     loading: true,
  //     error: '',
  //     product: {},
  //   },
  // };

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


  const { searchTerm, searchPrice, products, categories, getProductsByPage, pedido, addPedido } = useContext(ProductContext);
 
  const uriHistoty = useHistory();
  
  const [ cantProd, setCantProd ] = useState(pedido.products.length);

  const cates = categories.filter(cat => cat.check === true);
  console.log(cates);

  // const filterProducts = () => {
  //   let prods = products.filter(product => 
  //     product.title.indexOf(searchTerm) !== -1
  //   );

  //   return prods;
  // }

  // let filteredProducts = filterProducts();


  // if (searchPrice) {
  //   filteredProducts.filter((producto) => producto.Precio === searchPrice);
  // }

  const handleGotoPedido = () => {
    if(cantProd === 0) {
      Swal.fire({
        title: 'No ha elegido un producto',
        timer: 2000
      });
      return;
    }

    uriHistoty.push('/pedido-detalle');
  }

  useEffect(() => {

    getProductsByPage(5);
    

  }, []);
  
  return (
    <ListProductContainer className="col-10">
      <ContentSale
        type="button"
        onClick={handleGotoPedido}
      >
        Productos: {cantProd}
      </ContentSale>

      {/* {filteredProducts.map((value, index) => {
        return <Product key={index} {...value} />;
      })} */}

      {
        products.map((product) => (
          <Product key={product.id} pedido={pedido} setCantProd={setCantProd} product={product} />
        ))
      }

    </ListProductContainer>
  );
}
