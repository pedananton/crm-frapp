/* eslint-disable import/no-anonymous-default-export */
import { SET_USERS } from '../actions/users';

const initialState = {
  items: [],
};

// function createUser(users, user) {
//   return [...users, user];
// }

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_USERS:
      return { ...state, items: payload };
    default:
      return state;
  }
}
