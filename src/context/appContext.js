import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const StateProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    loading: false,
    title: "",
    weather: "",
    woeid: "1398823",
    active: {},
  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};
