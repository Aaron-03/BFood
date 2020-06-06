import React, { useReducer } from 'react';
import ProductReducer from './ProductReducer';
import ProductContext from './ProductContext';
import ProductTypes from '../../types/ProductTypes';

const initialState = {
  searchTerm: '',
  searchCheckHamburger: false,
  searchPrice: 0,
};
const ProductService = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const searchByTerm = (searchTerm) => {
    try {
      dispatch({
        type: ProductTypes.LST_PRODUCT_BY_TERM,
        payload: searchTerm,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const searchByCheckHamburger = (searchCheckHamburger) => {
    try {
      dispatch({
        type: ProductTypes.FILTER_PRODUCT_BY_CATEGORY,
        payload: searchCheckHamburger,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const searchByPrice = (searchPrice) => {
    try {
      dispatch({
        type: ProductTypes.FILTER_PRODUCT_BY_PRICE,
        payload: searchPrice,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        searchByTerm,
        searchTerm: state.searchTerm,
        searchByCheckHamburger,
        searchCheckHamburger: state.searchCheckHamburger,
        searchByPrice,
        searchPrice: state.searchPrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductService;
