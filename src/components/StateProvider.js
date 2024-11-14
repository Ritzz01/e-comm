import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const CreateState = createContext();

export const StateProvider = ({ reducer,initialState,children }) => {
   

  return (
    <CreateState.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CreateState.Provider>
  );
};

export const useStateValue = () => useContext(CreateState);
