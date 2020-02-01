import React from "react";
import { Drawer, Button } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import { addDataFunc } from "../../Redux/Action/users";
import FormaComponent from "../Forma/forma";
import DragAndDrop from "../Transfer/transfer";
import func from "../../HocFunctions/core";
import ReselectComponent from "../Reselect/reselect";
import CarData from "../../Models/car.json";
import { addUserMidd } from "../../Redux/Middleware/userMidd";
import "../Css/drawer.css";

let user = {
  permission: {
    permision1: true,
    permision2: true,
    permision3: true,
    permision4: true,
    permision5: true,
    permision6: true,
    permision7: true
  }
};

class AddDrawerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
      selected: []
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.finalSave = this.finalSave.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (_.get(prevProps.users, "data") !== _.get(this.props.users, "data")) {
      this.props.show(false);
    }
  }

  onClose = () => {
    this.props.show(false);
  };
  handleSelect(selected) {
    this.setState({ selected });
  }

  finalSave() {
    let access = [];
    let notAccess = [];
    let name = document.getElementsByName("name")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let transfer1 = document.getElementById("transfer").childNodes[0];
    let transfer2 = document.getElementById("transfer").childNodes[1];
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
    console.log({
      name,
      email,
      access,
      notAccess,
      cars: [...this.state.selected]
    });
    this.props.addFunc({
      name,
      email,
      access,
      notAccess,
      cars: [...this.state.selected]
    });
  }

  render() {
    const { addDraw } = this.props.modals;
    const { add } = this.props.users;
    let normalizedData = { ...func.normalizer(user) };
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
            selected={this.state.selected}
          />
          <div className="title_self">
            <p>Access</p>
            <p>Noaccess</p>
          </div>
          <DragAndDrop normalizedData={normalizedData} />
          <Button
            className="btn_self"
            onClick={this.finalSave}
            loading={add.pending}
          >
            Save
          </Button>
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
