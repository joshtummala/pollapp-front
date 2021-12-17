const users: any[] = [];

const usersReducer = (
  state = users,
  action: { type: any; users?: any; user?: any }
) => {
  console.log(action);
  switch (action.type) {
    case "SET_USERS":
      return action.users;
    case "CLEAR_USERS":
      return [];
    case "REMOVE_USER":
      return state.filter((user: any) => user._id !== action.user._id);
    default:
      return state;
  }
};

export default usersReducer