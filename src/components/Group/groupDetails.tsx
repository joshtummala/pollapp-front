import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getGroup, joinGroup, leaveGroup } from "../../services/groupService";
import { searchQuestions } from "../../services/questionService";
import QuestionList from "../Questions/questionList";

const GroupDetails = () => {
  const user = useSelector((state: any) => state.userReducer);
  const { id } = useParams<{ id?: string }>();
  const [group, setGroup] = useState({
    title: "",
    topic: "",
    members: [],
    _id: "",
  });
  id &&
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
    id &&
      joinGroup(id, user._id).then(() => {
        setIsMember(true);
      });
  };
  const removeGroup = () => {
    id &&
      leaveGroup(id, user._id).then(() => {
        setIsMember(false);
      });
  };
  return (
    <div className="container mt-5">
      <p><Link to="/home" className="link-primary">Home</Link> / Group</p>
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
            <a className="btn btn-outline-primary rounded-pill" href="#">
              ask question
            </a>
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
