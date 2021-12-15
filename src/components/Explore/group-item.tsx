import React from "react";

type GroupItemType = {
    title: string,
    topic: string,
}
const GroupItem = ({ title, topic }: GroupItemType) => {
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <h6 className="card-text">{topic}</h6>
                    <a href="#" className="btn btn-outline-primary rounded-pill">check it out</a>
                </div>
            </div>
        </div>
    )
}

export default GroupItem;