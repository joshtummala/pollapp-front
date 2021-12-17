const user = {
  username: "",
  email: "",
  role: "",
  id: "",
};

const userReducer = (state = user, action: { type: any; user?: any }) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      console.log(action);
      return {
        ...user,
        username: action.user.username,
        email: action.user.email,
        role: action.user.role,
        id: action.user._id,
      }
    case "CLEAR_USER":
      return {};
    default:
      return state;
  }
};

export default userReducer;
