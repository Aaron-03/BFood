
import React, { useReducer } from 'react';

import VendorContext from './VendorContext';
import VendorReducer from './VendorReducer';

import VendorTypes from '../../types/VendorTypes';

const  {
    LGN_VENDOR,
    SGN_VENDOR,
    CRT_VENDOR,
    ADD_VENDOR,
    UPD_VENDOR,
    DLT_VENDOR,
    LST_VENDOR
} = VendorTypes;

const VendorService = (props) => {

    

    const initialState = {
        vendor: {},
        currentVendor: null,
        vendors: [
            { id: 1, ruc: '12345678910', name: 'DOMINOS Pizza', phone: '987654123', img: '../../../pizza.jpg'  }
        ],
        form1: false,
        form2: false,
        form3: false
    };

    const [ state, dispatch ] = useReducer(VendorReducer, initialState);


    const crtVendor = async (crtVendor) => {

        try {
         
            dispatch({
                type: CRT_VENDOR,
                payload: crtVendor
            });

        } catch (error) {
            console.log(error);
        }
    }

    const addVendor = async (vendor) => {

        try {
            
            dispatch({
                type: ADD_VENDOR,
                payload: vendor
            });

            console.log('Vendedor agregado correctamente', vendor);

        } catch (error) {
            console.log(error);
        }
    }

    const updVendor = async (vendor) => {

        try {
         
            dispatch({
                type: UPD_VENDOR,
                payload: vendor
            });

        } catch (error) {
            console.log(error);
        }
    }

    const dltVendor = async (vendorId) => {

        try {
            
            dispatch({
                type: DLT_VENDOR,
                payload: vendorId
            });

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <VendorContext.Provider
            value={{
                vendor: state.vendor,
                currentVendor: state.currentVendor,
                form1: state.form1,
                form2: state.form2,
                form3: state.form3,
                crtVendor: crtVendor,
                addVendor: addVendor,
                updVendor: updVendor,
                dltVendor: dltVendor
            }}
        >
            {props.children}
        </VendorContext.Provider>
    );
}
 
export default VendorService;