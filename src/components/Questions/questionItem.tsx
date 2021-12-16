import React from "react";

type QuestionItemType = {
    question: string,
}

const QuestionItem = ({ question }: QuestionItemType) => {
    return (

        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title">{question}</h4>
                <a href="#" className="btn btn-outline-primary rounded-pill">answer me</a>
            </div>
        </div>

    )
}

export default QuestionItem;