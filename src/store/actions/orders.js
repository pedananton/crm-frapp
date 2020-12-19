import { orders } from '../../api';

export const SET_ORDERS = 'SET_ORDERS';
export const getOrders = () => (dispatch) => {
  orders.get().then((resp) =>
    dispatch({
      type: SET_ORDERS,
      payload: resp.data,
    })
  );
};

export const CREATE_ORDERS = 'CREATE_ORDERS';
export function safeOrderForm(data) {
  return function (dispatch) {
    orders.post('', data).then((resp) =>
      dispatch({
        type: CREATE_ORDERS,
        payload: resp.data,
      })
    );
  };
}

export const DELETE_ORDER = "DELETE_ORDER";
export function deleteOrderForm(id) {
  return function (dispatch) {
    orders.delete(id).then(() =>
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      })
    );
  };
}