import { users } from '../../api';

export const SET_USERS = 'SET_USERS';
export const getUsers = () => (dispatch) => {
  users.get().then((resp) =>
    dispatch({
      type: SET_USERS,
      payload: resp.data,
    })
  );
};
