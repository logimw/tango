import React from "react";
import { StyledMain } from "./MainWrapper.styled";
import Background from "../../Background";

interface Props {
  children: JSX.Element | string;
}

const MainWrapper = ({ children }: Props) => {
  return (
    <StyledMain>
      <Background />
      {children}
    </StyledMain>
  );
};

export default MainWrapper;
