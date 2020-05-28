
import React, { useReducer } from 'react';

import VendorContext from './VendorContext';
import VendorReducer from './VendorReducer';

import {

    ADD_VENDOR,
    UPD_VENDOR,
    DLT_VENDOR,
    LST_VENDOR

} from '../../types/VendorTypes';

const VendorService = (props) => {



    const initialState = {
        vendor: {},
        form1: false,
        form2: false,
        form3: false
    };

    const [ state, dispatch ] = useReducer(VendorReducer, initialState);

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
                form1: state.form1,
                form2: state.form2,
                form3: state.form3,
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