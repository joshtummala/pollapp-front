import { API_URL } from "../consts";

export const searchQuestions = async (
  question?: string,
  group?: string,
  owner?: string
) => {
  const response = await fetch(
    `${API_URL}/questions/search?${(question && "question=" + question) || ""}${
      (group && "group=" + group) || ""
    }${(owner && "owner=" + owner) || ""}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  return await response.json();
};

export const getQuestion = async (questionId: string) => {
  const response = await fetch(`${API_URL}/question/${questionId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const respondToQuestion = async (questionId: string, option: number) => {
  const response = await fetch(`${API_URL}/question/${questionId}`, {
    method: "PUT",
    credentials: "include",
    body: JSON.stringify({
      response: option,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const createQuestion = async (question: {
  group_id: string;
  question: string;
  options: string[];
}) => {
  const response = await fetch(`${API_URL}/question`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(question),
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const deleteQuestion = async (questionId: string) => {
  const response = await fetch(`${API_URL}/question/${questionId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};
