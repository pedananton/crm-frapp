/* eslint-disable import/no-anonymous-default-export */
import { CREATE_USER, DELETE_USER, SET_USERS } from '../actions/users';

const initialState = {
  items: [],
};

function createUser(users, user) {
  return [...users, user];
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return { ...state, items: payload };
    case CREATE_USER:
      return {
        ...state,
        users: createUser(state.items, payload),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.items.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}
