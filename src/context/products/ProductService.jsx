import React, { useReducer } from 'react';

import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';

import { LST_PRODUCT } from '../../types/ProductTypes';

const ProductService = (props) => {
  const initialState = {
    product: {},
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const addProduct = async (product) => {
    try {
      dispatch({
        type: LST_PRODUCT,
        payload: product,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider value={{}}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductService;
