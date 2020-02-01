import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { deleteUserMidd} from "../../Redux/Middleware/userMidd";
import { modalShow, drawShow, showDataFunc, addDataFunc } from "../../Redux/Action/users";
import ModalComponent from "../../Components/Modal/modal";
const TableComponent = props => {
  const columns = [
    {
      title: "Userid",
      dataIndex: "userid"
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
            {localStorage.getItem("email")!=='admin@gmail.com' ? null : (
              <Button
                onClick={e => {
                  props.modal({
                    visible: true,
                    text: "Ushbu foydalanuvchini uchirishga aminmisiz: ",
                    action: "delete",
                    id: parseInt(record.userid)
                  });
                  e.stopPropagation();
                }}
              >
                Delete
              </Button>
            )}
            <Button
              onClick={e => {
                props.draw(true, record.userid);
                e.stopPropagation();
              }}
            >
              Edit
            </Button>
          </span>
        );
      }
    }
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.data}
        size="middle"
        onRow={(record, rowIndex) => {
          return {
            onClick: e => {
              props.drawData(record.userid, true);
            }
          };
        }}
      />
      <Button onClick={()=>{props.show(true)}}>Add User</Button>
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
    },
    draw(visible, id) {
      dispatch(drawShow(visible, id));
    },
    drawData(id, visible) {
      dispatch(showDataFunc(id, visible));
    },
    show(visible){
    dispatch(addDataFunc(visible))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
