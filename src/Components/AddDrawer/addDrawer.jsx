import React from "react";
import { Drawer } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import { addDataFunc } from "../../Redux/Action/users";
import FormaComponent from "../Forma/forma";
import AddDragAndDrop from "../Transfer/addTranfer";
import func from "../../HocFunctions/core";
import ReselectComponent from "../Reselect/reselect";
import CarData from "../../Models/car.json";
import { addUserMidd } from "../../Redux/Middleware/userMidd";
import "../Css/drawer.css";
import "../Transfer/transfer.css";

class AddDrawerComponent extends React.Component {
  static defaultProps = [];
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
      selected: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.finalSave = this.finalSave.bind(this);
    this.normalizer = this.normalizer.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (_.get(prevProps.users, "data") !== _.get(this.props.users, "data")) {
      function pro() {
        return new Promise((resolve, reject) => {
          resolve();
        });
      }
      this.props.show(false);

      let result = pro();
      if (_.get(this.props, "modals.addDraw")) {
        result
          .then(() => document.getElementById("form_el").reset())
          .then(() => (AddDrawerComponent.defaultProps = []));
      }
    }
  }

  onClose = () => {
    this.props.show(false);
  };
  handleSelect(selected) {
    AddDrawerComponent.defaultProps = [
      ...(Array.isArray(selected) ? selected : [])
    ];
  }

  finalSave() {
    let access = [];
    let notAccess = [];
    let name =
      document.getElementsByName("name")[0].value ||
      document.getElementsByName("name")[1].value;
    let email =
      document.getElementsByName("email")[0].value ||
      document.getElementsByName("email")[1].value;
    let transfer = document.getElementById("addtransfer");
    let transfer1 = transfer.childNodes[0];
    let transfer2 = transfer.childNodes[1];
    for (let i = 0; i < transfer1.childNodes.length; i++) {
      let text = transfer1.childNodes[i];
      access.push(text.textContent);
    }
    for (let i = 0; i < transfer2.childNodes.length; i++) {
      let text = transfer2.childNodes[i];
      if (text.textContent) {
        notAccess.push(text.textContent);
      }
    }

    this.props.addFunc({
      name,
      email,
      access,
      notAccess,
      cars: [...AddDrawerComponent.defaultProps]
    });
  }
  normalizer(user) {
    console.log(user);
    let { permission } = user;
    let access = [];
    let notAccess = [];
    let accessId = -1;
    for (let item in permission) {
      accessId++;
      if (permission[item]) {
        access.push({
          id: `item-${accessId}`,
          content: item
        });
      } else {
        notAccess.push({
          id: `item-${accessId}`,
          content: item
        });
      }
    }
    return {
      access,
      notAccess
    };
  }
  render() {
    let user = {
      permission: {
        permision1: true,
        permision2: true,
        permision3: true,
        permision4: true,
        permision5: true
      }
    };
    const { addDraw } = this.props.modals;
    const { add } = this.props.users;
    let normalizedData = { ...this.normalizer(user) };
    let normalCarData = func.normCarData(CarData);

    let selectArray = null;
    return (
      <div>
        <Drawer
          title="Add User"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={addDraw}
        >
          <FormaComponent user={{ name: "", email: "" }} />
          <ReselectComponent
            selectArray={selectArray || []}
            normalCarData={normalCarData}
            handleSelect={this.handleSelect}
          />
          <div className="title_self">
            <p>Access</p>
            <p>Noaccess</p>
          </div>
          <AddDragAndDrop normalizedData={normalizedData} />
          <button
            className="btn_self"
            onClick={this.finalSave}
            loading={add.pending}
          >
            Save
          </button>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ modals, users }) => {
  return {
    modals,
    users
  };
};
const mapDisPatchToProps = dispatch => {
  return {
    show(visible) {
      dispatch(addDataFunc(visible));
    },
    addFunc({ name, email, access, notAccess, cars }) {
      dispatch(addUserMidd({ name, email, access, notAccess, cars }));
    }
  };
};
export default connect(mapStateToProps, mapDisPatchToProps)(AddDrawerComponent);
