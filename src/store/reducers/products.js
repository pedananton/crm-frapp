import { CREATE_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS } from '../actions/products';

const initialState = {
  items: [],
};

function createProduct(products, product) {
  return [...products, product];
}

export default function foo(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, items: payload };
    case CREATE_PRODUCT:
      return {
        ...state,
        products: createProduct(state.items, payload),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.items.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}
