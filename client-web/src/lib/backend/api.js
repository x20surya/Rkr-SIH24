import axios from "axios";

export const baseURL = "http://localhost:3000";

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
      cart: [],
    },
  })
    .then((res) => {
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      console.log(res.data);
      return res.data;
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

export async function getProduct(id, token) {
  await axios({
    url: "product/getProduct",
    method: "post",
    baseURL: baseURL,
    data: {
      productId: id,
    },
    headers: {
      authentication: `Pookie ${token}`,
    },
  })
    .then((res) => {
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      return res;
    })
    .catch((e) => {
      throw Error(e);
    });
}

export async function becomeASeller(
  sellerName,
  region,
  description,
  flat,
  area,
  pincode,
  city,
  phone,
  title,
  landmark
) {
  const token = localStorage.getItem("token");
  await axios({
    url: "/seller/signup",
    method: "post",
    baseURL: baseURL,
    data: {
      sellerName: sellerName,
      region: region,
      description: description,
      address: {
        flat: flat,
        area: area,
        pincode: pincode,
        city: city,
        phone: phone,
        title: title,
        landmark: landmark,
      },
    },
    headers: {
      authentication: `Pookie ${token}`,
    },
  })
    .then((res) => {
      if (res.data.error) {
        throw new Error(res.data.error);
      }
      console.log(res.data);
      return res.data;
    })
    .catch((e) => {
      throw new Error(e);
    });
}
