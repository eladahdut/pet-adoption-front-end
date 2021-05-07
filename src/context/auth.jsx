import { createContext, useContext, useEffect, useState } from "react";
import localforage from "localforage";
import { getUserByToken } from "../lib/api";
import { useScrollTrigger } from "@material-ui/core";

export const AuthContext = createContext({
  isInitiallyLoaded: false,
  token: "",
  userId: "",
  userType: 2,
  userName: "",
  adoptedPets: [],
  fosteredPets: [],
  likedPets: [],
  saveToken: async (token) => {},
  removeToken: async () => {},
  saveUserId: async (userId) => {},
  saveAdoptedPet: (adoptedPets) => {},
  saveFosteredPet: (fosteredPets) => {},
  saveLikedPet: (likedPets) => {},
  saveUserType: (userType) => {},
  saveUserName: (userName) => {},
});

const tokenKey = "userToken";
const userIdKey = "userId";

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = (props) => {
  const [isInitiallyLoaded, setIsInitiallyLoaded] = useState(false);
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [fosteredPets, setFosteredPets] = useState([]);
  const [likedPets, setLikedPets] = useState([]);
  const [userType, setUserType] = useState();
  const [userName, setUserName] = useState();

  const saveUserType = (userType) => {
    setUserType(userType);
  };

  const saveUserName = (userName) => {
    setUserName(userName);
  };

  const saveUserId = async (userId) => {
    setUserId(userId);
    await localforage.setItem(userIdKey, userId);
  };
  const saveToken = async (token) => {
    setToken(token);
    await localforage.setItem(tokenKey, token);
  };
  const removeToken = async () => {
    setToken();
    await localforage.removeItem(tokenKey);
  };
  const saveAdoptedPet = (adoptedPets) => {
    setAdoptedPets(adoptedPets);
  };
  const saveFosteredPet = (fosteredPets) => {
    setFosteredPets(fosteredPets);
  };
  const saveLikedPet = (likedPets) => {
    setLikedPets(likedPets);
  };
  useEffect(() => {
    async function loginFlow(token) {
      try {
        const data = await getUserByToken(token);
        if (data) {
          await saveToken(data.data.userToken);
          await saveUserId(data.data.userId);
          saveAdoptedPet(data.data.adoptedPets);
          saveFosteredPet(data.data.fosterdPets);
          saveLikedPet(data.data.likedPets);
          saveUserType(data.data.userType);
          saveUserName(data.data.userName);
        }
      } catch (error) {
        console.log(error);
      }
    }
    localforage.getItem(tokenKey).then((token) => {
      if (token) {
        setToken(token);
        loginFlow(token);
      }
      localforage.getItem(userIdKey).then((userId) => {
        if (userId) {
          setUserId(userId);
        }
        setIsInitiallyLoaded(true);
      });
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        userId,
        token,
        isInitiallyLoaded,
        userType,
        userName,
        saveToken,
        removeToken,
        saveUserId,
        adoptedPets,
        fosteredPets,
        likedPets,
        saveAdoptedPet,
        saveFosteredPet,
        saveLikedPet,
        saveUserType,
        saveUserName,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
