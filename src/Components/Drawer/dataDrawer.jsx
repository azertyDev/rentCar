import React from "react";
import { Drawer, Button } from "antd";
import { connect } from "react-redux";
import { showDataFunc, errEditFunc } from "../../Redux/Action/users";
import CarData from "../../Models/car.json";
import func from "../../HocFunctions/core";
import List from "../List/list";
import Transfer from "../List/transfer";
import "../Css/drawer.css";
import CarList from "../List/carList";
class DrawerData extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { id, visible } = this.props.drawData;
    const { data } = this.props.users;
    const user = data.find(item => {
      return item.userid === id;
    });
    if (!user) {
      return null;
    }
    let normalizedData = { ...func.normalizer(user) };
    let normalCarData =func.select(user);
    return (
      <div>
        <Drawer
          title="Show Data"
          placement="right"
          closable={false}
          onClose={() => {
            this.props.draw(null, false);
          }}
          visible={visible}
        >
          <List user={user} />
          <div className="title_self">
            <p>Access</p>
            <p>Noaccess</p>
          </div>
          <Transfer normalizedData={normalizedData} />
          <CarList normalCarData={normalCarData} />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ modals, users }) => {
  const { drawData } = modals;
  return {
    drawData,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    draw(id, visible) {
      dispatch(showDataFunc(id, visible));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerData);
