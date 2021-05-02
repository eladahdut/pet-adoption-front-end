import { Store } from "pullstate";
import localforage from "localforage";

export const UIStore = new Store({
  isLoggedIn: false,
  token: "",
  saveToken: localforage.setItem('auth-token', token),
  removeToken: localforage.removeItem('auth-token'),
});
