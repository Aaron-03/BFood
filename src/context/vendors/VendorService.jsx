import React, { useReducer } from 'react';

import VendorContext from './VendorContext';
import VendorReducer from './VendorReducer';

import VendorTypes from '../../types/VendorTypes';
import ClientAxios from '../../config/ClientAxios';

const {
  LGN_VENDOR,
  SGN_VENDOR,
  GET_PRODUCT,
  CRT_VENDOR,
  ADD_VENDOR,
  UPD_VENDOR,
  DLT_VENDOR,
  LST_VENDOR,
  ADD_PRODUCT,
  UPD_PRODUCT,
  DLT_PRODUCT,
  LST_PRODUCTS
} = VendorTypes;

const VendorService = (props) => {

  const initialState = {
    vendor: {},
    currentVendor: null,
    products: [],
    offices: [],
    currentProduct: null,
    vendors: [
      {
        id: 1,
        name: 'DOMINOS Pizza',
        phone: '987654123',
        img: '../../../pizza.jpg',
        web: 'www.dominospizza.com',
        esp: 'Pizzas y Pastas',
        points: 5,
        date: '05/16/2020',
        desc:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam ex minima? Amet tempora, vero a recusandae sit at.',
      },
      {
        id: 2,
        name: 'NORKYS',
        phone: '987654123',
        img: '../../../pizza.jpg',
        web: 'www.dominospizza.com',
        esp: 'Pollo a la Brasa',
        points: 5,
        date: '05/26/2020',
        desc:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam ex minima? Amet tempora, vero a recusandae sit at.',
      },
      {
        id: 3,
        name: 'MC Donalds',
        phone: '987654123',
        img: '../../../pizza.jpg',
        web: 'www.dominospizza.com',
        esp: 'Papas Fritas',
        points: 5,
        date: '05/20/2020',
        desc:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam ex minima? Amet tempora, vero a recusandae sit at.',
      },
      {
        id: 4,
        name: 'KFC',
        phone: '987654123',
        img: '../../../pizza.jpg',
        web: 'www.dominospizza.com',
        esp: 'Pollos Fritos',
        points: 5,
        date: '05/31/2020',
        desc:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic aliquam ex minima? Amet tempora, vero a recusandae sit at.',
      },
    ],
    form1: false,
    form2: false,
    form3: false,
  };

  const [state, dispatch] = useReducer(VendorReducer, initialState);

  const crtVendor = async (crtVendor) => {
    try {
      dispatch({
        type: CRT_VENDOR,
        payload: crtVendor,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validateRuc = async (ruc) => {
    let response = {};

    try {
      const result = await ClientAxios.get(`/vendor/sunat/${ruc}`);

      response = {
        status: true,
        data: result,
      };
    } catch (error) {
      response = {
        status: false,
        data: error,
      };
    }

    return response;
  };

  const sendRequest = async (request) => {
    try {
      console.log(request);
      await ClientAxios.post('/vendor/register/', request, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (productId) => {
    try {
      
      const product = await ClientAxios.post('/producto/get', { id: productId });
      console.log(product);

      dispatch({
        type: GET_PRODUCT,
        payload: productId
      });

    } catch (error) {
      console.log(error);
    }
  }

  const addProductVendor = async (product) => {

    let res = {
      ok: false,
      message: 'Error al insertar producto'
    }
  
    try {

      product.vendedor = { id: 1 };
      
      const response = await ClientAxios.post("/producto/add", product);
  
      if(response.data.ok) {
        dispatch({
          type: ADD_PRODUCT,
          payload: product
        });

        getProductsByVendor();
      }
  
      res = response;
  
      console.log(res);
  
    } catch (error) {
     
      console.log(error);
      return res;
    }
  
    return res;
  }

  const updProductVendor = async (product) => {
    let res = {
      ok: false,
      message: 'Error al insertar producto'
    }
  
    try {

      product.vendedor = { id: 1 };
      
      const response = await ClientAxios.post("/producto/edit", product);
  
      if(response.data.ok) {
        dispatch({
          type: UPD_PRODUCT,
          payload: product
        });

        getProductsByVendor();
      }
  
      res = response;
  
      console.log(res);
  
    } catch (error) {
     
      console.log(error);
      return res;
    }
  
    return res;
  }

  const dltProductVendor = async (productId) => {
    let res = {
      ok: false,
      message: 'Error al insertar producto'
    }
  
    try {

      const response = await ClientAxios.post("/producto/dlt", { id: productId });
  
      if(response.data.ok) {
        dispatch({
          type: DLT_PRODUCT,
          payload: productId
        });

        getProductsByVendor();
      }
  
      res = response;
  
      console.log(res);
  
    } catch (error) {
     
      console.log(error);
      return res;
    }
  
    return res;
  }

  const addVendor = async (vendor) => {

    try {
      dispatch({
        type: ADD_VENDOR,
        payload: vendor,
      });

      console.log('Vendedor agregado correctamente', vendor);
    } catch (error) {
      console.log(error);
    }
  };

  const updVendor = async (vendor) => {
    try {
      dispatch({
        type: UPD_VENDOR,
        payload: vendor,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const dltVendor = async (vendorId) => {
    try {
      dispatch({
        type: DLT_VENDOR,
        payload: vendorId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByVendor = async () => {

    const vendorId = { id: 1 };

    let res = {
      ok: false,
      message: 'Error al insertar producto'
    }

    try {

      const response = await ClientAxios.post("/producto/list", vendorId);

      if(response.data.ok) {

        dispatch({
          type: LST_PRODUCTS,
          payload: response.data.data.filter(product => product.status === 'A')
        });

        res = {
          ok: true,
          message: 'Productos cargados correctamente'
        }
      }

    } catch (error) {
      console.log(error);
    }

    return res;
  }

  return (
    <VendorContext.Provider
      value={{
        vendor: state.vendor,
        currentVendor: state.currentVendor,
        vendors: state.vendors,
        form1: state.form1,
        form2: state.form2,
        form3: state.form3,
        products: state.products,
        offices: state.offices,
        currentProduct: state.currentProduct,
        crtVendor: crtVendor,
        addVendor: addVendor,
        updVendor: updVendor,
        dltVendor: dltVendor,
        validateRuc: validateRuc,
        sendRequest: sendRequest,
        addProductVendor,
        updProductVendor,
        dltProductVendor,
        getProductById,
        getProductsByVendor
      }}
    >
      {props.children}
    </VendorContext.Provider>
  );
};

export default VendorService;
