import { createContext, useContext, useEffect, useState } from "react";
import localforage from "localforage";

export const AuthContext = createContext({
  isInitiallyLoaded: false,
  token: "",
  userId: "",
  saveToken: async (token) => {},
  removeToken: async () => {},
  saveUserId: async (userId) => {},
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
  useEffect(() => {
    localforage.getItem(tokenKey).then((token) => {
      if (token) {
        setToken(token);
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
        saveToken,
        removeToken,
        saveUserId,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
