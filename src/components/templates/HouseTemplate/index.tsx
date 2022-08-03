import React from "react";
import { StyledHouseGrid, StyledHouseTemplate } from "./HouseTemplate.styled";

const HouseTemplate = ({ house, children }: any) => {
  const {
    name,
    region,
    coatOfArms,
    words,
    titles,
    seats,
    diedOut,
    overload,
    cadetBranches,
  } = house;

  return (
    <StyledHouseTemplate>
      {children}
      <h1>{name}</h1>
      <StyledHouseGrid>
        <div>Name of the house:</div>
        <div>{name}</div>
        <div>Region:</div>
        <div>{region}</div>
        <div>Coat of arms:</div>
        <div>{coatOfArms}</div>
        <div>Words:</div>
        <div>{words}</div>
        <div>Titles:</div>
        <div>{titles}</div>
        <div>Seats:</div>
        <div>{seats}</div>
        <div>Has died out:</div>
        <div>{diedOut}</div>
        <div>Has overload:</div>
        <div>{overload}</div>
        <div>Number of Cadet Branches:</div>
        <div>{cadetBranches && cadetBranches.length}</div>
      </StyledHouseGrid>
    </StyledHouseTemplate>
  );
};

export default HouseTemplate;
