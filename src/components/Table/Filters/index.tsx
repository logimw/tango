import React from "react";
import { actionTypes } from "../../../reducers/charactersReducer";
import { useCharacters } from "../../../providers/CharactersProvider";
import { StyledFilters } from "./Filters.styled";

const Filters = () => {
  // @ts-ignore
  const { characters, dispatch } = useCharacters();
  const { gender, limit } = characters;
  return (
    <StyledFilters>
      Results per page:{" "}
      <select
        value={limit}
        onChange={(e) =>
          dispatch({ type: actionTypes.setLimit, payload: e.target.value })
        }
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      Select gender:{" "}
      <select
        value={gender}
        onChange={(e) =>
          dispatch({ type: actionTypes.setGender, payload: e.target.value })
        }
      >
        <option value="Any">Any</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </StyledFilters>
  );
};

export default Filters;
