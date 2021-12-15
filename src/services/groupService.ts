import { API_URL } from "../consts";

export const searchGroups = async (title?: string, topic?: string) => {
  const response = await fetch(
    `${API_URL}/groups/search?${(title && "title=" + title) || ""}${(topic && "topic=" + topic) || ""
    }`,
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

export const getGroup = async (groupId: string) => {
  const response = await fetch(`${API_URL}/group/${groupId}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const createGroup = async (group: { title: string; topic: string }) => {
  const response = await fetch(`${API_URL}/group`, {
    method: "POST",
    body: JSON.stringify(group),
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const joinGroup = async (groupId: string, userId: string) => {
  const response = await fetch(`${API_URL}/group/${groupId}`, {
    method: "PUT",
    body: JSON.stringify({
      add_members: [userId],
    }),
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const leaveGroup = async (groupId: string, userId: string) => {
  const response = await fetch(`${API_URL}/group/${groupId}`, {
    method: "PUT",
    body: JSON.stringify({
      remove_members: [userId],
    }),
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const deleteGroup = async (groupId: string) => {
  const response = await fetch(`${API_URL}/group/${groupId}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
};
