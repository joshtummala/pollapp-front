import React, { useState } from "react";
import { useSelector } from "react-redux";
import { searchGroups } from "../../services/groupService";
import { searchQuestions } from "../../services/questionService";
import GroupGrid from "../Explore/group-grid";
import UserInfo from "../Explore/user-info";
import QuestionList from "../Questions/questionList";


const Search = () => {

    const state = useSelector((state: any) => state.userReducer);
    const [filter, setFilter] = useState("group");
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResults([])
        setFilter(e.target.value)
    }

    const searchQuery = () => {

        switch (filter) {
            case "group":
                searchGroups(searchText)
                    .then((queryResults) =>
                        setResults(queryResults)
                    );
                break;

            case "question":
                searchQuestions(searchText)
                    .then((queryResults) =>
                        setResults(queryResults)
                    );
                break;
            default:
                break;
        }

    };


    return (
        <div className="container mt-5">
            <div className="row">
                {state.username &&
                    (<div className="col-4">
                        <UserInfo username={state.username} selection="search" role={state.role} />
                    </div>)
                }
                <div className="col-8">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <form className="w-75">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="search group or question"
                                    aria-label="Search Group or Question" aria-describedby="button-addon2"
                                    value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                                <button className="btn btn-outline-secondary text-primary fw-bold" type="button" id="button-addon2" onClick={searchQuery}>search</button>
                            </div>
                            <div className="d-flex w-50 justify-content-between">
                                <h6 className="fw-bold">filter</h6>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="filteRadios"
                                        id="filteRadiosGroup" value="group" checked={filter === "group"} onChange={radioHandler} />
                                    <label className="form-check-label" htmlFor="filteRadiosGroup">
                                        group
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="filteRadios"
                                        id="filteRadiosQuestion" value="question" checked={filter === "question"} onChange={radioHandler} />
                                    <label className="form-check-label" htmlFor="filteRadiosQuestion">
                                        question
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    {
                        results.length !== 0 && searchText ? (<h3>{`${results.length} results`}</h3>) : (<h3>ready? start a search</h3>)
                    }
                    {results.length !== 0 && filter === "group" && <GroupGrid />}
                    {results.length !== 0 && filter === "question" && <QuestionList />}

                </div>
            </div>

        </div>
    )
}

export default Search;
