const addQuestion = false;

const addQuestionReducer = (state = addQuestion, action: { type: string }) => {
  switch (action.type) {
    case "SET_ADD_QUESTION":
      return true;
    case "CLEAR_ADD_QUESTION":
      return false;
    default:
      return state;
  }
};

export default addQuestionReducer;
