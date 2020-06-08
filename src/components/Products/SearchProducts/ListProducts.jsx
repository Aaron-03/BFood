//import React, { useReducer, useEffect } from 'react';

import React, { useContext, useEffect } from 'react';
import Product from './Product';
import styled from '@emotion/styled';
import ProductContext from '../../../context/products/ProductContext';
// import ProductReducer from '../../../context/products/ProductReducer';
// import Axios from 'axios';

const ListProductContainer = styled.div`
    padding: 4rem;
    display: flex;
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


  const { searchTerm, searchPrice, products, categories } = useContext(ProductContext);
  // let filteredProductsByText = productos.filter((producto) => {
  //   return producto.Titulo.indexOf(searchTerm) !== -1;
  // });

  const cates = categories.filter(cat => cat.check === true);
  console.log(cates);

  const filterProducts = () => {
    let prods = products.filter(product => 
      product.title.indexOf(searchTerm) !== -1
    );

    return prods;
  }

  let filteredProducts = filterProducts();


  if (searchPrice) {
    filteredProducts.filter((producto) => producto.Precio === searchPrice);
  }

  
  return (
    <ListProductContainer className="col-10">
      <ContentSale>
        Productos: 10
      </ContentSale>

      {filteredProducts.map((value, index) => {
        return <Product key={index} {...value} />;
      })}
    </ListProductContainer>
  );
}
