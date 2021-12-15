import React from "react";
import GroupItem from "./group-item";

type GroupGridType = {

}
// TODO add a param for the array of groups
const GroupGrid = ({ }: GroupGridType) => {
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <GroupItem title="text" topic="topic" />
            <GroupItem title="text" topic="topic" />
            <GroupItem title="text" topic="topic" />
            <GroupItem title="text" topic="topic" />
        </div>

    )
}

export default GroupGrid;