const groups: any[] = [];

const groupsReducer = (state = groups, action: any) => {
  switch (action.type) {
    case "SET_GROUPS":
      return action.groups;
    case "CLEAR_GROUPS":
      return [];
    default:
      return state;
  }
};

export default groupsReducer;
