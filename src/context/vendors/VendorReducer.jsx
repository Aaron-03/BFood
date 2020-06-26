import VendorTypes from '../../types/VendorTypes';

const {
  LGN_VENDOR,
  GET_PRODUCT,
  SGN_VENDOR,
  CRT_VENDOR,
  ADD_VENDOR,
  UPD_VENDOR,
  DLT_VENDOR,
  LST_VENDOR,
  LST_PRODUCTS,
  ADD_PRODUCT,
  UPD_PRODUCT,
  DLT_PRODUCT,
  SND_VENDOR,
  ADD_SUCURSAL,
} = VendorTypes;

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case ADD_SUCURSAL:
      return {
        ...state,
        sucursal: [...state.sucursal, action.payload],
      };
    case UPD_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            product = action.payload;
            return product;
          }

          return product;
        }),
        currentProduct: null,
      };

    case DLT_PRODUCT:
      return {
        ...state,
        products: state.products.filter((product) => {
          return product.id === action.payload;
        }),
        currentProduct: null,
      };

    case GET_PRODUCT:
      return {
        ...state,
        currentProduct: state.products.find(
          (product) => product.id === action.payload
        ),
      };

    case LST_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case SND_VENDOR:
      return {
        ...state,
        currentVendor: action.payload,
      };

    case LGN_VENDOR:
      return {
        state,
      };

    case CRT_VENDOR:
      return {
        ...state,
        currentVendor: action.payload,
      };

    case ADD_VENDOR:
      return {
        state,
      };

    case UPD_VENDOR:
      return {
        ...state,
        vendor: action.payload
      };

    case DLT_VENDOR:
      return {};

    case LST_VENDOR:
      return {};

    default:
      return state;
  }
};
