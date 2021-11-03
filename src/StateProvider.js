import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const StateContext = createContext();

const initialState = {
  user: null,
};

export const SET_USER = "SET_USER";

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const signInApp = (user) => {
    dispatch({ type: SET_USER, payload: user });
  };
  return (
    <StateContext.Provider value={{ ...state, signInApp }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  return useContext(StateContext);
};
