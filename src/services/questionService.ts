import axios from "axios";
import { API_URL } from "../consts";

export const searchQuestions = async (
  question?: string,
  group?: string,
  owner?: string
) => {
  const response = await axios.get(
    `${API_URL}/questions/search?${(question && "question=" + question) || ""}${
      (group && "group=" + group) || ""
    }${(owner && "owner=" + owner) || ""}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getQuestion = async (questionId: string) => {
  const response = await axios.get(`${API_URL}/question/${questionId}`, {
    withCredentials: true,
  });
  return response.data;
};

export const respondToQuestion = async (questionId: string, option: number) => {
  const response = await axios.put(
    `${API_URL}/question/${questionId}`,
    {
      response: option,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const createQuestion = async (question: {
  group_id: string;
  question: string;
  options: string[];
}) => {
  const response = await axios.post(`${API_URL}/question`, question, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteQuestion = async (questionId: string) => {
  const response = await axios.delete(`${API_URL}/question/${questionId}`, {
    withCredentials: true,
  });
  return response.data;
};
