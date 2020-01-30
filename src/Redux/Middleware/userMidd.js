import {
  reqLoadFunc,
  recLoadFunc,
  errLoadFunc,
  reqDeleteFunc,
  errDeleteFunc
} from "../Action/users";
import UserData from "../../Models/user.json";
import store from "../Store/store";
import _ from "lodash";
export function readUsers() {
  return _.get(store.getState(), "users.data");
}
function setDat() {
  console.log("userdata", UserData);
  localStorage.setItem("users", JSON.stringify(UserData));
}
// read all data

const userLoadMidd = () => {
  return dispatch => {
    dispatch(reqLoadFunc());
    setDat();
    setTimeout(() => {
      dispatch(recLoadFunc(JSON.parse(localStorage.getItem("users"))));
    }, 500);
  };
};

// delete user
const deleteUserMidd = id => {
  return dispatch => {
    dispatch(reqDeleteFunc(id));
    let filter = [...readUsers()].filter(item => {
      return item.userid !== id;
    });
    setTimeout(() => {
      dispatch(recLoadFunc(filter));
    }, 500);
  };
};

export { userLoadMidd, deleteUserMidd };
