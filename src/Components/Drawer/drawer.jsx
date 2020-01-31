import React from "react";
import { Drawer, Button } from "antd";
import _ from "lodash";
import "../Css/drawer.css";
import CarData from "../../Models/car.json";
import { connect } from "react-redux";
import func from '../../HocFunctions/core';
import { drawShow } from "../../Redux/Action/users";
import { editUserMidd } from "../../Redux/Middleware/userMidd";
import FormaComponent from "../../Components/Forma/forma";
import DragAndDrop from "../../Components/Transfer/transfer";
import ReselectComponent from "../../Components/Reselect/reselect";
class DrawerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: [],
      selected: []
    };
    this.finalSave = this.finalSave.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (_.get(prevProps.modals, "draw") !== _.get(this.props.modals, "draw")) {
      let { draw } = this.props.modals;
      let { data } = this.props.users;
      let user = {};
      if (draw.id) {
        user = data.find(item => {
          return item.userid === draw.id;
        });
      }
      this.setState({ selected: func.select(user) });
    } else if (
      _.get(prevProps.users, "data") !== _.get(this.props.users, "data")
    ) {
      this.props.draw(false);
    }
  }

  onClose = () => {
    this.props.draw(false);
  };

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
    let { draw } = this.props.modals;
    this.props.edit({
      id: draw.id,
      name,
      email,
      access,
      notAccess,
      cars: [...this.state.selected]
    });
  }

  handleSelect(selected) {
    this.setState({ selected });
    console.log(this.state.selected);
  }

  render() {
    let { draw } = this.props.modals;
    let { data } = this.props.users;
    let user = {};
    if (draw.id) {
      user = data.find(item => {
        return item.userid === draw.id;
      });
    }
    let normalizedData = { ...func.normalizer(user)};
    let selectArray =func.select(user);
    let normalCarData =func.normCarData(CarData);
    return (
      <div>
        <Drawer
          title="Edit"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={draw.visible}
        >
          <FormaComponent user={user} />
          <div className="title_self"><p>Access</p><p>Noaccess</p></div>
          <DragAndDrop normalizedData={normalizedData} />
          <ReselectComponent
            selectArray={selectArray}
            normalCarData={normalCarData}
            handleSelect={this.handleSelect}
            selected={this.state.selected}
          />
          <Button
            onClick={this.finalSave}
            className="btn_self"
            loading={this.props.users.edit}
          >
            Save
          </Button>
        </Drawer>
      </div>
    );
  }
}
const mapStateToProps = ({ users, modals }) => {
  return {
    users,
    modals,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    draw(visible) {
      dispatch(drawShow(visible));
    },
    edit({ id, name, email, access, notAccess, cars }) {
      dispatch(editUserMidd({ id, name, email, access, notAccess, cars }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);
