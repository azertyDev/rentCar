import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { deleteUserMidd } from "../../Redux/Middleware/userMidd";
import { modalShow } from "../../Redux/Action/users";
import ModalComponent from "../../Components/Modal/modal";
const TableComponent = props => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id"
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Action",
      dataIndex: "action",
      render: function(text, record, index) {
        return (
          <span>
            <Button
              onClick={() =>
                props.modal({
                  visible: true,
                  text: "Uchirishga aminmisiz",
                  action: "delete",
                  id:parseInt(record.id)
                })
              }
            >
              Delete
            </Button>
            <Button>Edit</Button>
          </span>
        );
      }
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={props.data} size="middle" />
      <ModalComponent />
    </div>
  );
};

const mapStateToProps = ({ users, modals }) => {
  return {
    users,
    modals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete(id) {
      dispatch(deleteUserMidd(id));
    },
    modal({ visible, text, action, id }) {
      dispatch(modalShow({ visible, text, action, id }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
