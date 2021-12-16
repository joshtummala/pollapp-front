import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../services/userService";
import UserInfo from "../Explore/user-info";

const EditProfile = () => {
  const state = useSelector((state: any) => state.userReducer);
  const [username, setUsername] = useState(state.username);
  const [email, setEmail] = useState(state.email);
  const dispatch = useDispatch();
  const save = () => {
    updateUser(state.id, {
      username,
      email,
    }).then(() => {
      getUser(state.id).then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
        setUsername(user.username);
        setEmail(user.email);
      });
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {state.username && (
          <div className="col-4">
            <UserInfo
              username={state.username}
              selection="edit"
              role={state.role}
            />
          </div>
        )}
        <div className="col-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>edit profile</h1>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              username
            </span>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              email
            </span>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={save}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
