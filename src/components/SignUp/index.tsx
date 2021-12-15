import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LandingPageRightColumn from "../../LandingPageRightColumn";
import { signUp } from "../../services/userService";

const SignUp = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let history = useHistory();
  let dispatch = useDispatch();
  const signUpButton = () => {
    signUp({
      username,
      password,
      email,
    })
      .then((user) =>
        dispatch({
          type: "SET_USER",
          user,
        })
      )
      .then(() => {
        setUsername("");
        setPassword("");
        setEmail("");
        history.push("/home");
      });
  };
  return (
    <div className="container-fluid">
      <div className="row row-cols-md-2 row-cols-sm-1">
        <div className="col-6 p-5 mh-100">
          <h1>
            <strong>welcome to pollapp!</strong>
          </h1>
          <h3>
            have an account? <Link to="/signin">sign in</Link>
          </h3>
          <br />
          <br />
          <label htmlFor="signup-username" className="form-label">
            <strong>username</strong>
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="signup-username"
              aria-describedby="basic-addon3"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <label htmlFor="signup-email" className="form-label">
            <strong>email</strong>
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="signup-email"
              aria-describedby="basic-addon3"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <label htmlFor="signup-password" className="form-label">
            <strong>password</strong>
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="signup-password"
              aria-describedby="basic-addon3"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <br />
          <button
            type="button"
            className="btn btn-primary rounded-pill w-100"
            onClick={signUpButton}
          >
            start asking questions
          </button>
          <br />
          <br />
          <p className="text-center">
            <Link to="/privacy" className="text-muted">
              Read our privacy policy
            </Link>
          </p>
        </div>
        <LandingPageRightColumn />
      </div>
    </div>
  );
};

export default SignUp;
