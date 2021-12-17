import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getQuestion, respondToQuestion } from "../../services/questionService";
import QuestionOption from "./questionOption";

const QuestionDetails = () => {
  const user = useSelector((state: any) => state.userReducer);
  const { id } = useParams<{ id: string }>();
  const [question, setQuestion] = useState({
    group_id: "",
    question: "",
    responses: {},
    options: [""],
    _id: "",
  });

  useEffect(() => {
    getQuestion(id).then((question) => {
      setQuestion(question);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getPercentages = () => {
    let out = {};
    let count = 0;
    // @ts-ignore
    question.options.forEach((_, index) => (out[index] = 0));
    for (const user in question.responses) {
      // @ts-ignore
      out[question.responses[user]]++;
      count++;
    }
    for (const value in out) {
      // @ts-ignore
      out[value] = Math.round((out[value] / count) * 100);
    }
    return out;
  };
  const [responsePercentages, setResponsePercentages] = useState(
    getPercentages()
  );
  const [selectedOption, setSelectedOption] = useState(-1);
  const [isAnswered, setIsAnswered] = useState(selectedOption !== -1);
  useEffect(() => {
    setResponsePercentages(getPercentages());
    // @ts-ignore
    setSelectedOption(question.responses[user._id]);
    setIsAnswered(selectedOption !== -1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, question]);
  const submit = () => {
    respondToQuestion(question._id, selectedOption).then(() => {
      getQuestion(id).then((question) => {
        setQuestion(question);
        setIsAnswered(true);
      });
    });
  };
  return (
    <div className="container mt-5">
      <p>
        <Link to="/home" className="link-primary text-decoration-none">
          Home
        </Link>{" "}
        /{" "}
        <Link
          to={`/group/${question.group_id}`}
          className="link-primary text-decoration-none"
        >
          Group
        </Link>{" "}
        / Question
      </p>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>{question.question}</h1>
      </div>
      <div>
        {question.options.map((option, index) => (
          <QuestionOption
            // @ts-ignore
            percent={responsePercentages[index]}
            option={option}
            isAnswered={isAnswered}
            // @ts-ignore
            isSelected={selectedOption === index}
            onChange={(event) => {
              if (event.target.checked) setSelectedOption(index);
            }}
          />
        ))}
        <button className="btn btn-primary" onClick={submit}>
          {" "}
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default QuestionDetails;
