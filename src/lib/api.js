import axios from "axios";

const BaseUrl = "http://localhost:3001/";

function getAuthConfig(token) {
  return {
    headers: {
      Authorization: token,
    },
  };
}

export async function signup(email, password) {
  const response = await axios.post(BaseUrl + "/users", { email, password });
  return response.data;
}

export async function login(email, password) {
  const response = await axios.post(BaseUrl + "users/login", {
    email,
    password,
  });
  return response.data;
}

export async function createProduct(name, price, category, token) {
  const response = await axios.post(
    BaseUrl + "/products",
    { name, price, category },
    getAuthConfig(token)
  );
  return response.data;
}

export async function getUserById(id, token) {
  const response = await axios.get(
    BaseUrl + "users/user/" + id,
    getAuthConfig(token)
  );
  return response.data;
}

export async function getMyProducts(token) {
  const response = await axios.get(
    BaseUrl + "/products/me",
    getAuthConfig(token)
  );
  return response.data;
}

// import axios from "axios";

// const baseUrl = "http://localhost:3001";

// const getAuthConfig = (token) => {
//   return {
//     headers: {
//       Authorization: token
//     }
//   }
// }

// export async function signup(
//   firstName,
//   lastName,
//   phone,
//   email,
//   password,
//   repeatPassword
// ) {
//   const response = await axios.post(baseUrl + "/users/signup", {
//     firstName,
//     lastName,
//     phone,
//     email,
//     password,
//     repeatPassword,
//   });
//   return response.data;
// }
// export async function login(email, password) {
//   const response = await axios.post(baseUrl + "/users/login", {
//     email,
//     password,
//   });
//   return response.data;
// }
