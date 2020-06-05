import ProductTypes from '../../types/ProductTypes';

export default (state, action) => {
  switch (action.type) {
    case ProductTypes.LST_PRODUCT_BY_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ProductTypes.FILTER_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        searchCategory: action.payload,
      };
    case ProductTypes.FILTER_PRODUCT_BY_PRICE:
      return {
        ...state,
        searchPrice: action.payload,
      };
    default:
      return state;
  }
};
