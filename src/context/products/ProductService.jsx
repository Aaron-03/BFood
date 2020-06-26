import React, { useReducer } from 'react';
import ProductReducer from './ProductReducer';
import ProductContext from './ProductContext';
import ProductTypes from '../../types/ProductTypes';
import ClientAxios from '../../config/ClientAxios';

const {
  ADD_PRODUCT,
  UPD_PRODUCT,
  DLT_PRODUCT,
  LST_PRODUCT_BY_PAGE,
  LST_PRODUCT_BY_VENDOR,
  LST_PRODUCT_BY_TERM,
  FAIL_PRODUCT,
  RESET_PRODUCT,
  FILTER_PRODUCT_BY_CATEGORY,
  FILTER_PRODUCT_BY_PRICE,
} = ProductTypes;

const initialState = {
  searchTerm: '',
  searchChecksHamburger: false,
  searchPrice: 0,
  categories: [
    { id: 1, name: 'Hamburguesas', check: false },
    { id: 2, name: 'Dulces y Chocolates', check: false },
    { id: 3, name: 'Pizzas y Pastas', check: false },
    { id: 4, name: 'Bebidas y Jugos', check: false },
  ],
  pedido: {
    descripcion: '',
    idcliente: '',
    total: 0,
    status: 'PENDIENTE',
    products: []
  },
  products: [],
};

const ProductService = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const searchByTerm = (searchTerm) => {
    try {
      dispatch({
        type: LST_PRODUCT_BY_TERM,
        payload: searchTerm,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const searchByCheckHamburger = (searchCheckHamburger) => {
    try {
      dispatch({
        type: FILTER_PRODUCT_BY_CATEGORY,
        payload: searchCheckHamburger,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const searchByPrice = (searchPrice) => {
    try {
      dispatch({
        type: FILTER_PRODUCT_BY_PRICE,
        payload: searchPrice,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getProductsByPage = async (page) => {
    try {
      const response = await ClientAxios.get(`/producto/all`);

      if (response.data.ok) {
        dispatch({
          type: LST_PRODUCT_BY_PAGE,
          payload: response.data.products,
        });
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addPedido = async (pedido) => {
    try {
      const response = await ClientAxios.post('/pedido/add', pedido);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        searchPrice: state.searchPrice,
        searchTerm: state.searchTerm,
        searchCheckHamburger: state.searchCheckHamburger,
        products: state.products,
        categories: state.categories,
        pedido: state.pedido,
        searchByCheckHamburger,
        searchByPrice,
        searchByTerm,
        getProductsByPage,
        addPedido,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductService;
