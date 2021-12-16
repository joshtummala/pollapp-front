import React, { useState } from "react";
import { createGroup } from "../../services/groupService";
import { createQuestion } from "../../services/questionService";

type CreateQuestionModalType = {
    group_id: string;
}

const CreateQuestionModal = ({ group_id }: CreateQuestionModalType) => {

    const [question, setQuestion] = useState("")
    const [options, setOptions] = useState<Array<string>>([])
    const [optionsOne, setOptionsOne] = useState("")
    const [optionsTwo, setOptionsTwo] = useState("")
    const [optionsThree, setOptionsThree] = useState("")
    const [optionsFour, setOptionsFour] = useState("")


    const onChangeHandler = () => {
        options.push(optionsOne, optionsTwo, optionsThree, optionsFour)
        options.filter(String)
        setOptions(options)

        createQuestion({ group_id: group_id, question: question, options: options }).then((value) => {
            setQuestion("")
            setOptions([])
            console.log(value)
            // TODO: handle the error?? + not worikng
        })
    }
    return (
        <div className="modal fade" id="staticCreateQuestion" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticCreateQuestionLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">ceate question</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="w-75">
                            <div className="mb-4">
                                <label htmlFor="inputTitle" className="form-label">question</label>
                                <textarea style={{ height: "100px" }} className="form-control" id="inputTitle" onChange={(e) => setQuestion(e.target.value)} value={question} />
                            </div>
                            <div className="my-4">
                                <label htmlFor="inputTopic" className="form-label">options</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="">{">"}</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="option 1"
                                        onChange={(e) => setOptionsOne(e.target.value)} value={optionsOne} />

                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="">{">"}</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="option 2"
                                        onChange={(e) => setOptionsTwo(e.target.value)} value={optionsTwo} />
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="">{">"}</span>

                                    </div>
                                    <input type="text" className="form-control" placeholder="option 3"
                                        onChange={(e) => setOptionsThree(e.target.value)} value={optionsThree} />

                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="">{">"}</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="option 4"
                                        onChange={(e) => setOptionsFour(e.target.value)} value={optionsFour} />

                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onChangeHandler}>let's ask</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateQuestionModal;