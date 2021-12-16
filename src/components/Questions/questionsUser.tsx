import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchQuestions } from "../../services/questionService";
import Spinner from "../decorative/spinner";
import UserInfo from "../Explore/user-info";
import QuestionList from "../Questions/questionList";

const QuestionsUser = () => {
  const state = useSelector((state: any) => state.userReducer);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    searchQuestions().then((questions) => setQuestions(questions))
      .finally(() => setIsLoading(false));
  }, [])

  return (
    <div className="container mt-5">
      <div className="row">
        {state.username && (
          <div className="col-4">
            <UserInfo
              username={state.username}
              selection="questions"
              role={state.role}
            />
          </div>
        )}
        <div className="col-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>questions</h1>
          </div>
          {isLoading ? <Spinner /> : <QuestionList questions={questions} />}
        </div>
      </div>
    </div>
  );
};

export default QuestionsUser;
