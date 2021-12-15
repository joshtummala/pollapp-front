import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GroupGrid from "./group-grid";
import UserInfo from "./user-info";

const Explore = () => {

    const state = useSelector((state: any) => state.userReducer);

    return (
        <div className="container mt-5">
            <div className="row">
                {state.username &&
                    (<div className="col-4">
                        <UserInfo username={state.username} />
                    </div>)
                }
                <div className="col-8">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1>{state.username ? "groups" : "explore groups"}</h1>
                        {!state.username && (<div>
                            <Link to="/signup" className="btn btn-outline-primary me-4">Sign Up</Link>
                            <Link to="/signin" className="btn btn-primary">Sign In</Link>
                        </div>)}
                    </div>
                    <GroupGrid />
                </div>
            </div>

        </div>
    )
}

export default Explore;