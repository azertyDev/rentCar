import React, { Component } from "react";
import Dashboard from "../../Hoc/dashboard";
import { connect } from "react-redux";
import { readAdminCarMidd } from "../../Redux/Middleware/car";
class AdminCarsCom extends Component {
  componentDidMount() {
    this.props.fetch();
  }
  render() {
      const {pending, data}= this.props.cars;
      console.log('>>>>>>>>>>>>', data)
    return(
        <div>
            {
                pending ?<h1>Loading .... </h1>: <h1>data bor</h1>
            }
        </div>
    );
  }
}

const mapStateToProps = ({ adminCars }) => {
  return {
    cars: adminCars
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetch() {
      dispatch(readAdminCarMidd());
    }
  };
};
const AdminCarsComponent=connect(mapStateToProps, mapDispatchToProps)(AdminCarsCom)
export default  Dashboard(AdminCarsComponent);
