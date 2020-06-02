//import React, { useReducer, useEffect } from 'react';

import React from 'react';
import Product from './Product';
import styled from '@emotion/styled';
import productos from '../../../datos/productos.json';
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

  let filteredProductsByText = productos.filter((producto) => {
    return producto.Titulo.indexOf(props.criterioBusqueda) !== -1;
  });

  return (
    <ListProductContainer className="border">
      {console.log(props)}
      {filteredProductsByText.map((value, index) => {
        return <Product key={index} {...value} />;
      })}
    </ListProductContainer>
  );
}
