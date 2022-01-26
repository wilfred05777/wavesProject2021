import { GET_PROD_BY_SOLD } from "store/types";
export default function productsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PROD_BY_SOLD:
      return { ...state, bySold: action.payload };
    default:
      return state;
  }
}
