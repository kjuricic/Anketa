// src/GlobalStateContext.js
import { createContext, useContext, useReducer } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({ children }) => {
  const initialState = {
    // Dodajte svoje početne vrijednosti ovdje
  };

  const reducer = (state, action) => {
    switch (action.type) {
      // Definirajte svoje akcije ovdje
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
