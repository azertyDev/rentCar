import {
  usersCon,
  deleteCon,
  modalCon,
  drawCon,
  editCon,
  showDataCon,
  addDrawCon,
  addCon
} from "../Const/user";

// modal visible

export function modalShow({ visible, text, action, id }) {
  return {
    type: modalCon.visible,
    payload: {
      visible,
      text,
      action,
      id
    }
  };
}

// draw visible

export function drawShow(visible, id) {
  return {
    type: drawCon.visible,
    payload: {
      id,
      visible
    }
  };
}

// ! read all users
const reqLoadFunc = () => {
  return {
    type: usersCon.request,
    payload: true
  };
};

const recLoadFunc = data => {
  return {
    type: usersCon.receive,
    payload: [...data]
  };
};

const errLoadFunc = () => {
  return {
    type: usersCon.err,
    paylaod: true
  };
};

//  ! delete user

const reqDeleteFunc = id => {
  return {
    type: deleteCon.request,
    payload: id
  };
};

const errDeleteFunc = () => {
  return {
    type: deleteCon.receive,
    payload: true
  };
};

// ! edit user
const reqEditFunc = () => {
  return {
    type: editCon.request,
    payload: true
  };
};

const recEditFunc = data => {
  return {
    type: editCon.receive,
    payload: data
  };
};

const errEditFunc = () => {
  return {
    type: editCon.err,
    payload: true
  };
};

// show data draw

export function showDataFunc(id, visible) {
  return {
    type: showDataCon.visible,
    payload: {
      id,
      visible
    }
  };
}

// show add draw 

export function addDataFunc(visible){
  return{
    type:addDrawCon.visible,
    payload:visible
  }
}

//  ! add user 

function reqAddUser(){
  return{
    type:addCon.request,
    payload:true
  }
}

function errAddUser(){
  return{
    type:addCon.err,
    payload:true
  }
}

export {
  reqLoadFunc,
  recLoadFunc,
  errLoadFunc,
  reqDeleteFunc,
  errDeleteFunc,
  reqEditFunc,
  recEditFunc,
  errEditFunc,
  reqAddUser,
  errAddUser
};

