import axios from "axios";
import { API_URL } from "../consts";

export const searchGroups = async (title?: string, topic?: string) => {
  const response = await axios.get(
    `${API_URL}/groups/search?${(title && "title=" + title) || ""}${
      (topic && "topic=" + topic) || ""
    }`
  );
  return response.data;
};

export const getGroup = async (groupId: string) => {
  const response = await axios.get(`${API_URL}/group/${groupId}`, {
    withCredentials: true,
  });
  return response.data;
};

export const createGroup = async (group: { title: string; topic: string }) => {
  const response = await axios.post(`${API_URL}/group`, group, {
    withCredentials: true,
  });
  return response.data;
};

export const joinGroup = async (groupId: string, userId: string) => {
  const response = await axios.post(
    `${API_URL}/group/${groupId}`,
    {
      add_members: [userId],
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const leaveGroup = async (groupId: string, userId: string) => {
  const response = await axios.put(
    `${API_URL}/group/${groupId}`,
    {
      remove_members: [userId],
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const deleteGroup = async (groupId: string) => {
  const response = await axios.delete(`${API_URL}/group/${groupId}`, {
    withCredentials: true,
  });
  return response.data;
};
