import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getGroup, joinGroup, leaveGroup } from "../../services/groupService";
import { searchQuestions } from "../../services/questionService";
import CreateQuestionModal from "../Questions/createQuestionModal";
import QuestionList from "../Questions/questionList";

const GroupDetails = () => {
  const user = useSelector((state: any) => state.userReducer);
  const { id } = useParams<{ id: string }>();
  const [group, setGroup] = useState({
    title: "",
    topic: "",
    members: [],
    _id: "",
  });
  getGroup(id).then((group) => {
    setGroup(group);
  });
  const [questions, setQuestions] = useState([]);
  const [isMember, setIsMember] = useState(
    group.members && user._id in group.members
  );
  useEffect(() => {
    searchQuestions("", group._id).then((questions) => setQuestions(questions));
    setIsMember(group.members && user._id in group.members);
  }, [group, user]);
  const addGroup = () => {
    joinGroup(id, user._id).then(() => {
      setIsMember(true);
    });
  };
  const removeGroup = () => {
    leaveGroup(id, user._id).then(() => {
      setIsMember(false);
    });
  };
  return (
    <div className="container mt-5">
      <p>
        <Link to="/home" className="link-primary text-decoration-none">
          Home
        </Link>{" "}
        / Group
      </p>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>{group.title}</h1>
        {user.username && (
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
            <button className="btn btn-outline-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#staticCreateQuestion">
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
  );
};

export default GroupDetails;
