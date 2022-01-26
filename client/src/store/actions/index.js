// import {} from "../types";

// import { MY_DOG } from "../types";

// export const myDog = () => {
//   const dogVars = {
//     barks: "yes",
//   };
//   return {
//     type: MY_DOG,
//     payload: dogVars,
//   };
// };
import { GET_PROD_BY_SOLD } from "store/types";
export const productsBySold = (data) => ({
  type: GET_PROD_BY_SOLD,
  payload: data,
});
