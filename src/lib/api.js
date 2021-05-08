import axios from "axios";

const baseUrl = "http://localhost:3001/";

function getAuthConfig(token) {
  return {
    headers: {
      "auth-token": token,
    },
  };
}
export async function addNewPet(pet, token) {
  const response = axios.post(baseUrl + "pets/pet", pet, getAuthConfig(token))
  return response.data;
}
export async function signup(
  firstName,
  lastName,
  phone,
  email,
  password,
  repeatPassword
) {
  const response = await axios.post(baseUrl + "users/signup", {
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
  const response = await axios.post(baseUrl + "users/login", {
    email,
    password,
  });
  return response.data;
}

export async function updateUserInfo(
  token,
  firstName,
  lastName,
  phone,
  email,
  password,
  id
) {
  const response = await axios.put(
    baseUrl + "users/user/" + id,
    { firstName, lastName, phone, email, password },
    { headers: { 'auth-token': token }, }
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
  return response.data;
}
export async function getPetsById(id) {
  const response = await axios.get(baseUrl + "pets/" + id);
  return response.data;
}
export async function likePet(petId, userId) {
  const response = await axios.post(baseUrl + "pets/pet/" + petId + "/save", {
    userId,
  });
  return response.data;
}
export async function unlikePet(petId, userId) {
  const response = await axios.delete(baseUrl + "pets/pet/" + petId + "/save/" + userId);
  return response.data;
}
export async function adoptPet(petId, userId, token, adoptionStatus) {
  const response = await axios.post(baseUrl + "pets/pet/" + petId + "/adopt", { userId, adoptionStatus }
    ,
    getAuthConfig(token)
  );
  return response.data;
}

export async function returnPet(petId, userId, token) {
  const response = axios.post(baseUrl + `pets/pet/${petId}/return`, { userId }, getAuthConfig(token));
  return response;
}

export async function getUserByToken(token) {
  const response = axios.get(baseUrl + "users/user/token",
    { headers: { 'auth-token': token } }
  )
  return response;
}


export async function getUserById(id, token) {
  const response = await axios.get(
    baseUrl + "users/user/" + id,
    getAuthConfig(token)
  );
  return response.data;
}

export async function getAllUsers(token) {
  const response = await axios.get(
    baseUrl + "users",
    getAuthConfig(token)
  );
  return response.data;
}

export async function getUserPets(userId, token) {
  const response = await axios.get(
    baseUrl + "pets/pet/user/" + userId, getAuthConfig(token))
  return response.data;
}

export async function uploadPic(token, file) {
  const response = await axios.post(
    baseUrl + "pets/picture", file, {
    headers: {
      "Content-Type": "multipart/form-data",
      "auth-token": token
    }
  }
  )
  return response.data;
}

