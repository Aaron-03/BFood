import ProductTypes from '../../types/ProductTypes';

const { LST_PRODUCT_BY_TERM } = ProductTypes;

export default (state, action) => {
  switch (action.type) {
    case LST_PRODUCT_BY_TERM:
      return {
        ...state,
        term: action.payload,
      };
    default:
      return state;
  }
};
