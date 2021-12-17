const questions: any[] = [];

const questionsReducer = (
  state = questions,
  action: { type: string; questions: any[] }
) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return action.questions;
    case "CLEAR_QUESTIONS":
      return [];
    default:
      return state;
  }
};

export default questionsReducer;
