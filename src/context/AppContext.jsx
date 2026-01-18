import { createContext, useReducer, useEffect } from "react";
import reducer from "./AppReducer";
import { loadState, saveState } from "../utils/storage";

export const AppContext = createContext();

const INITIAL_STATE = {
  blueprints: [],
  contracts: [],
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    INITIAL_STATE,
    (initial) => loadState() || initial
  );

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
