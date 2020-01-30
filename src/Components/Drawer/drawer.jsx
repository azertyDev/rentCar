import React from "react";
import { Drawer, Button } from "antd";
import _ from "lodash";
import "../Css/drawer.css";
import CarData from "../../Models/car.json";
import { connect } from "react-redux";
import { drawShow } from "../../Redux/Action/users";
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
    this.normalizer = this.normalizer.bind(this);
    this.select = this.select.bind(this);
    this.normCarData = this.normCarData.bind(this);
    this.finalSave = this.finalSave.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.detectUser = this.detectUser.bind(this);
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
      this.setState({ selected: this.select(user) });
    }
  }
  detectUser() {
    let { draw } = this.props.modals;
    let { data } = this.props.users;
    let user = {};
    if (draw.id) {
      user = data.find(item => {
        return item.userid === draw.id;
      });
    }
    return user;
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
      access.push(transfer1.childNodes[i].textContent);
    }
    for (let i = 0; i < transfer2.childNodes.length; i++) {
      notAccess.push(transfer1.childNodes[i].textContent);
    }
  }

  // normalizer
  normalizer(user) {
    let { permission } = user;
    let access = [];
    let notAccess = [];
    let accessId = -1;
    for (let item in permission) {
      console.log();
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

  // car select data

  select(user) {
    let reselectArray = [];
    if (Object.keys(user).length > 0) {
      for (let i = 0; i < user.cars.length; i++) {
        for (let j = 0; j < CarData.length; j++) {
          if (user.cars[i].carId === CarData[j].carId) {
            reselectArray.push({
              value: CarData[j].name.toLowerCase(),
              label: CarData[j].name
            });
          }
        }
      }
      return reselectArray;
    }
  }
  // norm car data
  normCarData(data) {
    let norma = [];
    for (let i = 0; i < data.length; i++) {
      norma.push({
        value: data[i].name.toLowerCase(),
        label: data[i].name
      });
    }
    console.log(norma);
    return norma;
  }

  //  handle select

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
    let normalizedData = { ...this.normalizer(user) };
    let selectArray = this.select(user);
    let normalCarData = this.normCarData(CarData);
    return (
      <div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={draw.visible}
        >
          <FormaComponent user={user} />
          <DragAndDrop normalizedData={normalizedData} />
          <ReselectComponent
            selectArray={selectArray}
            normalCarData={normalCarData}
            handleSelect={this.handleSelect}
            selected={this.state.selected}
          />
          <Button onClick={this.finalSave}>Save</Button>
        </Drawer>
      </div>
    );
  }
}
const mapStateToProps = ({ users, modals }) => {
  return {
    users,
    modals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    draw(visible) {
      dispatch(drawShow(visible));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);
