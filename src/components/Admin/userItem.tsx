import React from "react";

type UserItemType = {
  username: string;
  email: string;
  deleteCallback: () => any;
};

const UserItem = ({ username, email, deleteCallback }: UserItemType) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{username}</h4>
          <h6 className="card-text">{email}</h6>
          <button
            className="btn btn-outline-danger rounded-pill"
            onClick={deleteCallback}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
