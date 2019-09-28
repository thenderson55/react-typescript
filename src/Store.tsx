import React from "react";
import { anyTypeAnnotation } from "@babel/types";
import { IAction, IState } from "./interfaces";

// needs to be above store
const initialState: IState = {
  episodes: [],
  favourites: []
};

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favourites: action.payload };
    default:
      return state;
  }
}

// adding | makes it a conditional "or"
export const Store = React.createContext<IState | any>(initialState);

export function StoreProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
