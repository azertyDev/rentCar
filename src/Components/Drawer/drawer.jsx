import React from "react";
import { Drawer, Button } from "antd";
import _ from "lodash";
import "../Css/drawer.css";
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
      data: []
    };
    this.normalizer = this.normalizer.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (_.get(prevProps.users, "data") !== _.get(this.props.users, "data")) {
      this.setState({
        data: [..._.get(this.props.users, "data")]
      });
    }
  }

  onClose = () => {
    this.props.draw(false);
  };

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
    console.log(normalizedData);
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
          <ReselectComponent />
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
