//import React, { useReducer, useEffect } from 'react';

import React, { useContext } from 'react';
import Product from './Product';
import styled from '@emotion/styled';
import productos from '../../../datos/productos.json';
import ProductContext from '../../../context/products/ProductContext';
// import ProductReducer from '../../../context/products/ProductReducer';
// import Axios from 'axios';
export default function ListProducts(props) {
  const ListProductContainer = styled.div`
    background: #ffffff;
    padding: 5rem;
  `;
  // const initialState = {
  //   product: {
  //     loading: true,
  //     error: '',
  //     product: {},
  //   },
  // };

  // const [state, dispatch] = useReducer(ProductReducer, initialState);

  // useEffect(() => {
  //   Axios.get(`${process.env.BFOOD_BACKEND}/listarproducto`)
  //     .then((res) => {
  //       dispatch({ type: 'LST_PRODUCT', payload: res.data });
  //     })
  //     .catch((err) => {});
  // }, []);
  const { searchTerm, searchPrice } = useContext(ProductContext);
  // let filteredProductsByText = productos.filter((producto) => {
  //   return producto.Titulo.indexOf(searchTerm) !== -1;
  // });

  let filteredProducts = productos.filter((producto) => {
    return producto.Titulo.indexOf(searchTerm) !== -1;
  });
  console.log(searchPrice);
  if (searchPrice) {
    filteredProducts.filter((producto) => producto.Precio === searchPrice);
  }
  console.log(filteredProducts);
  return (
    <ListProductContainer className="border">
      {filteredProducts.map((value, index) => {
        return <Product key={index} {...value} />;
      })}
    </ListProductContainer>
  );
}
