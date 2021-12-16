import React from "react";
import { useSelector } from "react-redux";
import UserInfo from "../Explore/user-info";


const Search = () => {

    const state = useSelector((state: any) => state.userReducer);

    return (
        <div className="container mt-5">
            <div className="row">
                {state.username &&
                    (<div className="col-4">
                        <UserInfo username={state.username} selection="search" />
                    </div>)
                }
                <div className="col-8">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h1>search</h1>
                    </div>
                    {/* TODO ADD COMPONENTS */}
                </div>
            </div>

        </div>
    )
}

export default Search;
