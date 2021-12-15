import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreateGroupModal from "../Group/createGroupModal";

type UserInfoType = {
    username: string
}

const UserInfo = ({ username }: UserInfoType) => {

    return (
        <div className="card bg-light">
            <div className="m-3 bg-primary d-flex justify-content-center align-items-center rounded-circle text-light font-monospace display-4 fw-bold" style={{ height: "100px", width: "100px" }}>
                {username.substring(0, 2).toUpperCase()}
            </div>
            <h2 className="m-3 mb-4">{username}</h2>
            <div className="list-group list-group-flush bg-light">
                <Link to="/" className="list-group-item list-group-item-action fw-bold active" aria-current="true">
                    groups
                </Link>
                <Link to="/questions" className="list-group-item list-group-item-action fw-bold">questions</Link>
                <Link to="/search" className="list-group-item list-group-item-action fw-bold">search</Link>
                <Link to="#" className="list-group-item list-group-item-action fw-bold">edit profile</Link>
            </div>
            <button className="btn btn-info w-75 m-3 fw-bold" data-bs-toggle="modal" data-bs-target="#staticBackdrop">create group</button>
            <CreateGroupModal />

        </div>
    )
}

export default UserInfo;