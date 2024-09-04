import { data } from "autoprefixer";
import axios from "axios";

const baseURL = "";

export async function createUser(email, password, firstName, lastName) {
  await axios({
    url: "/user/signup",
    method: "post",
    baseURL: baseURL,
    data: {
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    },
  })
    .then((res) => {
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      return res.data.token;
    })
    .catch((e) => {
      throw new Error(e);
    });
}

export async function getCurrentUser(token) {
  await axios({
    url: "/user/getcurrentuser",
    method: "get",
    baseURL: baseURL,
    headers: { authentication: `Pookie ${token}` },
  })
    .then((res) => {
      if (res.data.error) {
        throw new Error(res.data.error);
      }
    })
    .catch((e) => {
      throw Error(e);
    });
}

export async function signIn(email, password) {
  await axios({
    url: "user/signin",
    method: "post",
    baseURL: baseURL,
    data: {
      email: email,
      password: password,
    },
  }).then((res) => {
    if (res.data.error) {
      throw new Error(res.data.error);
    }
    localStorage.setItem("token", res.data.token);
    return res.data;
  });
}

export function signOut() {
    localStorage.setItem("token", "");
}
