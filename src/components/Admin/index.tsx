import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../services/userService";
import UserInfo from "../Explore/user-info";
import UserItem from "./userItem";

const Admin = () => {
  const users = useSelector((state: any) => state.usersReducer);
  const user = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const removeUser = (user: any) => {
    deleteUser(user._id).then(() => {
      dispatch({
        type: "REMOVE_USER",
        user,
      });
    });
  };
  useEffect(() => {
    getUsers().then((users) =>
      dispatch({
        type: "SET_USERS",
        users,
      })
    );
  });
  return (
    <div className="container mt-5">
      <div className="row">
        {user.username && (
          <div className="col-4">
            <UserInfo username={user.username} selection="admin" role={user.role} />
          </div>
        )}
        <div className="col-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>admin</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {users.map((user: any) => {
              return (
                <UserItem
                  username={user.username}
                  email={user.email}
                  deleteCallback={() => removeUser(user)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
