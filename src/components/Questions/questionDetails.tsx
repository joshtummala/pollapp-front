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
  }, [])

  const checkUserAnswered = () => user._id && user._id in question.responses;
  const [isAnswered, setIsAnswered] = useState(checkUserAnswered());
  const getPercentages = () => {
    let out = {};
    // @ts-ignore
    question.options.forEach((_, index) => (out[index] = 0));
    for (const user in question.responses) {
      // @ts-ignore
      out[question.responses[user]]++;
    }
    return out;
  };
  const [responsePercentages, setResponsePercentages] = useState(
    getPercentages()
  );
  useEffect(() => {
    setIsAnswered(checkUserAnswered());
    setResponsePercentages(getPercentages());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, question]);
  const onSelect = (event: any) => {
    console.log(event)
    if (event.target.checked) {
      respondToQuestion(question._id, question.options.indexOf(event.target.id)).then(
        () => {
          getQuestion(id).then((question) => {
            setQuestion(question);
          });
        }
      );
    }
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
      <div onChange={onSelect}>
        {question.options.map((option, index) => (
          <QuestionOption
            // @ts-ignore
            percent={responsePercentages[index]}
            option={option}
            isAnswered={isAnswered}
            // @ts-ignore
            isSelected={question.responses[user._id] === index}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionDetails