import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getGroup, joinGroup, leaveGroup } from "../../services/groupService";
import { searchQuestions } from "../../services/questionService";
import UserInfo from "../Explore/user-info";
import CreateQuestionModal from "../Questions/createQuestionModal";
import QuestionList from "../Questions/questionList";

const GroupDetails = () => {
  const state = useSelector((state: any) => state.userReducer);
  const { id } = useParams<{ id: string }>();
  const [group, setGroup] = useState({
    title: "",
    topic: "",
    members: [],
    _id: "",
  });

  const [questions, setQuestions] = useState([]);
  const [isMember, setIsMember] = useState(
    group.members && state._id in group.members
  );

  const addQuestionReducer = useSelector(
    (state: any) => state.addQuestionReducer
  );

  useEffect(() => {
    getGroup(id).then((group) => {
      setGroup(group);
    });
    searchQuestions("", group._id).then((questions) => setQuestions(questions));
  }, [group._id, id, addQuestionReducer]);

  useEffect(() => {
    setIsMember(group.members && state._id in group.members);
  }, [group, state]);

  const addGroup = () => {
    joinGroup(id, state._id).then(() => {
      setIsMember(true);
    });
  };

  const removeGroup = () => {
    leaveGroup(id, state._id).then(() => {
      setIsMember(false);
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {state.username && (
          <div className="col-4">
            <UserInfo
              username={state.username}
              selection="none"
              role={state.role}
            />
          </div>
        )}
        <div className="col-8">
          <p>
            <Link to="/home" className="link-primary text-decoration-none">
              Home
            </Link>{" "}
            / Group
          </p>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>{group.title}</h1>
            {state.username && (
              <div>
                {isMember ? (
                  <button
                    className="btn btn-outline-danger rounded-pill"
                    onClick={removeGroup}
                  >
                    remove group
                  </button>
                ) : (
                  <button
                    className="btn btn-primary rounded-pill"
                    onClick={addGroup}
                  >
                    add group
                  </button>
                )}
                <button
                  className="btn btn-outline-primary rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#staticCreateQuestion"
                >
                  ask question
                </button>
                <CreateQuestionModal group_id={group._id} />
              </div>
            )}
          </div>
          <h3 className="text-primary">{group.topic}</h3>
          <br />
          <QuestionList questions={questions} />
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
