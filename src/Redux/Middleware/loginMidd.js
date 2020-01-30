import { loginErrFunc, loginReqFunc, loginRecFunc } from "../Action/login";

export const loginMidd = ({ email, password }) => {
  return dispatch => {
    dispatch(loginReqFunc());
    setTimeout(() => {
      dispatch(loginRecFunc({ email, password }));
    }, 500);
  };
};
