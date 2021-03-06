import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../services/userService";
import CreateGroupModal from "../Group/createGroupModal";

type UserInfoType = {
  username: string;
  selection: "groups" | "questions" | "search" | "edit" | "admin" | "none";
  role: string;
};

const UserInfo = ({ username, selection, role }: UserInfoType) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    logout().then(() => {
      dispatch({
        type: "CLEAR_USER",
      });
      history.push("/");
    });
  };

  return (
    <div className="card bg-light">
      <div
        className="m-3 bg-primary d-flex justify-content-center align-items-center rounded-circle text-light font-monospace display-4 fw-bold"
        style={{ height: "100px", width: "100px" }}
      >
        {username.substring(0, 2).toUpperCase()}
      </div>
      <h2 className="m-3 mb-4">{username}</h2>
      <div className="list-group list-group-flush bg-light">
        <Link
          to="/home"
          className={`list-group-item list-group-item-action fw-bold ${
            selection === "groups" ? "active" : ""
          }`}
          aria-current="true"
        >
          groups
        </Link>
        <Link
          to="/questions"
          className={`list-group-item list-group-item-action fw-bold ${
            selection === "questions" ? "active" : ""
          }`}
        >
          questions
        </Link>
        <Link
          to="/search"
          className={`list-group-item list-group-item-action fw-bold ${
            selection === "search" ? "active" : ""
          }`}
        >
          search
        </Link>
        <Link
          to="/editprofile"
          className={`list-group-item list-group-item-action fw-bold ${
            selection === "edit" ? "active" : ""
          }`}
        >
          edit profile
        </Link>
        {role === "ADMIN" && (
          <Link
            to="/admin"
            className={`list-group-item list-group-item-action fw-bold ${
              selection === "admin" ? "active" : ""
            }`}
          >
            admin
          </Link>
        )}
      </div>
      <button
        className="btn btn-info w-75 m-3 fw-bold"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        create group
      </button>
      <button
        className="btn btn-danger w-75 m-3 fw-bold"
        onClick={logoutHandler}
      >
        logout
      </button>
      <CreateGroupModal />
    </div>
  );
};

export default UserInfo;
