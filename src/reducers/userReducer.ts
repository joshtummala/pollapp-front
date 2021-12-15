const userReducer = (state = {}, action: { type: any; user?: any }) => {
  switch (action.type) {
    case "SET_USER":
      console.log(action);
      return action.user;
    case "CLEAR_USER":
      return {};
    default:
      return state;
  }
};

export default userReducer;
