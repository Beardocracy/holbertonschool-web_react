import React, { createContext } from "react";

const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const logOut = () => {};
const AppContext = createContext({ defaultUser, logOut });

export { defaultUser, AppContext };