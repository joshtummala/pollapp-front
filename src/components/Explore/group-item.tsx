import React from "react";

type GroupItemType = {
  title: string;
  topic: string;
  id: string;
  members: string[];
};
const GroupItem = ({ title, topic, id, members }: GroupItemType) => {
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h6 className="card-text">{topic}</h6>
          <a href={`/group/${id}`} className="btn btn-outline-primary rounded-pill">
            check it out
          </a>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
