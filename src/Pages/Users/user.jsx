import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { userLoadMidd } from "../../Redux/Middleware/userMidd";
import Dashboard from "../../Hoc/dashboard";
import TableComponent from "../../Components/Table/table";
import DrawerComponent from '../../Components/Drawer/drawer';
import DataDrawer from '../../Components/Drawer/dataDrawer';
import AddDrawerComponent from '../../Components/AddDrawer/addDrawer';
class UsersComponent extends Component {

  componentDidMount() {
    this.props.fetch();
  }
 
  render() {
    const { pending, data } = this.props.users;

    return (
      <Row>
        {pending ? (
          <h1>Loading...</h1>
        ) : (
          <Col md={24}>
            <TableComponent data={data}/>
            <DrawerComponent/>
            <DataDrawer/>
            <AddDrawerComponent/>
          </Col>
        )}
      </Row>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetch() {
      dispatch(userLoadMidd());
    }
  };
};
const Users = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default Dashboard(Users);
