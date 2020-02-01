import { modalCon ,drawCon, showDataCon, addDrawCon} from "../Const/user";
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
  },
  drawData:{
    id:null,
    visible:false
  },
  addDraw:false
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
    case showDataCon.visible:
      return{
        ...state,
        drawData:{
          ...payload
        }
      }
    case addDrawCon.visible:
      return{
        ...state,
        addDraw:payload
      }
    default:
      return {
        ...state
      };
  }
}

export default modalReducer;
