import axios from "axios";
import { API_URL } from "../consts";

export const login = async (username: string, password: string) => {
  console.log("login");
  const response = await axios.post(
    `${API_URL}/login`,
    {
      username,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return await response.data;
};

export const signUp = async (user: {
  username: string;
  password: string;
  email: string;
}) => {
  const response = await axios.post(
    `${API_URL}/user`,
    {
      username: user.username,
      password: user.password,
      email: user.email,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(
    `${API_URL}/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axios.delete(`${API_URL}/user/${userId}`, {
    withCredentials: true,
  });
  return response.data;
};

export const updateUser = async (
  userId: string,
  user: { username?: string; email?: string }
) => {
  const response = await axios.put(`${API_URL}/user/${userId}`, user, {
    withCredentials: true,
  });
  return response.data;
};

export const getUser = async (userId: string) => {
  const response = await axios.get(`${API_URL}/user/${userId}`, {
    withCredentials: true,
  });
  return response.data;
};
