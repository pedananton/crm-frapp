/* eslint-disable import/no-anonymous-default-export */
import { CREATE_ORDER, DELETE_ORDER, SET_ORDERS } from '../actions/orders';

const initialState = {
  items: [],
};

function createOrder(orders, order) {
  return [...orders, order];
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_ORDERS:
      return { ...state, items: payload };
    case CREATE_ORDER:
      return {
        ...state,
        orders: createOrder(state.items, payload),
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.items.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}
