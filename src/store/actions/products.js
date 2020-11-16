import { products } from '../../api';

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const getProducts = () => (dispatch) => {
  products.get().then((resp) =>
    dispatch({
      type: SET_PRODUCTS,
      payload: resp.data,
    })
  );
};

export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export function safeFormProduct(data) {
  return function (dispatch) {
    products.post('', data).then((resp) =>
      dispatch({
        type: CREATE_PRODUCT,
        payload: resp.data,
      })
    );
  };
}
