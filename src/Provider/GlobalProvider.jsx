import React from "react";
import { useState } from "react";
import { createContext } from "react";
import Alert from "../components/Alert";

//CONTENT
export const GlobalContext = createContext(null);

//COMPOSITE
const GlobalProvider = ({ children }) => {
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");

  const [Store, setStore] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );

  const List = {
    Store,
    setStore,
    alert,
    setalert,
    alertMessage,
    setalertMessage,
  };

  return (
    <GlobalContext.Provider value={List}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
