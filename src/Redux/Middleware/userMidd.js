import {
  reqLoadFunc,
  recLoadFunc,
  errLoadFunc,
  reqDeleteFunc,
  errDeleteFunc,
  reqEditFunc,
  recEditFunc
} from "../Action/users";
import UserData from "../../Models/user.json";
import CarData from "../../Models/car.json";
import store from "../Store/store";
import _ from "lodash";

export function readUsers() {
  return _.get(store.getState(), "users.data");
}
function setDat() {
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

const editUserMidd = ({ id, name, email, access, notAccess, cars }) => {
  return dispatch => {
    let permisions = {
      permision1: false,
      permision2: false,
      permision3: false,
      permision4: false,
      permision5: false,
      permision6: false,
      permision7: true
    };
    dispatch(reqEditFunc());
    let people = readUsers();
    let findUser = [...people].find(item => {
      return item.userid === id;
    });
    let carsId = [];
    for (let i = 0; i < cars.length; i++) {
      for (let j = 0; j < CarData.length; j++) {
        if (cars[i].label.toLowerCase() === CarData[j].name.toLowerCase()) {
          carsId.push({
            carId: CarData[j].carId
          });
        }
      }
    }
    for (let item in permisions) {
      if (access.includes(item)) {
        permisions[item] = true;
      } else if (notAccess.includes(item)) {
        permisions[item] = false;
      }
    }
    console.log(findUser);
    findUser = {
      ...findUser,
      name,
      email,
      permission: {
        ...permisions
      },
      cars: [...carsId]
    };
    console.log(findUser);
    for (let i = 0; i < people.length; i++) {
      if (people[i].userid === id) {
        people[i] = {
          ...findUser
        };
      }
    }
    setTimeout(() => {
      dispatch(recLoadFunc(people));
    }, 500);
  };
};

export { userLoadMidd, deleteUserMidd, editUserMidd };
