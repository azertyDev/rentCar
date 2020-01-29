import React from "react";
import { Modal, Button } from "antd";
import { connect } from "react-redux";
import _ from "lodash";
import { modalShow } from "../../Redux/Action/users";
import { deleteUserMidd } from "../../Redux/Middleware/userMidd";
import "../Css/modal.css";

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCom = this.deleteCom.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (
      _.get(prevProps.users, "data").length !==
      _.get(this.props.users, "data").length
    ) {
      this.props.hide(false);
    }
  }
  handleCancel = e => {
    this.props.hide(false);
  };
  deleteCom(id) {
    this.props.delete(id);
  }
  render() {
    const { visible, text, action, id } = _.get(this.props.modals, "modal");
    let user = _.get(this.props, "users.data").filter(item => {
      return item.id === id;
    });
    let loadingButton = _.get(this.props.users, "delete.pending");
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={visible}
          onCancel={this.handleCancel}
        >
          {user.length > 0 ? (
            <div>
              {text}
              <p>{user[0].name}</p>
              <Button
                onClick={() => this.deleteCom(parseInt(user[0].id))}
                loading={loadingButton}
              >
                delete
              </Button>
            </div>
          ) : null}
        </Modal>
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
    hide({ visible, text, action }) {
      dispatch(modalShow({ visible, text, action }));
    },
    delete(id) {
      dispatch(deleteUserMidd(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
