import { API_URL } from "../consts";

export const login = async (username: string, password: string) => {
  console.log("login");
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    credentials: "include",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const signUp = async (user: {
  username: string;
  password: string;
  email: string;
}) => {
  const response = await fetch(`${API_URL}/user`, {
    method: "POST",
    body: JSON.stringify(user),
    credentials: "include",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  });
  return await response.json();
};

export const logout = (dispatch: any) => {
  fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
  }).then((response) => {
    dispatch({
      type: "CLEAR_USER",
    });
  });
};
