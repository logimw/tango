import React, { useState } from "react";
import { useCharacters } from "providers/CharactersProvider";
import { actionTypes } from "reducers/charactersReducer";

const SearchBar = () => {
  // @ts-ignore
  const { dispatch } = useCharacters();
  const [value, setValue] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (value.length > 2) {
      setValue("");
      return dispatch({ type: actionTypes.setCulture, payload: value });
    }
    return dispatch({ type: actionTypes.setCulture, payload: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search by culture:</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Eg. Braavosi"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
