import { loginCon } from "../Const/login";

function loginReqFunc() {
  return {
    type: loginCon.request,
    payload: true
  };
}

function loginRecFunc({email, password}) {
  return {
    type: loginCon.receive,
    payload: {email, password}
  };
}

function loginErrFunc() {
  return {
    type: loginCon.err,
    payload: true
  };
}

export { loginReqFunc, loginRecFunc, loginErrFunc };
