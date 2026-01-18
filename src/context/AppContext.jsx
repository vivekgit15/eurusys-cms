import React, { createContext, useReducer, useEffect } from "react";
import AppReducer, { initialState } from "./AppReducer";
import { loadState, saveState } from "../utils/storage";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export function AppProvider({ children }) {
  // Load persisted state (mocked persistence)
  const persistedState = loadState();

  const [state, dispatch] = useReducer(
    AppReducer,
    persistedState || initialState
  );

  // Persist state on every change
  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
