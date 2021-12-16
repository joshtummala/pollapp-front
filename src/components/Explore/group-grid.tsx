import React from "react";
import GroupItem from "./group-item";

type GroupGridType = {
  groups: { title: string; topic: string; _id: string, members: string[] }[];
};
// TODO add a param for the array of groups
const GroupGrid = ({ groups }: GroupGridType) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {groups.map((group, index) => (
        <GroupItem key={index} title={group.title} topic={group.topic} id={group._id} members={group.members} />
      ))}
    </div>
  );
};

export default GroupGrid;
