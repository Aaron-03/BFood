import React, { useReducer } from 'react';

import VendorContext from './VendorContext';
import VendorReducer from './VendorReducer';

import VendorTypes from '../../types/VendorTypes';
import ClientAxios from '../../config/ClientAxios';

const {
  LGN_VENDOR,
  SGN_VENDOR,
  CRT_VENDOR,
  ADD_VENDOR,
  UPD_VENDOR,
  DLT_VENDOR,
  LST_VENDOR,
} = VendorTypes;

const VendorService = (props) => {
  const initialState = {
    vendor: {},
    currentVendor: null,
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
      const result = await ClientAxios.get(`/bfood/sunat/${ruc}`);

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
      await ClientAxios.post('/bfood/register/', request, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
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

  return (
    <VendorContext.Provider
      value={{
        vendor: state.vendor,
        currentVendor: state.currentVendor,
        vendors: state.vendors,
        form1: state.form1,
        form2: state.form2,
        form3: state.form3,
        crtVendor: crtVendor,
        addVendor: addVendor,
        updVendor: updVendor,
        dltVendor: dltVendor,
        validateRuc: validateRuc,
        sendRequest: sendRequest,
      }}
    >
      {props.children}
    </VendorContext.Provider>
  );
};

export default VendorService;
