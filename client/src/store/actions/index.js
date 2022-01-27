import { GET_PROD_BY_SOLD, GET_PROD_BY_DATE } from "store/types";

export const productsBySold = (data) => ({
  type: GET_PROD_BY_SOLD,
  payload: data,
});

export const productsByDate = (data) => ({
  type: GET_PROD_BY_DATE,
  payload: data,
});
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
