import axios from "axios";

const baseUrl = "http://localhost:3001/";

function getAuthConfig(token) {
  return {
    headers: {
      Authorization: token,
    },
  };
}

export async function signup(email, password) {
  const response = await axios.post(baseUrl + "/users", { email, password });
  return response.data;
}

export async function login(email, password) {
  const response = await axios.post(baseUrl + "users/login", {
    email,
    password,
  });
  return response.data;
}

export async function updateUserInfo(
  firstName,
  lastName,
  phone,
  email,
  password,
  id
) {
  const response = await axios.put(
    baseUrl + "users/user/" + id,
    { firstName, lastName, phone, email, password }
    // getAuthConfig(token)
  );
  return response.data;
}

export async function getPets() {
  const response = await axios.get(baseUrl + "pets");
  return response.data;
}
export async function getPetsByCriteria(criteria) {
  const response = await axios.get(baseUrl + "pets/search/" + criteria);
  console.log("log from func", response.data);
  return response.data;
}
// export async function createProduct(name, price, category, token) {
//   const response = await axios.post(
//     baseUrl + "/products",
//     { name, price, category },
//     getAuthConfig(token)
//   );
//   return response.data;
// }

export async function getUserById(id, token) {
  const response = await axios.get(
    baseUrl + "users/user/" + id,
    getAuthConfig(token)
  );
  return response.data;
}

export async function getMyProducts(token) {
  const response = await axios.get(
    baseUrl + "/products/me",
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
