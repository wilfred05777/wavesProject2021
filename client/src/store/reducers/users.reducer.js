// import { MY_DOG } from "../types";.

import { AUTH_USER } from "../types";
// import { AUTH_USER } from "store/types";

let DEFAULT_USER_STATE = {
  data: {
    _id: null,
    email: null,
    fistname: null,
    lastname: null,
    history: [],
    verified: null,
  },
  auth: null,
  cart: [],
};

export default function usersReducer(state = DEFAULT_USER_STATE, action) {
  switch (action.type) {
    // case MY_DOG:
    //   return { ...state, dog: action.payload };
    case AUTH_USER:
      return {
        ...state,
        data: { ...state.data, ...action.payload.data },
        auth: action.payload.auth,
      };
    default:
      return state;
  }
}
