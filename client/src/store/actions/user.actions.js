import * as actions from "./index";
import axios from "axios";
import {
  getAuthHeader,
  removeTokenCookie,
  getTokenCookie,
} from "../../utils/tools";
axios.defaults.headers.post["Content-Type"] = "application/json";

// export const userRegister = ({values, password}) => {
export const userRegister = (values) => {
  // read basic redux thunk documentation
  return async (dispatch) => {
    try {
      const user = await axios.post(`/api/auth/register`, {
        email: values.email,
        password: values.password,
      });
      dispatch(
        actions.userAuthenticate({
          data: user.data.user,
          auth: true,
        })
      );
      dispatch(
        actions.successGlobal("Welcome!! Check your mail to verify account.")
      );
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const userSignIn = (values) => {
  // read basic redux thunk documentation
  return async (dispatch) => {
    try {
      const user = await axios.post(`/api/auth/signin`, {
        email: values.email,
        password: values.password,
      });
      dispatch(
        actions.userAuthenticate({
          data: user.data.user,
          auth: true,
        })
      );

      dispatch(actions.successGlobal("Welcome!! "));
    } catch (error) {
      dispatch(actions.errorGlobal(error.response.data.message));
    }
  };
};

export const userIsAuth = () => {
  return async (dispatch) => {
    try {
      if (!getTokenCookie()) {
        throw new Error();
      }
      // console.log("Working");
      const user = await axios.get(`/api/auth/isauth`, getAuthHeader());

      // console.log(user);

      dispatch(
        actions.userAuthenticate({
          data: user.data,
          auth: true,
        })
      );
    } catch (error) {
      dispatch(actions.userAuthenticate({ data: {}, auth: false }));
    }
  };
};

export const userSignOut = () => {
  return async (dispatch) => {
    removeTokenCookie();
    dispatch(actions.userSignOut());
    dispatch(actions.successGlobal("Good bye !!!"));
  };
};
