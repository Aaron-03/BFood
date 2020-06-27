import React, { useReducer } from 'react';

import VendorContext from './VendorContext';
import VendorReducer from './VendorReducer';

import VendorTypes from '../../types/VendorTypes';
import ClientAxios from '../../config/ClientAxios';

const {
  GET_PRODUCT,
  CRT_VENDOR,
  ADD_VENDOR,
  UPD_VENDOR,
  DLT_VENDOR,
  ADD_PRODUCT,
  UPD_PRODUCT,
  DLT_PRODUCT,
  LST_PRODUCTS,
  ADD_SUCURSAL,
} = VendorTypes;

const VendorService = (props) => {
  const initialState = {
    vendor: {
      company: 'La Tiendita de Don Cucho',
      ruc: '100210215',
      email: 'mi-empresa@company.com',
      phone: '987654321',
      address: 'Av. Diezcanseco, 147',
    },
    currentVendor: null,
    products: [],
    offices: [
      {
        id: 1,
        name: 'Sucursal 1',
        timeInit: '7:00 A.M',
        timeEnd: '21.00 P.M',
        dayInit: 'Lun',
        dayEnd: 'Vier',
        img: 'asdasdasdasd',
      },
      {
        id: 2,
        name: 'Sucursal 2',
        timeInit: '7:00 A.M',
        timeEnd: '21.00 P.M',
        dayInit: 'Lun',
        dayEnd: 'Vier',
        img: 'asdasdasdasd',
      },
      {
        id: 3,
        name: 'Sucursal 3',
        timeInit: '7:00 A.M',
        timeEnd: '21.00 P.M',
        dayInit: 'Lun',
        dayEnd: 'Vier',
        img: 'asdasdasdasd',
      },
      {
        id: 4,
        name: 'Sucursal 4',
        timeInit: '7:00 A.M',
        timeEnd: '21.00 P.M',
        dayInit: 'Lun',
        dayEnd: 'Vier',
        img: 'asdasdasdasd',
      },
      {
        id: 5,
        name: 'Sucursal 5',
        timeInit: '7:00 A.M',
        timeEnd: '21.00 P.M',
        dayInit: 'Lun',
        dayEnd: 'Vier',
        img: 'asdasdasdasd',
      },
      {
        id: 6,
        name: 'Sucursal 6',
        timeInit: '7:00 A.M',
        timeEnd: '21.00 P.M',
        dayInit: 'Lun',
        dayEnd: 'Vier',
        img: 'asdasdasdasd',
      },
      {
        id: 7,
        name: 'Sucursal 7',
        timeInit: '7:00 A.M',
        timeEnd: '21.00 P.M',
        dayInit: 'Lun',
        dayEnd: 'Vier',
        img: 'asdasdasdasd',
      },
    ],
    currentProduct: null,
    orders: [],
    marcador: [],
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
    loading: false,
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
      const product = await ClientAxios.post('/producto/get', {
        id: productId,
      });
      console.log(product);

      dispatch({
        type: GET_PRODUCT,
        payload: productId,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addProductVendor = async (product) => {
    let res = {
      ok: false,
      message: 'Error al insertar producto',
    };

    try {
      product.vendedor = 1;

      const response = await ClientAxios.post('/producto/add', product);

      if (response.status === 200) {
        dispatch({
          type: ADD_PRODUCT,
          payload: product,
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
  };
  const addSucursalVendor = async (sucursal) => {
    let res = {
      ok: false,
      message: 'Error al registrar una sucursal',
    };
    try {
      //pone en duro el id del vendedor
      sucursal.vendor = { id: 1 };
      const response = await ClientAxios.post('/register-sucursal', sucursal);
      if (response.data.ok) {
        dispatch({
          type: ADD_SUCURSAL,
          payload: sucursal,
        });
      }
    } catch (err) {
      console.log(err);
      return res;
    }
  };
  const updProductVendor = async (product) => {
    let res = {
      ok: false,
      message: 'Error al insertar producto',
    };

    try {
      product.vendedor = { id: 1 };

      const response = await ClientAxios.post('/producto/edit', product);

      if (response.data.ok) {
        dispatch({
          type: UPD_PRODUCT,
          payload: product,
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
  };

  const dltProductVendor = async (productId) => {
    let res = {
      ok: false,
      message: 'Error al insertar producto',
    };

    try {
      const response = await ClientAxios.post('/producto/dlt', {
        id: productId,
      });

      if (response.data.ok) {
        dispatch({
          type: DLT_PRODUCT,
          payload: productId,
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
  };

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
      message: 'Error al insertar producto',
    };

    try {
      const response = await ClientAxios.post('/producto/list', vendorId);

      console.log(response);

      if (response.status === 200) {
        dispatch({
          type: LST_PRODUCTS,
          payload: response.data.filter((product) => product.status === 'A'),
        });

        res = {
          ok: true,
          message: 'Productos cargados correctamente',
        };
      }
    } catch (error) {
      console.log(error);
    }

    return res;
  };

  return (
    <VendorContext.Provider
      value={{
        vendor: state.vendor,
        sucursal: state.sucursal,
        currentVendor: state.currentVendor,
        vendors: state.vendors,
        form1: state.form1,
        form2: state.form2,
        form3: state.form3,
        products: state.products,
        orders: state.orders,
        offices: state.offices,
        currentProduct: state.currentProduct,
        marcador: state.marcador,
        loading: state.loading,
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
        getProductsByVendor,
        addSucursalVendor,
      }}
    >
      {props.children}
    </VendorContext.Provider>
  );
};

export default VendorService;
