import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchGroups } from "../../services/groupService";
import { searchQuestions } from "../../services/questionService";
import Spinner from "../decorative/spinner";
import GroupGrid from "../Explore/group-grid";
import UserInfo from "../Explore/user-info";
import QuestionList from "../Questions/questionList";


const Search = () => {

    const state = useSelector((state: any) => state.userReducer);
    const [filter, setFilter] = useState("group");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchTopic, setSearchTopic] = useState("");
    const [searchGroup, setSearchGroup] = useState("");
    const [searchOwner, setSearchOwner] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }

    useEffect(() => {
        setResults([])
    }, [filter])

    const searchQuery = () => {
        setIsLoading(true);
        switch (filter) {
            case "group":
                searchGroups(searchTitle, searchTopic)
                    .then((queryResults) => {
                        console.log("GROUP SEARCH", queryResults)
                        setResults(queryResults)
                    }
                    ).finally(() => setIsLoading(false));
                break;

            case "question":
                searchQuestions(searchTitle, searchGroup, searchOwner)
                    .then((queryResults) => {
                        console.log("QUESTION SEARCH", queryResults)
                        setResults(queryResults)
                    }
                    ).finally(() => setIsLoading(false));
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
                            <div className="d-flex w-50 justify-content-between mb-3">
                                <h6 className="fw-bold">filter</h6>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="filterRadios"
                                        id="filteRadiosGroup" value="group" checked={filter === "group"} onChange={radioHandler} />
                                    <label className="form-check-label" htmlFor="filteRadiosGroup">
                                        group
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="filterRadios"
                                        id="filteRadiosQuestion" value="question" checked={filter === "question"} onChange={radioHandler} />
                                    <label className="form-check-label" htmlFor="filteRadiosQuestion">
                                        question
                                    </label>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="searchTitle">title</span>
                                <input type="text" className="form-control" placeholder="What is life?" aria-label="Title" aria-describedby="search-title"
                                    value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
                            </div>

                            {filter === "group" && <div className="input-group mb-3">
                                <span className="input-group-text" id="searchTopic">topic</span>
                                <input type="text" className="form-control" placeholder="Life" aria-label="Topic" aria-describedby="search-topic"
                                    value={searchTopic} onChange={(e) => setSearchTopic(e.target.value)} />
                            </div>}

                            {filter === "question" &&
                                <>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="searchOwner">owner</span>
                                        <input type="text" className="form-control" placeholder="Jose" aria-label="Owner" aria-describedby="search-owner"
                                            value={searchOwner} onChange={(e) => setSearchOwner(e.target.value)} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="searchGroup">group</span>
                                        <input type="text" className="form-control" placeholder="Group 1" aria-label="Group" aria-describedby="search-group"
                                            value={searchGroup} onChange={(e) => setSearchGroup(e.target.value)} />
                                    </div>
                                </>
                            }

                            <button className="btn btn-primary fw-bold" type="button" id="button-addon2" onClick={searchQuery}>search</button>
                        </form>
                    </div>

                    {results.length !== 0 ? (<h3>{`${results.length} results`}</h3>) : (<h3>ready? start a search</h3>)}
                    {isLoading && <Spinner />}
                    {results.length !== 0 && filter === "group" && <GroupGrid groups={results} />}
                    {results.length !== 0 && filter === "question" && <QuestionList questions={results} />}

                </div>
            </div>

        </div>
    )
}

export default Search;
