
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

        } catch (error) {
            console.log(error);
        }
        
    }



    return (
        <VendorContext.Provider
            value={{
                
            }}
        >
            {props.children}
        </VendorContext.Provider>
    );
}
 
export default VendorService;