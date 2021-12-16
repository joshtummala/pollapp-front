import React from "react";
import QuestionItem from "./questionItem";

type QuestionListType = {

}
// TODO add a param for the array of questions
const QuestionList = ({ }: QuestionListType) => {
    return (
        <div className="row row-cols-1">
            <QuestionItem question="text" />
            <QuestionItem question="text" />
            <QuestionItem question="text" />
            <QuestionItem question="text" />
        </div>
    )
}

export default QuestionList;