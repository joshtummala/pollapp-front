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

export const logout = (dispatch: any) => {
  axios
    .post(
      `${API_URL}/logout`,
      {},
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      dispatch({
        type: "CLEAR_USER",
      });
    });
};
