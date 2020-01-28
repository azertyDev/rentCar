import React, { Component } from "react";
import UsersData from "../../Models/user.json";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [...UsersData]
    };
    this.delete = this.delete.bind(this);
  }
  delete(id) {
    let users = this.state.users.filter(item => {
      return item.id !== Number(id);
    });
    this.setState({
      users: [...users]
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Permision</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((item, id) => (
              <tr>
                <th scope="row">{id+1}</th>
                <td>{item.name}</td>
                <td>permision</td>
                <td><button type="button" className="btn" onClick={()=>this.delete(id+1)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
