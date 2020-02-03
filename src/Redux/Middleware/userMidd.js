import {
  reqLoadFunc,
  recLoadFunc,
  reqDeleteFunc,
  reqEditFunc,
  reqAddUser
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

// normalizer carlist
function normalizerCarData(cars) {
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
  return carsId;
}

function normalizerPermision({ access, notAccess }) {
  let permisions = {
    permision1: false,
    permision2: false,
    permision3: false,
    permision4: false,
    permision5: false
  };
  for (let item in permisions) {
    if (access.includes(item)) {
      permisions[item] = true;
    } else if (notAccess.includes(item)) {
      permisions[item] = false;
    }
  }
  return permisions;
}

// ! read all users

const userLoadMidd = () => {
  return dispatch => {
    dispatch(reqLoadFunc());
    setTimeout(() => {
      dispatch(recLoadFunc(UserData));
    }, 500);
  };
};

// ! delete user
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

//! edit user
const editUserMidd = ({ id, name, email, access, notAccess, cars }) => {
  return async dispatch => {
    dispatch(reqEditFunc());
    let people = readUsers();
    let findUser = await [...people].find(item => {
      return item.userid === id;
    });
    let carsId = await [...normalizerCarData(cars)];
    let permisions = { ...normalizerPermision({ access, notAccess }) };
    console.log(name);
    findUser = {
      ...findUser,
      name,
      email,
      permission: {
        ...permisions
      },
      cars: [...carsId]
    };
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

// ! add user

const addUserMidd = ({ name, email, access, notAccess, cars }) => {
  return dispatch => {
    dispatch(reqAddUser());
    let people = [...readUsers()];
    const len = people.length;
    let carsId = [...normalizerCarData(cars)];
    let permisions = { ...normalizerPermision({ access, notAccess }) };
    let user = {
      userid: len + 1,
      name,
      email,
      permission: {
        ...permisions
      },
      cars: [...carsId]
    };
    people.push(user);
    setTimeout(() => {
      dispatch(recLoadFunc(people));
    }, 500);
  };
};
export { userLoadMidd, deleteUserMidd, editUserMidd, addUserMidd };
