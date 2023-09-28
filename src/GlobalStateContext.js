// src/GlobalStateContext.js
import { createContext, useContext, useReducer } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

const initialState = {
  survey: null, // Dodajte svoje početne vrijednosti ovdje
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_SURVEY':
      return { ...state, survey: action.payload };
    // Dodajte ostale akcije ovdje

    default:
      return state;
  };
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
