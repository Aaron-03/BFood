import React, { useReducer } from 'react';

import ProductoContext from './ProductContext';
import ProductReducer from './ProductReducer';
import ProductTypes from '../../types/ProductTypes';

const { LST_PRODUCT_BY_TERM } = ProductTypes;

const ProductService = (props) => {
  const initialState = {
    searchTerm: '',
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const lstProductByTerm = (term) => {
    try {
      dispatch({
        type: LST_PRODUCT_BY_TERM,
        payload: term,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ProductoContext.Provider value={{ lstProductByTerm: lstProductByTerm }}>
      {props.children}
    </ProductoContext.Provider>
  );
};
export default ProductService;
