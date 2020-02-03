import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import {deleteAdminCar} from '../../Redux/Middleware/adminCars';
const TableComponent = props => {
  const columns = [
    {
      title: "CarId",
      dataIndex: "carId",
      width:150
    },
    {
      title: "Model",
      dataIndex: "model",
      width:150
    },
    {
      title: "Name",
      dataIndex: "name",
      width:150
    },
    {
      title:"Action",
      dataIndex:"action",
      render:function(text, record, index){
        return(
          <span>
              <Button onClick={()=>props.delete(parseInt(record.carId))} loading={props.id === record.carId && props.pending? true:false}>Delete</Button>
          </span>
        )
      },
      width:150
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

const mapStateToProps = ({ adminCars }) => {
  const {deleteCar} =adminCars;
  const {id, pending} =deleteCar
  return {
     id,
    pending
  };
};

const mapDispatchToProps=(dispatch)=>{
  return{
    delete(id){
      dispatch(deleteAdminCar(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
