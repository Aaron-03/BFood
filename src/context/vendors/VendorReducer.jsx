
import VendorTypes from '../../types/VendorTypes';

const  {
    LGN_VENDOR,
    SGN_VENDOR,
    CRT_VENDOR,
    ADD_VENDOR,
    UPD_VENDOR,
    DLT_VENDOR,
    LST_VENDOR,
    SND_VENDOR

} = VendorTypes;



export default (state, action) => {

    switch(action.type) {

        case SND_VENDOR:
            return {
                ...state,
                currentVendor: action.payload
            };

        case LGN_VENDOR:
            return {
                state
            };

        case CRT_VENDOR:
            return {
                ...state,
                currentVendor: action.payload
            };

        case ADD_VENDOR:
            return {
                state
            };

        case UPD_VENDOR:
            return {

            };

        case DLT_VENDOR:
            return {

            };

        case LST_VENDOR:
            return {

            };

        default:
            return state;
    }


}