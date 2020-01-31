import { usersCon, deleteCon,editCon } from "../Const/user";
const initialState = {
  pending: false,
  data: [],
  err: false,
  delete: {
    id: null,
    pending: false
  },
  edit:false
};
function userReducer(state = { ...initialState }, { type, payload }) {

  switch (type) {
    case usersCon.request:
      return {
        ...state,
        pending: true,
        edit:false
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
        },
        edit:false
      };
    case usersCon.err:
      return {
        ...state,
        err: true,
        pending: false,
        edit:false
      };
    case deleteCon.request:
      return {
        ...state,
        delete: {
          id: payload,
          pending: true
        },
        edit:false
      };
    case editCon.request:
      return{
        ...state,
        edit:true
      }
    default:
      return {
        ...state
      };
  }
}

export default userReducer;
