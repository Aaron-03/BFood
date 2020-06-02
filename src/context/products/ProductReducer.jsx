import { LST_PRODUCT } from '../../types/ProductTypes';

export default (state, action) => {
  switch (action.type) {
    case LST_PRODUCT:
      return {
        loading: false,
        product: action.payload,
        error: '',
      };
    default:
      break;
  }
};
