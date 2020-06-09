import ProductTypes from '../../types/ProductTypes';

const {
<<<<<<< HEAD
  ADD_PRODUCT,
  UPD_PRODUCT,
  DLT_PRODUCT,
  LST_PRODUCT,
  LST_PRODUCT_BY_TERM,
  FAIL_PRODUCT,
  RESET_PRODUCT,
  FILTER_PRODUCT_BY_CATEGORY,
  FILTER_PRODUCT_BY_PRICE,
=======
    ADD_PRODUCT,
    UPD_PRODUCT,
    DLT_PRODUCT,
    LST_PRODUCT_BY_PAGE,
    LST_PRODUCT_BY_TERM,
    FAIL_PRODUCT,
    RESET_PRODUCT,
    FILTER_PRODUCT_BY_CATEGORY,
    FILTER_PRODUCT_BY_PRICE
>>>>>>> 10ee00ffedbefcb6560c5dc84a09d57decdf4c43
} = ProductTypes;

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
      };

    case UPD_PRODUCT:
<<<<<<< HEAD
      return {};
=======
      return {

      };
    
    case LST_PRODUCT_BY_PAGE:
      return {
        ...state,
        products: action.payload
      };
>>>>>>> 10ee00ffedbefcb6560c5dc84a09d57decdf4c43

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
