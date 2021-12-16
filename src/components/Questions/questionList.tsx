import React from "react";
import QuestionItem from "./questionItem";

type QuestionListType = {
  questions: { question: string, _id: string }[]
}
// TODO add a param for the array of questions
const QuestionList = ({ questions }: QuestionListType) => {
  return (
    <div className="row row-cols-1">
      {questions.map((question, index) => <QuestionItem key={index} question={question.question} id={question._id} />)}
    </div>
  )
}

export default QuestionList;