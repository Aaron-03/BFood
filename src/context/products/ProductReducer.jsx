import ProductTypes from '../../types/ProductTypes';

const {
    ADD_PRODUCT,
    UPD_PRODUCT,
    DLT_PRODUCT,
    LST_PRODUCT,
    LST_PRODUCT_BY_TERM,
    FAIL_PRODUCT,
    RESET_PRODUCT,
    FILTER_PRODUCT_BY_CATEGORY,
    FILTER_PRODUCT_BY_PRICE
} = ProductTypes;

export default (state, action) => {
  switch (action.type) {

    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload]
      };

    case UPD_PRODUCT:
      return {

      };

    case LST_PRODUCT_BY_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case FILTER_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        searchCategory: action.payload,
      };
    case FILTER_PRODUCT_BY_PRICE:
      return {
        ...state,
        searchPrice: action.payload,
      };
    default:
      return state;
  }
};
