import { usersCon, deleteCon } from "../Const/user";
const initialState = {
  pending: false,
  data: [],
  err: false,
  delete: {
    id: null,
    pending: false
  }
};
function userReducer(state = { ...initialState }, { type, payload }) {
  switch (type) {
    case usersCon.request:
      return {
        ...state,
        pending: true
      };
    case usersCon.receive:
      return {
        ...state,
        pending: false,
        err: false,
        data: [...payload],
        delete: {
          id: null,
          pending: false
        }
      };
    case usersCon.err:
      return {
        ...state,
        err: true,
        pending: false
      };
    case deleteCon.request:
      return {
        ...state,
        delete: {
          id: payload,
          pending: true
        }
      };
    default:
      return {
        ...state
      };
  }
}

export default userReducer;
