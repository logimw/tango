import React from "react";
import { StyledNavBtn, StyledNavigation } from "./Navigation.styled";
import { actionTypes } from "../../../reducers/charactersReducer";
import { useCharacters } from "../../../providers/CharactersProvider";

const Navigation = () => {
  const { characters, dispatch } = useCharacters();
  const { page, limit } = characters;
  // TODO: disable buttons if last/first page

  return (
    <StyledNavigation>
      <>
        <StyledNavBtn onClick={() => dispatch({ type: actionTypes.firstPage })}>
          &#10072;&#10094;
        </StyledNavBtn>
        <StyledNavBtn onClick={() => dispatch({ type: actionTypes.prevPage })}>
          &#10094;
        </StyledNavBtn>
        <StyledNavBtn onClick={() => dispatch({ type: actionTypes.nextPage })}>
          &#10095;
        </StyledNavBtn>
        <StyledNavBtn onClick={() => dispatch({ type: actionTypes.lastPage })}>
          &#10095;&#10072;
        </StyledNavBtn>

        <div className="page-counter">
          Page {page} of {Math.ceil(2134 / limit!)}
        </div>
      </>
    </StyledNavigation>
  );
};

export default Navigation;
