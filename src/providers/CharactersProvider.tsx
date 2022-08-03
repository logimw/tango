import React, { useContext, useReducer } from "react";
import { charactersReducer } from "reducers/charactersReducer";

const initialState = { page: 1, limit: 25, gender: "Any", culture: "" };
// TODO: remove 'any' below
const CharactersContext = React.createContext<null | any>(null);

type CharactersProviderType = {
  children: JSX.Element;
};

export const CharactersProvider = ({ children }: CharactersProviderType) => {
  const [characters, dispatch] = useReducer(charactersReducer, initialState);
  const contextValue = { characters, dispatch };
  return (
    <CharactersContext.Provider value={contextValue}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharactersContext);
  if (!context) {
    throw new Error(
      "useCharacters must be used within a CharactersProvider. Wrap a parent component in <CharactersProvider> to fix this error."
    );
  }
  return context;
};
