// import { MY_DOG } from "../types";
// import {} from "../types";

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
    default:
      return state;
  }
}
