import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
const TableComponent = props => {
  const columns = [
    {
      title: "CarId",
      dataIndex: "carId"
    },
    {
      title: "Model",
      dataIndex: "model"
    },
    {
      title: "Name",
      dataIndex: "name"
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.data}
        size="middle"
      />
    </div>
  );
};

const mapStateToProps = ({ cars }) => {
  return {
    cars
  };
};


export default TableComponent;
