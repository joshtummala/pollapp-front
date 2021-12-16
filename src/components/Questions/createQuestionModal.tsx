import React, { useState } from "react";
import { createGroup } from "../../services/groupService";
import { createQuestion } from "../../services/questionService";

type CreateQuestionModalType = {
    group_id: string;
}

const CreateQuestionModal = ({ group_id }: CreateQuestionModalType) => {

    const [question, setQuestion] = useState("")
    const [options, setOptions] = useState([])


    const onChangeHandler = () => {
        createQuestion({ group_id: group_id, question: question, options: options }).then((value) => {
            setQuestion("")
            setOptions([])
            console.log(value)
            // TODO: handle the error?? + not worikng
        })
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">ceate group</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* <form className="w-75">
                            <div className="mb-4">
                                <label htmlFor="inputTitle" className="form-label">title</label>
                                <input type="text" className="form-control" id="inputTitle" onChange={(e) => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="my-4">
                                <label htmlFor="inputTopic" className="form-label">topic</label>
                                <input type="text" className="form-control" id="inputTopic" onChange={(e) => setTopic(e.target.value)} value={topic} />
                            </div>
                        </form> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                        <button type="button" className="btn btn-primary" onClick={onChangeHandler}>let's start</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateQuestionModal;