import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const StateProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    loading: false,
    title: "",
    weather: "",
    woeid: "",
  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};
