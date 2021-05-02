import axios from "axios";

const baseUrl = "http://localhost:5050";

// const generate getAuthConfig = (token) => {
//     return {
//         headers: {
//             Authorization: token
//         }
//     }
// }

export async function signup(
  firstName,
  lastName,
  phone,
  email,
  password,
  repeatPassword
) {
  const response = await axios.post(baseUrl + "/users/signup", {
    firstName,
    lastName,
    phone,
    email,
    password,
    repeatPassword,
  });
  return response.data;
}
export async function login(email, password) {
  const response = await axios.post(baseUrl + "/users/login", {
    email,
    password,
  });
  return response.data;
}
