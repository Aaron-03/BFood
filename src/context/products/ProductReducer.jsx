import { LST_PRODUCT } from '../../types/ProductTypes';

export default (state, action) => {
  switch (action.type) {
    case LST_PRODUCT:
      return {};

    default:
      break;
  }
};
