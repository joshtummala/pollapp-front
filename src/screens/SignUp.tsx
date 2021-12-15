import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        // <div className="container">
        <div className="row m-0 w-100">
            <div className="col m-5">
                <h1 className="fw-bold">welcome to polly!</h1>
                <h3>have an account, <Link to="/signin">sign in</Link>.</h3>
                <form className="w-75">
                    <div className="my-4">
                        <label htmlFor="inputUsername" className="form-label">username</label>
                        <input type="text" className="form-control" id="inputUsername" />
                        <div></div>
                    </div>
                    <div className="my-4">
                        <label htmlFor="inputEmail" className="form-label">email</label>
                        <input type="email" className="form-control" id="inputEmail" />
                        <div id="emailHelp" className="form-text">tesr</div>
                    </div>
                    <div className="my-4">
                        <label htmlFor="inputPassword" className="form-label">password</label>
                        <input type="password" className="form-control" id="inputPassword" />
                        <div></div>
                    </div>
                    <div className="my-4">
                        <input type="checkbox" className="form-check-input me-2" id="inputAgreePolicy"></input>
                        <label>I agree to our <Link to="/">privacy policy</Link></label>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary rounded-pill">start asking questions</button>
                    </div>
                </form>
            </div>
            <div className="col bg-primary ps-5 d-none d-lg-block">
                <h1 className="px-5 py-2 pt-4 fw-bold display-2 text-light">be curious together.</h1>
                <h1 className="px-5 py-2 fw-bold display-2 text-light">be curious together.</h1>
                <h1 className="px-5 py-2 fw-bold display-2 text-light">be curious together.</h1>
            </div>
        </div>
        // </div>
    );
}

export default SignUp;
