import { products } from "../../api";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const getProducts = () => (dispatch) => {
  products.get().then((resp) =>
    dispatch({
      type: SET_PRODUCTS,
      payload: resp.data,
    })
  );
};
