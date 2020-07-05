import ProductTypes from '../../types/ProductTypes';

const {
  ADD_PRODUCT,
  UPD_PRODUCT,
  DLT_PRODUCT,
  LST_PRODUCT_BY_PAGE,
  LST_PRODUCT_BY_TERM,
  FAIL_PRODUCT,
  RESET_PRODUCT,
  FILTER_PRODUCT_BY_CATEGORY,
  FILTER_PRODUCT_BY_PRICE,
} = ProductTypes;

export default (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
      };

    case UPD_PRODUCT:
      return {};

    case LST_PRODUCT_BY_PAGE:

      return {
        ...state,
        products: action.payload
      };

    case LST_PRODUCT_BY_TERM:
      return {
        ...state,
        products: state.products.filter(prod => {
          const prodName = prod.nombre.toLowerCase();
          const storeName = prod.descripcion.toLowerCase();
          if(prodName.includes(action.payload) || storeName.includes(action.payload)) {
            return prod;
          }

          return null;
        }),
        searchTerm: action.payload
      };
    case FILTER_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        searchCategory: action.payload,
      };

    case FILTER_PRODUCT_BY_PRICE:

      const option = action.payload;
      let xproducts = state.products;

      if(option === 0) {
        xproducts.sort((a, b) => a.precio === b.precio ? 0 : -1);
      } else if(action.payload === 1) {
        xproducts.sort((a, b) => a.precio - b.precio);
      } else {
        xproducts.sort((a, b) => b.precio - a.precio);
      }

      return {
        ...state,
        products: xproducts,
        searchPrice: action.payload,
      };
    default:
      return state;
  }
};
