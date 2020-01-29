import React, { useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginMidd } from "../../Redux/Middleware/loginMidd";
function Login(props) {
  const [login, setLogin] = useState({ email: "", password: "" });
  const onChangeLogin = e => {
    const { name, value } = e.target;
    setLogin(prevState => {
      return { ...prevState, [name]: value };
    });
    console.log(login);
  };

  const loginFunc = e => {
    e.preventDefault();
    props.login({ ...login });
  };
  let { pending, user, err } = props.logins;
  if (Object.keys(user).length > 0) {
    if (user.email === "car@gmail.com" && user.password === "car00") {
      return <Redirect to="/users" />;
    }
  }
  return (
    <div
      className="login"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className="col-md-4">
            <div className="card p-4">
              <form className="was-validated" onSubmit={loginFunc}>
                <h4 className="text-center font-weight-bold mb-4">Sign in</h4>
                <div className="form-group mb-4">
                  <label htmlFor="email">Email :</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                    name="email"
                    onChange={onChangeLogin}
                  />
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="pas">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pas"
                    placeholder="Your Password"
                    required
                    name="password"
                    onChange={onChangeLogin}
                  />
                </div>
                {pending ? (
                  <Button loading />
                ) : (
                  <button
                    type="submit"
                    className="btn btn-primary mb-4 btn-block"
                  >
                    SIGN IN
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ logins }) => {
  return {
    logins
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login({ email, password }) {
      dispatch(loginMidd({ email, password }));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
