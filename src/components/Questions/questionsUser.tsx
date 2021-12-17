import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchQuestions } from "../../services/questionService";
import Spinner from "../decorative/spinner";
import UserInfo from "../Explore/user-info";
import QuestionList from "../Questions/questionList";

const QuestionsUser = () => {
  const state = useSelector((state: any) => state.userReducer);
  const [isLoading, setIsLoading] = useState(true);
  const questions = useSelector((state: any) => state.questionsReducer);
  const addQuestion = useSelector((state: any) => state.addQuestionReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    searchQuestions()
      .then((questions) => {
        dispatch({ type: "SET_QUESTIONS", questions: questions });
      })
      .finally(() => setIsLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addQuestion]);

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
