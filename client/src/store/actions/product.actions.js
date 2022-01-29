import * as actions from "./index";
import axios from "axios";
// import { GET_PROD_BY_SOLD } from "store/types";

export const productsBySort = ({ limit, sortBy, order, where }) => {
  return async (dispatch) => {
    try {
      const products = await axios.get(`/api/products/all`, {
        // limit: 2,
        // sortBy: "price",
        // order: "asc",
        params: {
          limit,
          sortBy,
          order,
        },
      });

      // return {
      //   type: GET_PROD_BY_SOLD,
      //   payload: products.data,
      // };
      switch (where) {
        case "bySold":
          dispatch(actions.productsBySold(products.data));
          break;
        case "byDate":
          dispatch(actions.productsByDate(products.data));
          break;
        default:
          return false;
      }

      // console.log(products);
    } catch (error) {
      console.log(error);
      // dispatch(actions.errorGlobal("Sorry something happened, try again"));
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};
