import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GroupGrid from "./group-grid";
import UserInfo from "./user-info";
import { searchGroups } from "../../services/groupService";
import Spinner from "../decorative/spinner";

const Explore = () => {
  const state = useSelector((state: any) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true)
  const groups = useSelector((state: any) => state.groupsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    searchGroups().then((groups) => {
      dispatch({ type: "SET_GROUPS", groups: groups });
    }).finally(() => setIsLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="container mt-5">
      <div className="row">
        {state.username && (
          <div className="col-4">
            <UserInfo
              username={state.username}
              selection="groups"
              role={state.role}
            />
          </div>
        )}
        <div className="col-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>{state.username ? "groups" : "explore groups"}</h1>
            {!state.username && (
              <div>
                <Link to="/signup" className="btn btn-outline-primary me-4">
                  Sign Up
                </Link>
                <Link to="/signin" className="btn btn-primary">
                  Sign In
                </Link>
              </div>
            )}
          </div>
          {isLoading ?
            <Spinner /> :
            <GroupGrid groups={groups} />
          }
        </div>
      </div>
    </div>
  );
};

export default Explore;
