import React from "react";

type QuestionItemType = {
  question: string;
  id: string;
};

const QuestionItem = ({ question, id }: QuestionItemType) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4 className="card-title">{question}</h4>
        <a
          href={`/question/${id}`}
          className="btn btn-outline-primary rounded-pill"
        >
          answer me
        </a>
      </div>
    </div>
  );
};

export default QuestionItem;
