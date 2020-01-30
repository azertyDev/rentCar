import { modalCon } from "../Const/user";
import { drawCon } from "../Const/user";
const initialState = {
  modal: {
    visible: false,
    text: "",
    action: "",
    id: null
  },
  draw: {
    id: null,
    visible: false
  }
};

function modalReducer(state = { ...initialState }, { type, payload }) {
  switch (type) {
    case modalCon.visible:
      return {
        ...state,
        modal: { ...payload }
      };
    case drawCon.visible:
      return {
        ...state,
        draw: {
          ...payload
        }
      };
    default:
      return {
        ...state
      };
  }
}

export default modalReducer;
