import { SET_PRODUCTS } from "../actions/products";

const initialState = {
  items: [],
};

export default function foo(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, items: payload };
    default:
      return state;
  }
}
