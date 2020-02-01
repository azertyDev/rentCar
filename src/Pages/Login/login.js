import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
    return (
        <div className="login">

            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-4 offset-4">

                        <div className="card p-4">
                            <form className="was-validated">

                                <h4 className="text-center font-weight-bold mb-4">Sign in</h4>
                                <div className="form-group mb-4">
                                    <label htmlFor="email">Email :</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" required/>
                                    {/*<div className="valid-feedback">Valid.</div>*/}
                                    {/*<div className="invalid-feedback">Please fill out this field.</div>*/}
                                </div>
                                <div className="form-group mb-5">
                                    <label htmlFor="pas">Password</label>
                                    <input type="password" className="form-control" id="pas" placeholder="Your Password" required/>
                                </div>
                                <button type="submit" className="btn btn-primary mb-4 btn-block" >SIGN IN</button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;